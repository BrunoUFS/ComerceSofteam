'use strict';

angular.module('inspinia')
  .controller('LojaController', function ($scope) {

    var vm = this;

    $scope.quantidade = 0;
    $scope.total = 0;
    $scope.itemComprados = [];

    $scope.items = [
      {categoria: "Eletrônicos", nome: "Mouse", descricao: "Mouse razer", preco: 50},
      {categoria: "Eletrônicos", nome: "Teclado", descricao: "Teclado da hora!", preco: 70},
      {categoria: "Utensílios", nome: "Vassoura", descricao: "Vassoura voadora", preco: 10},
      {categoria: "Alimentos", nome: "Banana", descricao: "Tulio gosta", preco: 5},
      {categoria: "Medicamentos", nome: "Dipiroca", descricao: "Pra passar a dor de cabeça", preco: 2},
      {categoria: "Utensílios", nome: "Rodo", descricao: "Pra sair pegando geral", preco: 6},
      {categoria: "Medicamentos", nome: "Aspirina", descricao: "As mina pira", preco: 3},
      {categoria: "Alimentos", nome: "Melancia", descricao: "Pra comer", preco: 8}
    ];

    $scope.adicionar = function(item){
      $scope.itemComprados.push(item);
      $scope.total = $scope.total + item.preco;
      $scope.quantidade = $scope.quantidade + 1;
      console.log($scope.total);
    }
    

  });
