'use strict';

describe('Controller: StoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('nciJsStackApp'));

  var StoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoriesCtrl = $controller('StoriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
