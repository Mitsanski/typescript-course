type CarTuple = [string, string, number];

function carInfo(car: CarTuple): string {
	return `Driving a ${car[2]} ${car[0]} ${car[1]}`;
}

console.log(carInfo(["Merc", "G-Wagon", 2025]));
console.log(carInfo(["Honda", "Civic Type R", 2021]));
console.log(carInfo(["Lamborghini", "Huracan", 2020]));
console.log(carInfo(["Fiat", "Panda", 1985]));
