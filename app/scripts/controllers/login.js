'use strict';

angular.module('nciJsStackApp')
  .controller('LoginCtrl', function ($scope, firebaseCollection, firebaseBinding, NotificationService, $timeout, localStorageService, $location, $rootScope) {
    
    $scope.loginDisabled = true;
    var adminPromise = firebaseBinding('https://nci-website.firebaseio.com/admin', $scope, 'admin');
  	adminPromise.then(function(admin) {
  		$scope.login = function(){
  			NotificationService.info("Checking Credentials.", "Please wait...");
  			if(admin.username === $scope.username && admin.password === $scope.password){
  				$timeout(function() {
  					localStorageService.add('nci-admin','admin');
  					$rootScope.$broadcast('login');
  					$location.path("/materials");
			        NotificationService.success("Login Successful.", "Welcome Admin");
			    }, 1000);
  			} else {
  				$timeout(function() {
			        NotificationService.error("Login Unsuccessful.", "Invalid Credentials");
			    }, 1000);
  			}
  		};

    	$scope.loginDisabled = false;
  	});

  });
