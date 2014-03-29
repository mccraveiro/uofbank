var app = angular.module('uofbank', [
    'ui.mask',
    'uofbank.db',
    'uofbank.pin',
    'uofbank.header',
    'uofbank.balance',
    'uofbank.bill',
    'uofbank.billForm',
    'uofbank.transfer',
    'uofbank.transferForm'
]);

app.run(function ($rootScope, $location) {

    $rootScope.Pages = (function () {

        var currentPage;
        var _pages = {
            login: false,
            main: false,
            transfer: false,
            transferForm: false,
            checkBalance: false,
            bill: false,
            billForm: false,
            notification: false,
            qrcode: false,
            qrcodeForm: false
        };

        var pinVisible = false;
        var onPinSuccess;

        return {

            current: function () {
                return currentPage;
            },

            go: function (page) {

                // Page does not exist
                if (typeof _pages[page] == 'undefined') {
                    return;
                }

                // Toggle current page
                if (currentPage) {
                    _pages[currentPage] = false;
                }

                // Set new page
                _pages[page] = true;
                currentPage = page;

                console.log('Current page: ' + page);
            },

            pinSuccess: function () {

                pinVisible = false;

                if (onPinSuccess) {
                    onPinSuccess();
                    onPinSuccess = undefined;
                }
            },

            togglePin: function (success) {

                if (pinVisible) {
                    pinVisible = false;
                } else {
                    pinVisible = true;

                    if (success) {
                        onPinSuccess = success;
                    }
                }
            },

            isPinVisible: function () {
                return pinVisible;
            }
        };
    })();


    // Show Login
    $rootScope.Pages.go('login');
});

app.controller('loginController', function ($scope, $rootScope, DB) {

    DB.data.x = 4;

    $scope.account = {
        number: '4505987698769876',
        save: true
    };

    $scope.signIn = function() {

        $rootScope.Pages.togglePin(function () {

            if (!$scope.account.save) {
                $scope.account.number = '';
            }

            $rootScope.Pages.go('main');
        });
    };

});

app.controller('mainController', function ($scope, $rootScope, DB) {

    console.log(DB);

    $scope.accounts = DB.data.accounts;

    $scope.$watch('accounts', function (newVal, oldVal) {
        $scope.accounts = newVal;
    });

    $scope.bill = function() {
        $rootScope.Pages.go('bill');
    };

    $scope.transfer = function() {
        $rootScope.Pages.go('transfer');
    };

    $scope.checkBalance = function(accountID) {

        $rootScope.$broadcast('checkBalance.selectAccount', accountID);

        $rootScope.Pages.go('checkBalance');
    };
});

app.controller('notificationController', function ($scope, $rootScope) {

    $scope.confirmNotification = function() {
        $rootScope.Pages.go('bill');
    };


    $scope.back = function() {
        $rootScope.Pages.go('bill');
    };
});


app.controller('qrcodeController', function ($scope, $rootScope) {

    $scope.qrcodeForm = function() {
        $rootScope.Pages.go('qrcodeForm');
    };


    $scope.back = function() {
        $rootScope.Pages.go('bill');
    };
});

app.controller('qrcodeFormController', function ($scope, $rootScope) {

    $scope.back = function() {
        $rootScope.Pages.go('bill');
    };

    $scope.confirm = function() {
        $rootScope.Pages.togglePin(function () {
            $rootScope.Pages.go('main');
        });
    };
});

app.controller('messageController', function ($scope, $rootScope) {

    $scope.message = '';

    $scope.clearMessage = function () {
        $scope.message = '';
    };

    $rootScope.$on('message', function (event, text) {
        $scope.message = text;

        setTimeout(function () {
            $scope.$apply(function () {
                $scope.message = '';
            });
        }, 3500);
    });
});
