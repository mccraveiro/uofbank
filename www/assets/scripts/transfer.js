angular.module('uofbank.transfer', [])
    .controller('transferController', function ($scope, $rootScope, DB) {

    resetController();

    $scope.mainPage = function () {
        resetController();
        $rootScope.Pages.go('main');
    };

    $scope.transferForm = function () {
        if ($scope.accountFrom.id == $scope.accountTo.id) {
                $rootScope.Pages.go('transfer');
                $rootScope.$broadcast('message', 'You should choose different accounts');
                return;
            }
        
        $rootScope.$broadcast('transfer-confirmation', {
            accountIDFrom: $scope.accountFrom.id,
            accountIDTo: $scope.accountTo.id,
            amount: $scope.amount
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
        $scope.accountFrom = DB.data.accounts[idFrom];
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
        $scope.accountTo = DB.data.accounts[idTo];
    };

    function resetController() {
        $scope.isAccountFromSelected = false;
        $scope.isAccountToSelected = false;
        $scope.accountFrom = DB.data.accounts[0];
        $scope.accountTo = DB.data.accounts[1];
        $scope.payee = 1;
        $scope.accountNumber = '';
        $scope.amount = 0;
    }
});
