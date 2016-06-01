LibraryApp.factory('DataService', ['$http', 'LibraryConfig', function ($http, LibraryConfig) {

    var pub = {},
        url = LibraryConfig.baseUrl + LibraryConfig.apiPartUrl;

    pub.getBooks = function () {
        return $http.get(url);
    }

    pub.getBookById = function (id) {
        return $http.get(url + '/' + id);
    }

    pub.updateBook = function (book) {
        return $http.put(url, book)
    }

    pub.createBook = function (book) {
        return $http.post(url, book);
    }

    return pub;

}]);