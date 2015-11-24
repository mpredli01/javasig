angular.module('javasig').controller('MeetingsListCtrl',['$scope','$meteor','$rootScope','$state','$modal',function($scope,$meteor,$rootScope,$state,$modal) {
    $scope.page = 1;
    $scope.perPage = 12;
    $scope.sort = { month: 1 };
    $scope.orderProperty = '-1';

    var styles1 = [{
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [{"visibility": "on"}, {"color": "#e0efef"}]
        }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{"visibility": "on"}, {"hue": "#1900ff"}, {"color": "#c0e8e8"}]
            }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{"lightness": 100}, {"visibility": "simplified"}]
            }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{"visibility": "on"}, {"lightness": 700}]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{"color": "#7dcdcd"}]
        }];

    var styles2 = [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#444444"}]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{"color": "#f2f2f2"}]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{"saturation": -100}, {"lightness": 45}]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{"visibility": "simplified"}]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{"visibility": "off"}]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
        }];

    $scope.meetings = $meteor.collection(function() {
        return Meetings.find({}, {
            sort: $scope.getReactively('sort')
            });
        });

    $meteor.autorun($scope,function() {
        $meteor.subscribe('meetings', {
            limit: parseInt($scope.getReactively('perPage')),
            skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
            sort: $scope.getReactively('sort')
            },$scope.getReactively('search')).then(function() {
                $scope.meetingsCount = $meteor.object(Counts,'numberOfMeetings',false);
                });
        });

    $scope.meetings.forEach(function(meeting) {
        meeting.onClicked = function() {
            $state.go('meetingDetails',{meetingId: meeting._id});
            };
        });

    $scope.map = {
        center: {
            latitude: 40.6330,
            longitude: -74.3729
            },
        options: {
            styles: styles2,
            maxZoom: 30
            },
        zoom: 14
        };

    $scope.pageChanged = function(newPage) {
        $scope.page = newPage;
        };

    $scope.$watch('orderProperty',function() {
        if($scope.orderProperty)
            $scope.sort = {name: parseInt($scope.orderProperty)};
        });
    }]);
