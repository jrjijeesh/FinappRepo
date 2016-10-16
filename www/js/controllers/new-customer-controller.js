app.controller('NewCustomerController', function ($scope, $ionicModal, $ionicPopover, $timeout,Customer) {

  $scope.saveCustomer = function(){
    if($scope.customer){
      Customer.saveCustomer($scope.customer)
        .success(function(data){
          console.log(data);
        })
        .error(function(error){
          console.log(error);
        })
    }
  };


  var init = function(){
    $scope.customer = {};
  };
  init();

});
