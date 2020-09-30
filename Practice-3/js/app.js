(function(){

  let app = angular.module("bookStoreApp" , ['ui-router'])

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
  }])


})()