(function () {

angular.module('data')
    .component('items', {
        templateUrl: 'src/template/component-template/items.component.html',
        bindings: {
            items : '<'
        }
    });

})();
