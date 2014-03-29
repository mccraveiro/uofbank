angular.module('uofbank.qrcodeForm', [])
    .controller('qrcodeFormController', function ($scope, $rootScope, DB) {

    resetController();    

    $scope.back = function() {
        $rootScope.Pages.go('bill');
    };
        
    $scope.qrcodeForm = function() {
        $rootScope.Pages.go('qrcodeForm');
    };
        
    $scope.edit = function() {
        $rootScope.Pages.go('qrcode');
    };    
        
    $scope.pay = function() {
        $rootScope.Pages.togglePin(function () {

            if (!transferMoney()) {
                $rootScope.Pages.go('bill');
                $rootScope.$broadcast('message', 'Insufficient balance');
                return;
            }

            resetController();
            $rootScope.Pages.go('bill');
            $rootScope.$broadcast('message', 'Bill paid successfully!');
        });
    };

    $rootScope.$on('qrcode-confirmation', function(event, data) {
        $scope.account = DB.data.accounts[data.accountID];
        $scope.payee = 'Rogers';
        $scope.accountNumber = '4315 8746 1027 9371';
        $scope.amount = 127.81;
    });

    function resetController () {
        $scope.account = DB.data.accounts[0];
        $scope.payee = '';
        $scope.accountNumber = '';
        $scope.amount = 0;
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
