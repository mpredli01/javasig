angular.module("javasig").controller("MeetingDetailsCtrl",['$scope','$stateParams','$meteor',function($scope,$stateParams,$meteor) {
    $scope.meeting = $meteor.object(Meetings,$stateParams.meetingId).subscribe('meetings');

    $scope.users = $meteor.collection(Meteor.users,false).subscribe('users');

    $scope.$meteorSubscribe('meetings');

    $scope.save = function() {
        $scope.meeting.save().then(function(numberOfDocs) {
            console.log('save success doc affected ',numberOfDocs);
            },function(error) {
                console.log('save error',error);
                });
        };

    $scope.save = function() {
        $scope.meeting.save();
        };

    $scope.reset = function() {
        $scope.meeting.reset();
        };

    $scope.map = {
        center: {
            latitude: 40.6330,
            longitude: -74.3729
            },
        zoom: 14,
        events: {
            click: function (mapModel,eventName,originalEventArgs) {
                if(!$scope.meeting)
                    return;
                if(!$scope.meeting.location)
                    $scope.meeting.location = {};
                $scope.meeting.location.latitude = originalEventArgs[0].latLng.lat();
                $scope.meeting.location.longitude = originalEventArgs[0].latLng.lng();
                // scope apply required because this event handler is outside of the angular domain
                $scope.$apply();
                }
            },
        marker: {
            options: { draggable: true },
            events: {
                dragend: function(marker,eventName,args) {
                    if(!$scope.meeting.location)
                        $scope.meeting.location = {};
                    $scope.meeting.location.latitude = marker.getPosition().lat();
                    $scope.meeting.location.longitude = marker.getPosition().lng();
                    }
                }
            }
        };
    }]);
