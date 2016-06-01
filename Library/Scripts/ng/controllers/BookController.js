LibraryApp.controller('BookController', ['$scope', 'DataService', 'EventService', function ($scope, DataService, EventService) {
    
    var modalStates = {
        editing: 0,
        creating: 1
    };

    $scope.initialBook;
    $scope.state;

    // handler for book editing
    EventService.addEventListener('bookEdit', function (bookToEdit) {
        $scope.modalTitle = "Edit book";
        $scope.initialBook = bookToEdit;
        $scope.book = $scope.initialBook;

        $scope.state = modalStates.editing;
    });

    $scope.saveBook = function () {
        if ($scope.state === modalStates.editing)
            DataService.updateBook($scope.book);
        else
            DataService.createBook($scope.book);
    };

    $scope.dismissBookChanges = function () {
        $scope.book = $scope.initialBook;
    };

    // handler for book creating
    EventService.addEventListener('bookCreate', function () {
        $scope.modalTitle = "Add new book";
        $scope.initialBook = {};
        $scope.book = {};

        $scope.state = modalStates.creating;
    });



}]);