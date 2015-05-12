(function(){
app.controller('LoginController', function($scope, $http) {
    $scope.login = function(user, pw) {
        var url = $scope.config.API_URL + '/login/' + user + '/' + pw;
        $http.get( url ).
        success(function(data) {
           $scope.selectTab("list");
           $.getJSON( url, function(result) {
            API_HELPER.saveToken(result);
            API_HELPER.loadCodes($scope.populateCodes, $scope.getFilters());
        })
       }).
        error(function (data, status, headers, config) {
            console.log('login error');
        });
    }
});
})();