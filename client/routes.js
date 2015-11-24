angular.module("javasig").run(["$rootScope","$location",function($rootScope,$state) {
    $rootScope.$on("$stateChangeError",function(event,next,previous,error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if(error === "AUTH_REQUIRED") {
            $state.go("/");
            }
        });
    }]);

angular.module('javasig').config(['$urlRouterProvider','$stateProvider','$locationProvider',function($urlRouterProvider,$stateProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'client/views/javasig.ng.html',
            controler: 'HomeCtrl'
            })
        .state('aboutus', {
            url: '/aboutus',
            templateUrl: 'client/views/aboutUs.ng.html',
            controller: 'AboutUsCtrl'
        })
        .state('archive', {
            url: '/archive',
            templateUrl: 'client/views/archive.ng.html',
            controller: 'ArchiveCtrl'
            })
        .state('meetings', {
            url: '/meetings',
            templateUrl: 'client/views/meetingsList.ng.html',
            controller: 'MeetingsListCtrl'
            })
        .state('meetingDetails', {
            url: '/meetings/:meetingId',
            templateUrl: 'client/views/meetingDetails.ng.html',
            controller: 'MeetingDetailsCtrl'
            })
        .state('partners', {
            url: '/partners',
            templateUrl: 'client/views/partnersList.ng.html',
            controller: 'PartnersListCtrl'
            })
        .state('partnerDetails', {
            url: '/partners/:partnerId',
            templateUrl: 'client/views/partnerDetails.ng.html',
            controller: 'PartnerDetailsCtrl'
            })
        .state('sponsor', {
            url: '/sponsor',
            templateUrl: 'client/views/sponsor.ng.html',
            controller: 'SponsorCtrl'
            })
        .state('contributors', {
            url: '/contributors',
            templateUrl: 'client/views/contributorsList.ng.html',
            controller: 'ContributorsListCtrl'
            })
        .state('/contributorDetails', {
            url: '/contributors/:contributorId',
            templateUrl: 'client/views/contributorDetails.ng.html',
            controller: 'ContributorDetailsCtrl'
            })
        .state('2001', {
            url: '/2001',
            templateUrl: 'client/meetings/2001/2001.ng.html',
            controller: 'YearsCtrl',
            params: {
                year: 2001
                }
            })
        .state('2002', {
            url: '/2002',
            templateUrl: 'client/meetings/2002/2002.ng.html',
            controller: 'YearsCtrl',
            params: {
                year: 2002
                }
            });
    $urlRouterProvider.otherwise("/");
    }]);
