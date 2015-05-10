(function () {
    'use strict';

    angular
        .module('app')
        .controller('moviesController', moviesController);

    moviesController.$inject = ['$location']; 

    function moviesController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'moviesController';

        activate();

        function activate() { }
    }
})();
