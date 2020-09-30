(function(){

  let app = angular.module("bookStoreApp" , [])

  app.controller('ProductsController',['$http' , function($http){
    let products = this

    products.books = [] 

    $http({
      method: 'GET',
			url: './books.json'
    }).then(function success(response) {

      console.log(response.data)
      products.books = response.data

    }, function error(p) {

      console.log(response.error)
    
      

    })

    config(function($stateProvider) {
      var datos = {
        name: 'dato',
        url: './templates/bookDetail',
        template: '<h2>{{book.title}}</h2>'+
                  '<h4>{{book.editorial}}</h4>'+
                  '<p>{{book.descripccion}}}</p>'
      }
    
    
    
      $stateProvider.state(datos);
    });
  }])


})()