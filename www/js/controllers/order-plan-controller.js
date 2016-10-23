app.controller('CustomerController', function ($scope, $ionicModal, $ionicPopover, $timeout, Customer, $state) {
    // Form data for the login modal
    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Popover Title</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });

    $scope.loadCustomerList = function(){
      Customer.getCustomerList()
        .success(function (data) {
          $scope.customerList = data;
        })
        .error(function (error) {
          console.log(error)
        })
    };

    $scope.goToDetails = function(customerCode){
        $state.go('app.customer',{customerCode: customerCode});
    };

    var init = function(){
      $scope.customerList = [];

      $scope.loadCustomerList();

    };
    init();


});
