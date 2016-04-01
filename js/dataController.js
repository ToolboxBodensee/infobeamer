/* global app */
angular.module('infoDisplay').controller('DataController', function (
      $log
    , $http
    , $rootScope
    , $scope
)
{
	$scope.entries = [];

	$scope.loadData = function()
	{
		var p = new Promise(function(resolve, reject)
		{
			$http.get('data.json').then(function(response) {
				$scope.entries = response.data;
				resolve();
			});
		});
		return p;
	};

	$scope.loadData().then(function()
	{
		initHeaders();
	});
});

