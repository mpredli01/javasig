angular.module("javasig").controller("YearsCtrl",['$scope','$stateParams','$meteor',function($scope,$stateParams,$meteor) {
    // $scope.page = 1;
    // $scope.perPage = 12;
    // $scope.sort = { meeting: 1 };
    // $scope.orderProperty = '1';

    $scope.id = $stateParams.meetingId;

    // $scope.meetings = $meteor.collection(function() {
        // return Meetings.find({'year':year}, {
            // sort: $scope.getReactively('sort')
            // });
        // });

    $scope.meetings = $meteor.collection(function() {
        return Meetings.find({'year':2001});
        });


    // $meteor.autorun($scope,function() {
        // $meteor.subscribe(year, {
            // limit: parseInt($scope.getReactively('perPage')),
            // skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
            // sort: $scope.getReactively('sort')
            // },$scope.getReactively('search')).then(function() {
            // $scope.meetingsCount = $meteor.object(Counts ,'numberOfMeetings',false);
            // });
        // });

    $scope.meetings.forEach(function(meeting) {
        meeting.onClicked = function() {
            $state.go(year,{meetingId: meeting._id});
            };
        });
    }]);
