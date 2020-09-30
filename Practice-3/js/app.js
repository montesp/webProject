(function(){

  let app = angular.module("bookStoreApp" , [])

  app.controller('ProductsController',['$http' , function($http){
    let products = this

    products.books = [] 

    $http({
      method:'GET',
      url:'../books.json'
    }).then(function success(response){

      console.log(response)
      products.books = response

    }, function error(p) {
      console.log(response)
    
    })
  }])

})()