app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Supercars';
    $scope.promo = 'A supercar is a luxury, high-performance sports car or grand tourer.';
    $scope.products =
[
{
    name: 'Lamborghini Veneno',
    color: 'Silver',
    price: '4500000',
    cover: 'img/veneno.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Lamborghini Veneno is a limited production supercar based on the Lamborghini Aventador and was built to celebrate Lamborghini's 50th anniversary. When introduced in 2013 at a price of US$4,500,000, it was the most expensive production car in the world. The prototype, Car Zero, is finished in grey and includes an Italian flag vinyl on both sides of the car. The engine is a development of the Aventador's 6.5 L V12 and produces 750 PS (552 kW; 740 bhp)."
},
{
    name: 'Aston Martin Valkyrie',
    color: 'Steel',
    price: '3000000',
    cover: 'img/astonvalkyrie.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Aston Martin Valkyrie/ (codename: AM-RB 001) is an upcoming production hybrid electric sports car collaboratively built by Aston Martin, Red Bull Racing and several other manufacturers. The sports car is a product of collaboration between Aston Martin and Red Bull Racing to create a car entirely usable and enjoyable as a road car. The car's makers claim the title of fastest street-legal car in the world for it. Its design was helped by Adrian Newey, Red Bull Racing's Chief Technical Officer and the world's most successful F1 designer."
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
    name: 'Mercedes-Maybach 6 Cabriolet',
    color: 'Royal Blue',
    price: '3000000',
    cover: 'img/mercedesmaybach6.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Vision Mercedes-Maybach 6 is a concept car unveiled by German car manufacturer Mercedes-Benz, a subsidiary of Daimler, under its Maybach division at the 2016 Pebble Beach Concours d'Elegance. It is a 2+2 coupe that features an all-electric powertrain with a claimed range of over 200 miles (322 km). The concept car has a quoted electric output of 738 hp (550 kW), with a claimed limited top speed of 155 mph (249 km/h) and acceleration to 62 mph (100 km/h) in less than 4 seconds."
},
{
    name: 'Ferrari F80',
    color: 'Ferrari Red',
    price: '9999999',
    cover: 'img/f80.jpg',
    likes: 0,
    dislikes: 0,
    description: "Inspired by Ferrari Enzo, Ferrari F50, Ferrari FXX and Ferrari LaFerrari, as well as Futuristic Formula 1 and fighter jet from the US Army Boeing F/A-XX project, the Ferrari F80 Concept is created by the young independent Italian designer Adriano Raeli ( design student at the Art Center College of Design in Pasadena, California ). He imagines a form of supercar of 800 kg, the precursor of the future Ferrari."
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
    price: '2850000',
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
    price: '1500000',
    cover: 'img/mclarenp1.jpg',
    likes: 0,
    dislikes: 0,
    description: "The McLaren P1 is a British limited-production plug-in hybrid sports car produced by McLaren. The concept car was limited to 217 mph (350 km/h). Debuted at the 2012 Paris Motor Show, retail began in the UK in October 2013 and all 375 units were sold out by November.[6] Production ended in December 2015. The United States accounted for 34% of the units and Europe for 26%."
},
{
    name: 'Zenvo ST1',
    color: 'Silver',
    price: '780000',
    cover: 'img/zenvost1.jpg',
    likes: 0,
    dislikes: 0,
    description: "Zenvo Automotive is a Danish supercar manufacturer located on the Danish island of Zealand. It was founded by Troels Vollertsen, and the name 'Zenvo' is derived from a combination of the first 2 and last 3 letters in his last name. Zenvo Automotive was founded in 2004. The first prototype of what became the Zenvo ST1 was completed in December 2008 and production began in 2009."
},
{
    name: 'Mercedes Benz AMG - Project One',
    color: 'Steel',
    price: '2700000',
    cover: 'img/mercedesprojone.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Mercedes-AMG Project One (stylized as ONE) is an upcoming production plug-in hybrid supercar featuring Formula One-derived technology. The Project One will be competing against the Aston Martin Valkyrie, and unnamed sports cars by Ferrari, Audi and BMW. Currently, the car is at the concept state, since it has not reached homologation regulations yet. The name will also not be Project One. The exterior of the car is formed primarily for aerodynamics, although it still keeps a street car stance. Some of its parts come from Mercedes-Benz's Formula One cars, most noticeably the aerodynamic fin."
},
{
    name: 'Ferrari LaFerrari',
    color: 'Ferrari Red',
    price: '7000000',
    cover: 'img/laferrari.jpg',
    likes: 0,
    dislikes: 0,
    description: "LaFerrari (project name, F150) is a limited production hybrid sports car built by Ferrari. LaFerrari literally means 'TheFerrari' in Italian and in some other Romance languages, in the sense that it is the 'definitive' Ferrari. On December 3, 2016, a LaFerrari auctioned off for $7 million (5,743,500.00 GBP) making this car 'the most valuable 21st century automobile ever sold at auction'."
},
{
    name: 'W Motors Lykan Hypersport',
    color: 'Black',
    price: '3400000',
    cover: 'img/lykanhyper.jpg',
    likes: 0,
    dislikes: 0,
    description: "The Lykan Hypersport is a Lebanese limited production supercar built by W Motors, a United Arab Emirates based company, founded in 2012 in Lebanon with the collaboration of Lebanese, French and Italian engineers. It is the first supercar to be produced in the Middle East, and is featured in the film Furious 7. The HyperSport is the first car to have headlights with embedded jewels; they contain titanium LED blades with 420 diamonds (15cts). Buyers have a selection of rubies, diamonds, yellow diamonds, and sapphires to be integrated."
},
{
    name: 'Lamborghini Huracan',
    color: 'Blaze Red',
    price: '199800',
    cover: 'img/huracan.jpg',
    link: 'https://google.com',
    likes: 0,
    dislikes: 0,
    description: "The Lamborghini Huracan (Spanish for 'hurricane') is a sports car built by Lamborghini, replacing Lamborghini's sales leader and most produced car, the Gallardo. The Huracan made its auto show debut at the March 2014 Geneva Auto Show, and was released in the second quarter of 2014. The name of the Huracan LP 610-4 comes from the fact that this car has 610 metric horsepower and 4 wheel drive. The Huracan was named 'The Supercar of the Year 2014' by car magazine Top Gear."
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
