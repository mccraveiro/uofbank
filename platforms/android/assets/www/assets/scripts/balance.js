var app = angular.module('uofbank.balance', []);

app.controller('balanceController', function ($scope, $rootScope, DB) {

    $scope.account = {};
    $scope.selectedMonth = '2014-4';
    $scope.year = '2014';
    $scope.month = '4';

    $rootScope.$on('checkBalance.selectAccount', function (event, accountID) {

        for (var i = 0; i < DB.data.accounts.length; i++) {
            if (DB.data.accounts[i].id == accountID) {
                $scope.account = DB.data.accounts[i];
            }
        }

        $scope.selectedMonth = '2014-4';
        $scope.year = '2014';
        $scope.month = '4';
    });

    $scope.$watch('selectedMonth', function (newVal, oldVal) {

        var data = newVal.split('-');

        $scope.year = data[0];
        $scope.month = data[1];
    });

    $scope.mainPage = function() {
        $rootScope.Pages.go('main');
    };
});
