(function () {

angular.module('data')
    .controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'MenuService'];
function ItemsController($stateParams, MenuService) {
    var itemsCtrl = this;
    itemsCtrl.items = [];

    itemsCtrl.$onInit = function() {
        MenuService.getItemsForCategory($stateParams.categoryId).then(
            function(result) {
                console.log('Result', result);
                itemsCtrl.items = result;
            }
        );
    };
}

})();
