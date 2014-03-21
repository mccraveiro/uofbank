window.onload = function() {
    var mySwiper = new Swiper('.swiper-container:nth-of-type(1)', {
        mode:'horizontal',
        loop: false
    });

    var mySwiper = new Swiper('.swiper-container:nth-of-type(2)', {
        mode:'horizontal',
        loop: false
    });
}

var app = angular.module('uofbank', []);

app.run(function ($rootScope, $location) {

    $rootScope.Pages = (function () {

        var currentPage;
        var _pages = {
            login: false,
            main: false,
            transfer: false,
            transferForm: false,
            checkBalance: false
        };

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
        $rootScope.Pages.go('main');
    };

});

app.controller('mainController', function ($scope, $rootScope) {

    console.log("HEY MAN");

    $scope.transfer = function() {
        $rootScope.Pages.go('transfer');
    };

    $scope.transfer = checkBalance() {
        $rootScope.Pages.go('checkBalance');
    };
});


app.controller('transferController', function ($scope, $rootScope) {

    console.log("HEY MAN");

    $scope.transferForm = function() {
        $rootScope.Pages.go('transferForm');
    };
});

app.controller('transferFormController', function ($scope, $rootScope) {

    console.log("HEY MAN");

    $scope.transfer = function() {
        $rootScope.Pages.go('transfer');
    };
});

app.controller('checkBalanceController', function ($scope, $rootScope) {

    console.log("HEY MAN");

});