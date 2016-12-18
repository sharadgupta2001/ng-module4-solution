(function () {

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/template/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/template/categories.html',
      controller: 'CategoriesController as categoriesCtrl'
    })

    .state('categories.getItems', {
      // url: '/items',
      templateUrl: 'src/template/items.html',
      controller: 'ItemsController as itemsCtrl',
      params: {
        categoryId: null
      }
    });
}


})();
