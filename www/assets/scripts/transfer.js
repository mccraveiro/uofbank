angular.module('uofbank.transfer', [])
    .controller('transferController', function ($scope, $rootScope, DB) {

    resetController();

    $scope.mainPage = function () {
        resetController();
        $rootScope.Pages.go('main');
    };

    $scope.transferForm = function () {        
        $rootScope.$broadcast('transfer-confirmation', {
            accountFromID: $scope.accountFrom.id,
            accountToID: $scope.accountTo.id,
            timer: $scope.timer;
        });
        $rootScope.Pages.go('transferForm');
    };

    $scope.nextAccountFrom = function () {
        if (!$scope.isAccountFromSelected) {
            $scope.isAccountFromSelected = true;
            return;
        }
        var idFrom = $scope.accountFrom.id + 1;
        if (idFrom > 1) {
            idFrom = 0;
        }
        $scope.accountFrom = DB.data.accounts[id];
    };
        
    $scope.nextAccountTo = function () {
        if (!$scope.isAccountToSelected) {
            $scope.isAccountToSelected = true;
            return;
        }
        var idTo = $scope.accountTo.id + 1;
        if (idTo > 1) {
            idTo = 0;
        }
        $scope.accountTo = DB.data.accounts[id];
    };

    function resetController() {
        $scope.isAccountFromSelected = false;
        $scope.isAccountToSelected = false;
        $scope.accountFrom = DB.data.accounts[0];
        $scope.accountTo = DB.data.accounts[1];
        $scope.timer = 0;
    }
});
