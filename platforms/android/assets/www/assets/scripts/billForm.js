angular.module('uofbank.billForm', [])
    .controller('billFormController', function ($scope, $rootScope, DB) {

    resetController();

    $scope.edit = function() {
        $rootScope.Pages.go('bill');
    };

    $scope.pay = function() {
        $rootScope.Pages.togglePin(function () {
            resetController();
            $rootScope.Pages.go('main');
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
});
