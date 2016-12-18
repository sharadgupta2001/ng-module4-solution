(function () {

angular.module('data')
    .controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuService'];
function CategoriesController(MenuService) {
    var categoriesCtrl = this;
    
    categoriesCtrl.title = "Below are the categories available";
    categoriesCtrl.categories = [];
    categoriesCtrl.items = [];

    categoriesCtrl.$onInit = function() {
        MenuService.getAllCategories().then(
            function(result) {
                categoriesCtrl.categories = result;
            }
        );
    };

    categoriesCtrl.getItems = function(category) {
        MenuService.getItemsForCategory(category).then(
            function(result) {
                categoriesCtrl.items = result;
            }
        );
    }
}

})();
