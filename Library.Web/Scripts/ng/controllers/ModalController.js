LibraryApp.controller('ModalController', ['$scope', 'DataService', 'EventService', function ($scope, DataService, EventService) {
    
    var initialBook,
        modalStates = {
        editing: 0,
        creating: 1
        };

    $scope.state;

    // handler for book editing
    EventService.addEventListener('bookEdit', function (bookToEdit) {
        $scope.modalTitle = "Edit book";
        $scope.book = bookToEdit;

        $scope.state = modalStates.editing;
    });

    // save button handler
    $scope.saveBook = function () {
        if ($scope.state === modalStates.editing)
            DataService.updateBook($scope.book);
        else
            DataService.createBook($scope.book);

        EventService.raiseEvent('bookSave', $scope.book);
    };

    // handler for book creating
    EventService.addEventListener('bookCreate', function () {
        $scope.modalTitle = "Add new book";
        $scope.book = {};

        $scope.state = modalStates.creating;
    });
}]);