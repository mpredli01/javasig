angular.module("javasig").controller("ContributorDetailsCtrl",['$scope','$stateParams','$meteor',function($scope,$stateParams,$meteor) {
    $scope.contributor = $meteor.object(Contributors,$stateParams.contributorId).subscribe('contributors');

    $scope.users = $meteor.collection(Meteor.users,false).subscribe('users');

    $scope.$meteorSubscribe('contributors');

    $scope.save = function() {
        $scope.contributor.save().then(function(numberOfDocs) {
            console.log('save success doc affected ',numberOfDocs);
            },function(error) {
            console.log('save error',error);
            });
        };

    $scope.save = function() {
        $scope.contributor.save();
        };

    $scope.reset = function() {
        $scope.contributor.reset();
        };

    $scope.map = {
        center: {
            latitude: 40.5087,
            longitude: -74.8601
            },
        zoom: 8,
        events: {
            click: function(mapModel,eventName,originalEventArgs) {
                if(!$scope.contributor)
                    return;
                if(!$scope.contributor.location)
                    $scope.contributor.location = {};
                $scope.contributor.location.latitude = originalEventArgs[0].latLng.lat();
                $scope.contributor.location.longitude = originalEventArgs[0].latLng.lng();
                // scope apply required because this event handler is outside of the angular domain
                $scope.$apply();
                }
            },
        marker: {
            options: { draggable: true },
            events: {
                dragend: function(marker,eventName,args) {
                    if(!$scope.contributor.location)
                        $scope.contributor.location = {};
                    $scope.contributor.location.latitude = marker.getPosition().lat();
                    $scope.contributor.location.longitude = marker.getPosition().lng();
                    }
                }
            }
        };
    }]);
