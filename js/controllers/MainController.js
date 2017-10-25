app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Supercars';
    $scope.promo = 'A supercar is a luxury, high-performance sports car or grand tourer. The term is used in marketing by automakers for unusual and expensive vehicles, and has been used to refer to at least four different sorts of cars: Limited-production specials from an "elite" automaker.';
    $scope.products = 
[
{
    name: 'Lamborghini Huracan', 
    color: 'Blaze Red',
    price: '199800',
    cover: 'img/huracan.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Bugatti Chiron', 
    color: 'Nero',
    price: '2500000',
    cover: 'img/chiron.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Ferrari Enzo', 
    color: 'Crimson',
    price: '1999999',
    cover: 'img/enzo.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Ferrari F80 (Concept)', 
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Acura NSX', 
    color: 'Nero',
    price: '2500000',
    cover: 'img/chiron.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Pagani Zonda', 
    color: 'Crimson',
    price: '1999999',
    cover: 'img/enzo.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Koenigsegg One:1', 
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Aston Martin One-77', 
    color: 'Nero',
    price: '2500000',
    cover: 'img/chiron.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Venom GT', 
    color: 'Crimson',
    price: '1200000',
    cover: 'img/enzo.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'McLaren P1', 
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Zenvo ST1', 
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Lamborghini Reventon', 
    color: 'Crimson',
    price: '1200000',
    cover: 'img/enzo.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Ferrari LaFerrari', 
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'W Motors Lykan Hypersport', 
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Lamborghini Veneno', 
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0
},
{
    name: 'Mercedes-Mayback 6 Cabriolet', 
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0
}];
    // add likes
    $scope.plusOne = function(index) { 
    $scope.products[index].likes += 1; 
  };
    // subtract likes
    $scope.minusOne = function(index) { 
    $scope.products[index].dislikes += 1; 
  };
}]);