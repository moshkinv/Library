LibraryApp.factory('EventService', ['$document', function ($document) {
    var pub = {},
        eventListeners = {
            'ready': [],
            'bookEdit': [],
            'bookCreate': [],
            'bookDelete': [],
            'bookSave': []
        };

    pub.addEventListener = function (eventName, callback) {
        eventListeners[eventName].push(callback);
    };

    pub.raiseEvent = function (type, argument) {
        for (var i = 0; i < eventListeners[type].length; i++)
            eventListeners[type][i](argument);
    };

    $document.ready(function () {
        pub.raiseEvent('ready');
    })

    return pub;

}]);