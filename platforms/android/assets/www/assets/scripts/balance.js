var app = angular.module('uofbank.balance', []);

app.controller('balanceController', function ($scope, $rootScope, DB) {

    $scope.account = {};

    $rootScope.$on('checkBalance.selectAccount', function (event, accountID) {
        for (var i = 0; i < DB.data.accounts.length; i++) {
            if (DB.data.accounts[i].id == accountID) {
                $scope.account = DB.data.accounts[i];
            }
        }
    });

    $scope.selectedMonth = '0';
    $scope.transactions = {
        '0': [
            {
                date: '13 March',
                name: 'McDonalds',
                amount: 10.00
            },
            {
                date: '8 March',
                name: 'Subway',
                amount: 15.00
            },
            {
                date: '2 March',
                name: 'Walmart',
                amount: 72.38
            }
        ],
        '1': [
            {
                date: '28 February',
                name: 'Burger King',
                amount: 10.00
            },
            {
                date: '7 February',
                name: 'Canada Computers',
                amount: 98.00
            },
            {
                date: '2 February',
                name: 'Metro',
                amount: 157.01
            }
        ],
        '2': [
            {
                date: '20 January',
                name: 'Mr. Sub',
                amount: 10.00
            },
            {
                date: '13 January',
                name: 'EB Games',
                amount: 450.00
            },
            {
                date: '2 January',
                name: 'noFrills',
                amount: 132.51
            }
        ],
        '3': [
            {
                date: '28 December',
                name: 'The Brunswick House',
                amount: 25.00
            },
            {
                date: '5 December',
                name: 'Home Hardware',
                amount: 28.00
            }
        ]
    };

    $scope.mainPage = function() {
        $rootScope.Pages.go('main');
    };
});
