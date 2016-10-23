app.controller('CustomerProfileController', function ($scope, $ionicModal, $ionicPopover, $timeout, Customer, $state) {
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
