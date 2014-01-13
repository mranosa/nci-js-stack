'use strict';

describe('Controller: BasesCtrl', function () {

  // load the controller's module
  beforeEach(module('nciJsStackApp'));

  var BasesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasesCtrl = $controller('BasesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
