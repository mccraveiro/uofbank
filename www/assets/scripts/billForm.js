angular.module('uofbank.billForm', [])
    .controller('billFormController', function ($scope, $rootScope, DB) {

    resetController();

    $scope.edit = function() {
        $rootScope.Pages.go('bill');
    };

    $scope.pay = function() {
        $rootScope.Pages.togglePin(function () {

            if (!transferMoney()) {
                $rootScope.Pages.go('bill');
                $rootScope.$broadcast('message', 'Insufficient balance');
                return;
            }

            resetController();
            $rootScope.Pages.go('main');
            $rootScope.$broadcast('message', 'Bill paid successfully!');
        });
    };

    $rootScope.$on('bill-confirmation', function(event, data) {
        $scope.account = DB.data.accounts[data.accountID];
        $scope.payee = selectPayee(data.payee);
        $scope.accountNumber = data.accountNumber;
        $scope.amount = data.amount;
    });

    function resetController () {
        $scope.account = DB.data.accounts[0];
        $scope.payee = '';
        $scope.accountNumber = '';
        $scope.amount = 0;
    }

    function selectPayee(id) {
        var payees = [
            'Bell',
            'Canada Revenue Agency',
            'City of Toronto',
            'Fido',
            'Rogers',
            'Toronto Hydro',
            'University of Toronto',
            'Walmart Canada',
            'Wind'
        ];

        return payees[id - 1];
    }

    function transferMoney () {

        var balance = DB.data.accounts[$scope.account.id].amount;

        if (balance < $scope.amount) {
            return false;
        }

        balance -= $scope.amount;
        balance = Math.floor(balance * 100) / 100;

        DB.data.accounts[$scope.account.id].amount = balance;

        DB.data.accounts[$scope.account.id].transactions['2014']['4'].push({
            date: 'Today',
            name: $scope.payee,
            amount: $scope.amount
        });

        return true;
    }
});
