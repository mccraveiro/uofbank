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
    'uofbank.pin',
    'uofbank.header'
]);

app.run(function ($rootScope, $location) {

    $rootScope.Pages = (function () {

        var currentPage;
        var nextPage;
        var _pages = {
            login: false,
            main: false,
            transfer: false,
            transferForm: false,
            checkBalance: false,
            bill: false,
            billForm: false
        };
        var pinVisible = false;

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

            nextPage: function () {

                pinVisible = false;

                if (nextPage) {
                    $rootScope.Pages.go(nextPage);
                    nextPage = undefined;
                }
            },

            togglePin: function (next) {

                if (pinVisible) {
                    pinVisible = false;
                } else {
                    pinVisible = true;

                    if (next) {
                        nextPage = next;
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

app.controller('loginController', function ($scope, $rootScope) {

    console.log($rootScope.Pages.current());
    console.log("HEY LOGIN");

    $scope.signIn = function() {
        $rootScope.Pages.togglePin('main');
    };

});

app.controller('mainController', function ($scope, $rootScope) {

    console.log("HEY MAN");

    $scope.bill = function() {
        $rootScope.Pages.go('bill');
    };

    $scope.transfer = function() {
        $rootScope.Pages.go('transfer');
    };

    $scope.checkBalance = function() {
        $rootScope.Pages.go('checkBalance');

        $(function() {    
            $('#monthSelector').change(function(){
                $('.month').hide();
                $('#' + $(this).val()).show();
            });
        });
    };

});


app.controller('transferController', function ($scope, $rootScope) {

    console.log("HEY MAN");

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

    console.log("HEY MAN");

    $scope.transfer = function() {
        $rootScope.Pages.go('transfer');
    };

    $scope.pay = function() {
        $rootScope.Pages.togglePin('main');
    };
});


app.controller('billController', function ($scope, $rootScope) {

    console.log("HEY MAN");

    $scope.mainPage = function() {
        $rootScope.Pages.go('main');
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

    console.log("HEY MAN");

    $scope.edit = function() {
        $rootScope.Pages.go('bill');
    };

    $scope.pay = function() {
        $rootScope.Pages.togglePin('main');
    };
});

app.controller('checkBalanceController', function ($scope, $rootScope) {

    console.log("HEY MAN");

    $scope.mainPage = function() {
        $rootScope.Pages.go('main');
    };
});



