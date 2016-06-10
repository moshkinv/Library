describe('Controller: BooksListController', function () {
    beforeEach(module('LibraryApp'));
    var ListController, scope;
    beforeEach(inject(function ($controller) {
        scope = {};
        ListController = $controller('BooksListController', {
            $scope: scope
        });
    }));

    it('should have scope defined', function () {
        expect(scope).toBeDefined();
    });

    it('should get books data success',
      inject(function(DataService, $httpBackend, $location) {

          $httpBackend.expect('GET', $location.$$path + '/' + 'api/books/')
            .respond(200, "[{ success : 'true', id : 123 }]");

          DataService.getBooks()
            .then(function(data) {
                expect(data.success).toBeTruthy();
            });

          $httpBackend.flush();
      }));
});