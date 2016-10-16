app.service('CommonConfig', function () {
	var self = this;
	//var baseUrl = 'http://finapp-jrjapps.rhcloud.com/finapp';
  var baseUrl = 'http://localhost:8080/finapp';
	self.getBaseUrl = function(){
	  return baseUrl;
	};

	return self;

});
