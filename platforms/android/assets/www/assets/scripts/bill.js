angular.module('uofbank.bill', [])
    .controller('billController', function ($scope, $rootScope, DB) {

    resetController();

    $scope.mainPage = function () {
        resetController();
        $rootScope.Pages.go('main');
    };

    $scope.notification = function () {
        $rootScope.Pages.go('notification');
    };

    $scope.qrcode = function () {
        $rootScope.Pages.go('qrcode');
    };

    $scope.billForm = function () {
        $rootScope.Pages.go('billForm');
    };

    $scope.nextAccount = function () {

        if (!$scope.isAccountSelected) {
            $scope.isAccountSelected = true;
            return;
        }

        var id = $scope.account.id + 1;

        if (id >= DB.data.accounts.length) {
            id = 0;
        }

        $scope.account = DB.data.accounts[id];
    };

    function resetController() {
        $scope.isAccountSelected = false;
        $scope.account = DB.data.accounts[0];
    }
});
