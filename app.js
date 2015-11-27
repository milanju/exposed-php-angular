var app = angular.module('barcodesExposed', []);
app.controller('ladderController', function($scope, $http) {
  // url to server script for ladder request
  $scope.loading = false;
  var ladderUrl = 'eugm.php';

  // url to server script for alias request
  var aliasUrl = 'alias.php';

  // displays alias if necessary
  $scope.getAlias = function(id) {
    var alias = $scope.alias;
    if (alias) {
      for (var i = 0; i < alias.length; i++) {
        if (id === alias[i].id) {
          return 'aka ' + alias[i].alias;
        }
      }
    }
    return '';
  }

  // requests ladder from php script (which requests ladder from Battle.net API)
  $scope.loadLadder = function() {
    $scope.loading = true;
    $http.post(ladderUrl).then(function(response) {
      $scope.ladder = response.data.ladderMembers;
      $scope.loading = false;
    });
    $http.post(aliasUrl).then(function(response) {
      $scope.alias = response.data.exposedBarcodes;
    });
  }

  // request fresh ladder
  $scope.refresh = function() {
    $scope.loadLadder();
  }

  // loading animation
  $scope.showLoader = function() {
    if ($scope.loading) {
      return 'loading';
    } else {
      return '';
    }
  }

  // initial load
  $scope.loadLadder();
});
