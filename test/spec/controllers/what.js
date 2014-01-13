'use strict';

describe('Controller: WhatCtrl', function () {

  // load the controller's module
  beforeEach(module('nciJsStackApp'));

  var WhatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhatCtrl = $controller('WhatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
