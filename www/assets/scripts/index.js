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

var app = angular.module('uofbank', ['ngRoute']);

// configure our routes
app.config(function($routeProvider, $locationProvider) {

    $routeProvider
		// route for the login page
		.when('/', {
			templateUrl : 'assets/pages/login.html',
			controller  : 'loginController'
		})
		// route for the main page
		.when('/main', {
			templateUrl : 'assets/pages/main.html',
			controller  : 'mainController'
		})
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.hashPrefix('!');
});

app.controller('loginController', function ($scope, $location) {

    $scope.signIn = function() {
        $location.path('/main');
    };

});

app.controller('mainController', function($scope) {

});
