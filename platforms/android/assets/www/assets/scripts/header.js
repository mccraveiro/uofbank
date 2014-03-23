var app = angular.module('uofbank.header', []);

app.controller('headerController', function ($scope, $rootScope) {

    $scope.titleClick = function () {

        if ($rootScope.Pages.current() == 'login') {
            return;
        }

        $rootScope.Pages.go('main');
    };

    $scope.signout = function () {
        $rootScope.Pages.go('login');
    };
});
