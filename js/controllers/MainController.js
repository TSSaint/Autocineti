app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Supercars';
    $scope.promo = 'A supercar is a luxury, high-performance sports car or grand tourer.';
    $scope.products =
[
{
    name: 'Lamborghini Huracan',
    color: 'Blaze Red',
    price: '199800',
    cover: 'img/huracan.jpg',
    link: 'https://google.com',
    likes: 0,
    dislikes: 0,
    description: "The Lamborghini Huracan (Spanish for 'hurricane') is a sports car built by Lamborghini, replacing Lamborghini's sales leader and most produced car, the Gallardo. The Huracan made its auto show debut at the March 2014 Geneva Auto Show, and was released in the second quarter of 2014. The name of the Huracan LP 610-4 comes from the fact that this car has 610 metric horsepower and 4 wheel drive. The Huracan was named 'The Supercar of the Year 2014' by car magazine Top Gear."
},
{
    name: 'Bugatti Chiron',
    color: 'Nero',
    price: '2500000',
    cover: 'img/chiron.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Bugatti Chiron is a mid-engined two-seated sports car developed and manufactured in Molsheim, France, by Bugatti Automobiles S.A.S. as the successor to the Bugatti Veyron. The Chiron was first shown at the Geneva Motor Show on March 1, 2016. The car was based on the Bugatti Vision Gran Turismo concept car."
},
{
    name: 'Ferrari Enzo',
    color: 'Crimson',
    price: '1999999',
    cover: 'img/enzo.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Enzo Ferrari is a 12 cylinder mid-engine berlinetta sports car named after the company's founder, Enzo Ferrari. It was built in 2002 using Formula One technology, such as a carbon-fibre body, F1-style electrohydraulic shift transmission, and carbon fibre-reinforced silicon carbide ceramic composite disc brakes. Also used are technologies not allowed in F1 such as active aerodynamics and traction control. After a downforce of 7600 N (1700 lbf) is reached at 300 km/h (186 mph) the rear wing is actuated by computer to maintain that downforce."
},
{
    name: 'Ferrari F80 (Concept)',
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0,
    description: "Inspired by Ferrari Enzo, Ferrari F50, Ferrari FXX and Ferrari LaFerrari, as well as Futuristic Formula 1 and fighter jet from the US Army Boeing F/A-XX project, the Ferrari F80 Concept is created by the young independent Italian designer Adriano Raeli ( design student at the Art Center College of Design in Pasadena, California ). He imagines a form of supercar of 800 kg, the precursor of the future Ferrari."
},
{
    name: 'Acura NSX',
    color: 'Dark Blue',
    price: '2500000',
    cover: 'img/nsx.jpg',
    likes: 0,
    dislikes: 0,
    description: "The new NSX is a hybrid sports car powered by 3.5 L twin-turbo V6 engine and three electric motors, two of which form part of the 'SH-AWD' all wheel drive drivetrain, altogether capable of close to 600 hp. The transmission is a 9-speed dual-clutch semi-automatic. Its body utilizes a space frame design, which is made from aluminum, ultra-high strength steel, and other rigid and lightweight materials, some of which are the world's first applications."
},
{
    name: 'Pagani Zonda',
    color: 'Black',
    price: '1999999',
    cover: 'img/zonda.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Pagani Zonda is a mid-engined sports car built by the Italian manufacturer Pagani. It debuted in 1999, and production ended in 2017 with the 760 series cars and other commemorative special editions being produced till the same year. By June 2009, 135 Zondas had been built, including development mules. Both 2-door coupé and roadster variants have been produced along with a third new variant being the barchetta. Construction is mainly of carbon fiber."
},
{
    name: 'Koenigsegg One:1',
    color: 'White',
    price: '9999999',
    cover: 'img/one1.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Koenigsegg One:1 was presented at the March 2014 Geneva Motor Show. The name One:1 comes from the power (1360 PS) to weight (1360 kg) ratio giving the car 1 bhp per 1 kg weight. The 1341 bhp power output is the equivalent of one megawatt, which Koenigsegg claims makes the One:1 the ‘world's first megacar’. The One:1 can reach a theoretical top speed of 280 mph (451 km/h)."
},
{
    name: 'Aston Martin One-77',
    color: 'Steel',
    price: '2500000',
    cover: 'img/one77.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Aston Martin One-77 is a two-door coupé built by the British car manufacturer Aston Martin. It first appeared at the 2008 Paris Motor Show, although the car remained mostly covered by a 'Savile Row tailored skirt' throughout the show, before being fully revealed at the 2009 Geneva Motor Show, and deliveries from the beginning of 2011. There was a limited run of 77 cars, giving part of the name of the One-77, and sold for GB£1,150,000."
},
{
    name: 'Venom GT',
    color: 'Anthracite',
    price: '1200000',
    cover: 'img/venomgt.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Hennessey Venom GT is a high performance sports car manufactured by Texas-based Hennessey Performance Engineering. The Venom is a modified version of a British sports car, the Lotus Exige. It set a Guinness World Record for the fastest production car from 0–186 miles per hour (0–300 km/h) with an average acceleration time of 13.63 seconds. It is the the unofficial fastest accelerating production car in the world."
},
{
    name: 'McLaren P1',
    color: 'Black',
    price: '9999999',
    cover: 'img/mclarenp1.jpg',
    likes: 0,
    dislikes: 0,
    description: "The McLaren P1 is a British limited-production plug-in hybrid sports car produced by McLaren. The concept car was limited to 217 mph (350 km/h). Debuted at the 2012 Paris Motor Show, retail began in the UK in October 2013 and all 375 units were sold out by November.[6] Production ended in December 2015. The United States accounted for 34% of the units and Europe for 26%."
},
{
    name: 'Zenvo ST1',
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0,
    description: "Zenvo Automotive is a Danish supercar manufacturer located in Præstø on the Danish island of Zealand. It was founded by Troels Vollertsen, and the name 'Zenvo' is derived from a combination of the first 2 and last 3 letters in his last name. Zenvo Automotive was founded in 2004. The first prototype of what became the Zenvo ST1 was completed in December 2008 and production began in 2009.[1] Only 15 cars were built and sold.[2]."
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
