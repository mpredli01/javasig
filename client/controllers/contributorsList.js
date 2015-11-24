angular.module("javasig").controller("ContributorsListCtrl",['$scope','$stateParams','$meteor',function($scope,$stateParams,$meteor) {
    $scope.page = 1;
    $scope.perPage = 10;
    $scope.sort = { contributor: 1 };
    $scope.orderProperty = '1';

    $scope.contributors = $meteor.collection(function() {
        return Contributors.find({}, {
            sort: $scope.getReactively('sort')
        });
    });

    $meteor.autorun($scope,function() {
        $meteor.subscribe('contributors', {
            limit: parseInt($scope.getReactively('perPage')),
            skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
            sort: $scope.getReactively('sort')
        },$scope.getReactively('search')).then(function() {
            $scope.contributorsCount = $meteor.object(Counts,'numberOfContributors',false);
        });
    });

    $scope.contributors.forEach(function(contributor) {
        contributor.onClicked = function() {
            $state.go('contributorDetails',{contributorId: contributor._id});
        };
    });
}]);
