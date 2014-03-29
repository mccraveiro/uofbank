angular.module('uofbank.transferForm', [])
    .controller('transferFormController', function ($scope, $rootScope, DB) {

    resetController();

    $scope.edit = function() {
        $rootScope.Pages.go('transfer');
    };

    $scope.pay = function() {
        $rootScope.Pages.togglePin(function () {

            if (!transferMoney()) {
                $rootScope.Pages.go('transfer');
                $rootScope.$broadcast('message', 'Insufficient balance');
                return;
            }

            resetController();
            $rootScope.Pages.go('main');
            $rootScope.$broadcast('message', 'Transfer made successfully!');
        });
    };

    $rootScope.$on('transfer-confirmation', function(event, data) {
        $scope.accountFrom = DB.data.accounts[data.accountIDFrom];
        $scope.accountTo = DB.data.accounts[data.accountIDTo];
        $scope.amount = data.amount;
    });

    function resetController () {
        $scope.accountFrom = DB.data.accounts[0];
        $scope.accountTo = DB.data.accounts[1];
        $scope.amount = 0;
    }

    function transferMoney () {

        var balance = DB.data.accounts[$scope.accountFrom.id].amount;
        var balanceTo = DB.data.accounts[$scope.accountTo.id].amount;

        if (balance < $scope.amount) {
            return false;
        }

        balance -= $scope.amount;
        balance = Math.floor(balance * 100) / 100;
        balanceTo += Math.floor($scope.amount * 100) / 100;        

        DB.data.accounts[$scope.accountFrom.id].amount = balance;
        DB.data.accounts[$scope.accountTo.id].amount = balanceTo;

        DB.data.accounts[$scope.accountFrom.id].transactions['2014']['4'].push({
            date: 'Today',
            name: $scope.accountTo.name,
            amount: $scope.amount
        });

        return true;
    }
});
