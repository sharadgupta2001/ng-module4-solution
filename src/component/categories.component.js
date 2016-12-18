(function () {

angular.module('data')
    .component('categories', {
        templateUrl: 'src/template/component-template/categories.component.html',
        bindings: {
            categories : '<'
        }
    });

})();
