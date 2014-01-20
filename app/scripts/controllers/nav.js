'use strict';

angular.module('nciJsStackApp')
  .controller('NavCtrl', function ($scope, localStorageService, NotificationService, $location, $rootScope) {
    $scope.loginShow = true;

    if(localStorageService.get('nci-admin')){
		$scope.loginShow = false;    	
    }

    $scope.logout = function(){
    	$location.path("/")
    	NotificationService.success("Logout Successful.", "Bye boss.");
		$scope.loginShow = true;
		localStorageService.remove('nci-admin');
		$rootScope.$broadcast('logout');
    }

    $scope.$on('login', function () {
        $scope.loginShow = false;
    });
  });
