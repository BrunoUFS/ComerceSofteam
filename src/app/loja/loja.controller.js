'use strict';

angular.module('inspinia')
  .controller('LojaController', function ($scope, $http) {

    var vm = this;

    $scope.quantidade = 0;
    $scope.total = 0;
    $scope.itemComprados = [];
    $scope.items = [];

    $scope.adicionar = function(item){
      $scope.itemComprados.push(item);
      $scope.total = $scope.total + item.preco;
      $scope.quantidade = $scope.quantidade + 1;
    }

    $http({
      method: 'GET',
      url: 'http://localhost:3004/products'
    }).then(function successCallback(response) {
        $scope.items = response.data;
        console.log($scope.items);
      }, function errorCallback(response) {
        console.log("Erro");
      });
    
  });


/* 
  {categoria: "Eletrônicos", nome: "Mouse", descricao: "Mouse razer", preco: 50, id: 1},
  {categoria: "Eletrônicos", nome: "Teclado", descricao: "Teclado da hora!", preco: 70, id: 2},
  {categoria: "Utensílios", nome: "Vassoura", descricao: "Vassoura voadora", preco: 10, id: 3},
  {categoria: "Alimentos", nome: "Banana", descricao: "Tulio gosta", preco: 5, id: 4},
  {categoria: "Medicamentos", nome: "Dipiroca", descricao: "Pra passar a dor de cabeça", preco: 2, id: 5},
  {categoria: "Utensílios", nome: "Rodo", descricao: "Pra sair pegando geral", preco: 6, id: 6},
  {categoria: "Medicamentos", nome: "Aspirina", descricao: "As mina pira", preco: 3, id: 7},
  {categoria: "Alimentos", nome: "Melancia", descricao: "Pra comer", preco: 8, id: 8} */
