angular.module("javasig").controller("PartnerDetailsCtrl",['$scope','$stateParams','$meteor',function($scope,$stateParams,$meteor) {
    $scope.partner = $meteor.object(Partners,$stateParams.partnerId).subscribe('partners');

    $scope.users = $meteor.collection(Meteor.users,false).subscribe('users');

    $scope.$meteorSubscribe('partners');

    $scope.save = function() {
        $scope.partner.save().then(function(numberOfDocs) {
            console.log('save success doc affected ',numberOfDocs);
            },function(error) {
                console.log('save error',error);
                });
        };

    $scope.save = function() {
        $scope.partner.save();
        };

    $scope.reset = function() {
        $scope.partner.reset();
        };

    $scope.map = {
        center: {
            latitude: 40.5087,
            longitude: -74.8601
            },
        zoom: 8,
        events: {
            click: function(mapModel,eventName,originalEventArgs) {
                if(!$scope.partner)
                    return;
                if(!$scope.partner.location)
                    $scope.partner.location = {};
                $scope.partner.location.latitude = originalEventArgs[0].latLng.lat();
                $scope.partner.location.longitude = originalEventArgs[0].latLng.lng();
                // scope apply required because this event handler is outside of the angular domain
                $scope.$apply();
                }
            },
        marker: {
            options: { draggable: true },
            events: {
                dragend: function(marker,eventName,args) {
                    if(!$scope.partner.location)
                        $scope.partner.location = {};
                    $scope.partner.location.latitude = marker.getPosition().lat();
                    $scope.partner.location.longitude = marker.getPosition().lng();
                    }
                }
            }
        };
    }]);
