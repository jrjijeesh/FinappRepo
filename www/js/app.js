var app = angular.module('dsmsPortalApp', ['ionic', 'ionic-material']);

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

     .state('app.customer-profile', {
        url: '/customer-profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/customer-profile.html',
            controller: 'CustomerProfileController'
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
    $urlRouterProvider.otherwise('/app/customer-profile');





    //For CORS
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = false;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

});
