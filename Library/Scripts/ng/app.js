var LibraryApp = angular.module('LibraryApp', []);

LibraryApp.constant('LibraryConfig', {
    baseUrl: 'http://localhost:60208/',
    apiPartUrl: 'api/books/'
});

var INTEGER_REGEXP = /^\-?\d+$/;

LibraryApp.directive('integer', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.integer = function (modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be invalid
                    return false;
                }

                if (INTEGER_REGEXP.test(viewValue)) {
                    // it is valid
                    return true;
                }
                // it is invalid
                return false;
            };
        }
    };
});