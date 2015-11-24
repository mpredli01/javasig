angular.module("javasig").controller("PartnersListCtrl",['$scope','$stateParams','$meteor',function($scope,$stateParams,$meteor) {
    $scope.page = 1;
    $scope.perPage = 10;
    $scope.sort = { partner: 1 };
    $scope.orderProperty = '1';

    $scope.partners = $meteor.collection(function() {
        return Partners.find({}, {
            sort : $scope.getReactively('sort')
            });
        });

    $meteor.autorun($scope,function() {
        $meteor.subscribe('partners', {
            limit: parseInt($scope.getReactively('perPage')),
            skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
            sort: $scope.getReactively('sort')
            },$scope.getReactively('search')).then(function() {
            $scope.partnersCount = $meteor.object(Counts ,'numberOfPartners',false);
            });
        });

    $scope.partners.forEach(function(partner) {
        partner.onClicked = function() {
            $state.go('partnerDetails',{partnerId: partner._id});
            };
        });
    }]);
