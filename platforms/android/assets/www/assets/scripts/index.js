window.onload = function() {
    // FIXME Swiper not working
    var mySwiper = new Swiper('.swiper-container:nth-of-type(1)', {
        mode:'horizontal',
        loop: false
    });
    var mySwiper = new Swiper('.swiper-container:nth-of-type(2)', {
        mode:'horizontal',
        loop: false
    });


}

var app = angular.module('uofbank', [
    'ui.mask',
    'uofbank.db',
    'uofbank.pin',
    'uofbank.header',
    'uofbank.balance'
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
            notification: false
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

    $scope.checkBalance = function() {
        $rootScope.Pages.go('checkBalance');
    };
});


app.controller('transferController', function ($scope, $rootScope) {

    $scope.mainPage = function() {
        $rootScope.Pages.go('main');
    };

    $scope.transferForm = function() {
        $rootScope.Pages.go('transferForm');

        var x = document.getElementById("val").value;
        document.getElementById("value").innerHTML=x;
    };
});

app.controller('transferFormController', function ($scope, $rootScope) {

    $scope.transfer = function() {
        $rootScope.Pages.go('transfer');
    };

    $scope.pay = function() {
        $rootScope.Pages.togglePin(function () {
            $rootScope.Pages.go('main');
        });
    };
});


app.controller('billController', function ($scope, $rootScope) {

    $scope.mainPage = function() {
        $rootScope.Pages.go('main');
    };

    $scope.notification = function() {
        $rootScope.Pages.go('notification');
    };

    $scope.billForm = function() {
        $rootScope.Pages.go('billForm');

        var x = document.getElementById("payee").value;
        document.getElementById("pay").innerHTML=x;

        var y = document.getElementById("accnumber").value;
        document.getElementById("accnum").innerHTML=y;

        var z = document.getElementById("amount").value;
        document.getElementById("amnt").innerHTML=z;
    };

});


app.controller('billFormController', function ($scope, $rootScope) {

    $scope.edit = function() {
        $rootScope.Pages.go('bill');
    };

    $scope.pay = function() {
        $rootScope.Pages.togglePin(function () {
            $rootScope.Pages.go('main');
        });
    };
});


app.controller('notificationController', function ($scope, $rootScope) {

    $scope.confirm = function() {
        $rootScope.Pages.go('bill');
    };


    $scope.back = function() {
        $rootScope.Pages.go('bill');
    };
});
