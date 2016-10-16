app.service('Customer', function (CommonConfig,$http) {
	var self = this;
	var baseUrl = CommonConfig.getBaseUrl();
	self.getCustomerList = function(){
	  return $http.get(baseUrl + '/customers');
	};

  self.saveCustomer = function(customerData){
    return $http.post(baseUrl + '/customers',customerData);
  };

  self.getCustomerByCode = function(customerCode){
    return $http.get(baseUrl + '/customers' + '/' + customerCode);
  };

	return self;

});
