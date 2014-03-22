var app = angular.module('uofbank.header', []);

app.controller('headerController', function ($scope, $rootScope, $location) {

    $scope.signout = function () {
        $rootScope.Pages.go('login');
    };
});
