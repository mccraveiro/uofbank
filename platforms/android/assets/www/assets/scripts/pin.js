var app = angular.module('uofbank.pin', []);

app.controller('pinController', function ($scope, $rootScope) {

    var fxTimeout = 400;

    $scope.pin = '';
    $scope.shake = false;
    $scope.keyboard = {
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
        '9': false,
        '0': false,
        'cancel': false
    };

    $scope.enterNumber = function (number) {

        if ($scope.pin.length == 4) {
            return;
        }

        $scope.pin += number;

        $scope.keyboard[number] = true;
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.keyboard[number] = false;
            });
        }, fxTimeout);

        if ($scope.pin.length == 4) {

            if ($scope.pin === '1234') {
                $rootScope.Pages.pinSuccess();
                $scope.pin = '';
            } else {
                $scope.pin = '';
                $scope.shake = true;
                setTimeout(function () {
                    $scope.$apply(function () {
                        $scope.shake = false;
                    });
                }, fxTimeout);
            }
        }
    };

    $scope.back = function () {
        $rootScope.Pages.togglePin();
    };

    $scope.cancel = function () {

        if ($scope.pin.length === 0) {
            $rootScope.Pages.togglePin();
            return;
        }

        $scope.pin = $scope.pin.substr(0, $scope.pin.length-1);

        $scope.keyboard.cancel = true;
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.keyboard.cancel = false;
            });
        }, fxTimeout);
    };
});
