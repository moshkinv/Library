LibraryApp.controller('BooksListController', ['$scope', 'DataService', 'EventService', function ($scope, DataService, EventService) {

    $scope.books;

    $scope.editBook = function (book) {
        EventService.raiseEvent('bookEdit', book)
    }

    $scope.addBook = function () {
        EventService.raiseEvent('bookCreate');
    }

    retreiveBooks();

    function retreiveBooks() {
        DataService.getBooks().then(function (result) {
            $scope.books = result.data;
            console.log(result);
        },
        function (error) {
            console.log(error);
        });
    }
    

}]);