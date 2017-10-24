app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Supercars of 2017';
    $scope.promo = '';
    $scope.products = 
[
{
    name: 'Lamborghini Huracan', 
    color: 'Blaze Red',
    price: '199800',
    cover: 'img/huracan.jpg'
},
{
    name: 'Bugatti Chiron', 
    color: 'Nero',
    price: '2500000',
    cover: 'img/chiron.jpg'
},
{
    name: 'Ferrari Enzo', 
    color: 'Crimson',
    price: '1999999',
    cover: 'img/enzo.jpg'
},
{
    name: 'Ferrari F80 (Concept)', 
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg'
}]

}]);