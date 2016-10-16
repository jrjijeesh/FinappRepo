app.controller('CustomerDetailsController', function ($scope, $ionicModal, $ionicPopover, $timeout, Customer, $stateParams) {

    $scope.loadCustomerByCode = function(customerCode){
      Customer.getCustomerByCode(customerCode)
        .success(function (data) {
          $scope.currentCustomer = data;
        })
        .error(function (error) {
          console.log(error)
        })
    };


    var init = function(){
      $scope.currentCustomer = {};

      var customerCode = $stateParams.customerCode;

      if(customerCode) {
        $scope.loadCustomerByCode(customerCode);
      }

    };
    init();


});
