LibraryApp.factory('DataService', ['$http', '$location', function ($http, $location) {

    var pub = {},
        url = $location.$$path + '/' + 'api/books/';

    pub.getBooks = function () {
        return $http.get(url);
    };

    pub.getBookById = function (id) {
        return $http.get(url + '/' + id);
    };

    pub.updateBook = function (book) {
        return $http.put(url, book)
    };

    pub.createBook = function (book) {
        return $http.post(url, book);
    };

    pub.deleteBook = function (book) {
        return $http.delete(url, book.Id);
    };

    return pub;
}]);