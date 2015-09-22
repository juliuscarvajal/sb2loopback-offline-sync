'use strict';

angular.module('loopbackExampleFullStackApp')
  .controller('SwitchboardCtrl', function SwitchboardCtrl($scope, Location, Channel, Todo) {

    Todo.find().then(function (result) {
      console.log(result);
    });

    Channel.find().then(function (result) {
      console.log(result);
      $scope.Channels = result;
    });

    Location.find().then(function (result) {
      console.log(result);
      $scope.Locations = result;
    });
  });
