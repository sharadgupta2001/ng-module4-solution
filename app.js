

(function () {
'use strict';

angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'founditems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'controller',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.searchText = "";
    controller.items = [];
    controller.clicked = false;

    controller.searchMenu = function() {
        controller.clicked = true;
        if (controller.searchText.trim().length > 0) {
          MenuSearchService.getMatchedMenuItems(controller.searchText).then(
            function(payload) {
              controller.items = payload;
            }
          );
        }
    }

    controller.onRemove = function(index) {
      controller.items.splice(index, 1);
    }
};

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  service.getMatchedMenuItems = function(searchTerm) {
    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(
      function (result) {
        var data = result.data.menu_items;
        var foundItems = [];
        searchTerm = searchTerm.toLowerCase();
        for(var i=0; i < data.length; i++) {
          if (data[i].description == undefined) {
              continue;
          }
          if (data[i].description.toLowerCase().indexOf(searchTerm) > -1) {
              foundItems.push(data[i]);
          }
        }
        return foundItems;
    });
  }
}

})();
