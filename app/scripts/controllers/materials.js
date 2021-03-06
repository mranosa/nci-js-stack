'use strict';

angular.module('nciJsStackApp')
  .controller('MaterialsCtrl', function ($scope, firebaseCollection, firebaseBinding, $window, localStorageService) {
    $scope.showAdd = false;
    if(localStorageService.get('nci-admin')){
      $scope.showAdd = true;     
    }

  	$scope.fileName = "";
  	$scope.fileUrl = "";
    $scope.files = firebaseCollection('https://nci-website.firebaseio.com/files');

    $scope.addNewFile = function(){
    	$scope.files.$add({
    		fileName : $scope.fileName,
    		fileUrl : $scope.fileUrl
    	});
    }

    $scope.redirectTo = function(url){
    	window.location.href = url
    }

    $scope.$on('logout', function () {
        $scope.showAdd = true;     
    });
    
  });
