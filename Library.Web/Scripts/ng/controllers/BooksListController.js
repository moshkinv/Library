LibraryApp.controller('BooksListController', ['$scope', 'DataService', 'EventService', function ($scope, DataService, EventService) {

    // document ready event
    EventService.addEventListener('ready', function () {
        retreiveBooks();
    });

    $scope.books;

    // edit book handler
    $scope.editBook = function (book) {
        EventService.raiseEvent('bookEdit', book)
    }

    // add book handler
    $scope.addBook = function () {
        EventService.raiseEvent('bookCreate');
    }

    // soft deleting
    $scope.deleteBook = function (book) {
        book.IsVisible = false;
        DataService.updateBook(book);

        $scope.books.splice($scope.books.indexOf(book), 1);
    }

    // saving event handler
    EventService.addEventListener('bookSave', function (book) {
        // is book new
        if (book.Id == undefined)
            $scope.books.push(book);
    });
    
    // processing list of books promise
    var retreiveBooks = function () {
        DataService.getBooks().then(function (result) {
            $scope.books = result.data;
        },
        function (error) {
            console.log(error);
        });
    }
    

}]);