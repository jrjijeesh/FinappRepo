// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('finApp', ['ionic', 'ionic-material']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    /*.state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })


    .state('app.home', {
        url: '/home',
        abstract:true,
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                //controller: 'HomeController'
            }
        }

    })

    .state('app.home.promotions', {
        url: '/promotions',
        views: {
            'menuContent': {
                templateUrl: 'templates/promotions.html',
                //controller: 'PromotionsController'
            }
        }

    })*/





      .state('app.customer-list', {
        url: '/customer-list',
        views: {
          'menuContent': {
            templateUrl: 'templates/customers/list-customers.html',
            controller: 'CustomerController'
          }
        }
      })
      .state('app.customer-new', {
        url: '/customer-new',
        views: {
          'menuContent': {
            templateUrl: 'templates/customers/new-customer.html',
            controller: 'NewCustomerController'
          }
        }
      })

      .state('app.customer', {
        url: '/customer/:customerCode',
        views: {
          'menuContent': {
            templateUrl: 'templates/customers/customer-details.html',
            controller: 'CustomerDetailsController'
          }
        }
      })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/customer-list');





    //For CORS
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = false;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

});
