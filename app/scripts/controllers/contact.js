'use strict';

angular.module('nciJsStackApp')
	.controller('ContactCtrl', function($scope, $http, NotificationService) {
		$scope.email = {
			name: '',
			from: '',
			message: ''
		};

		$scope.sendEmail = function() {
			NotificationService.info('Sending Email!', 'Sending email in progress');
			$http.post('https://mandrillapp.com/api/1.0/messages/send.json', {
				'key': 'ntAQV7lrBD2pOtGwIUHw_A',
				'message': {
					'from_email': $scope.email.from,
					'to': [{
						'email': 'nci.final@gmail.com',
						'name': $scope.email.name,
						'type': 'to'
					}],
					'autotext': 'true',
					'subject': 'Message from ' + $scope.email.name,
					'html': $scope.email.message
				}
			}).success(function(response) {
				NotificationService.success('Sending Email Done!', 'Email sent!');
				$scope.email = {
					name: '',
					from: '',
					message: ''
				}
			});
		}
	});