let myMap1 = new Map();
		myMap1.set('Kotton', 'dress');
		myMap1.set('Arizzo', 'jeans');
		myMap1.set('Glem', 'hat');
		myMap1.set('Issa', 'wristwatch');
		console.log("/ / / / / First map / / / / / ")
		for (var [key, value] of myMap1) {
			console.log(key + ' : ' + value);
		}
		

let myMap2 = new Map();
	myMap2.set('Kotton', 1200);
	myMap2.set('Arizzo', 820);
	myMap2.set('Glem', 630);
	myMap2.set('Issa', 1500);
	console.log("/ / / / / Second map / / / / / ")
	for (var [key, value] of myMap2) {
		console.log(key + ' : ' + value);
	}
		


let myMap3 = new Map();
	myMap3.set('Kotton', 18);
	myMap3.set('Arizzo', 7);
	myMap3.set('Glem', 13);
	myMap3.set('Issa', 11);
	console.log("/ / / / / Third map / / / / / ")
	for (var [key, value] of myMap3) {
		console.log(key + ' : ' + value);
	}

let minprice = function(){
	let producer_1 = myMap2.get('Kotton')
	let producer_2 = myMap2.get('Arizzo')
	let producer_3 = myMap2.get('Glem')
	let producer_4 = myMap2.get('Issa')

	if(producer_1 == Math.min(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Kotton')} ; ${myMap2.get('Kotton')} UAH ; Kotton ; ${myMap3.get('Kotton')} march`)
	}else if(producer_2 == Math.min(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Arizzo')} ; ${myMap2.get('Arizzo')} UAH ; Arizzo ; ${myMap3.get('Arizzo')} march`)
	}else if(producer_3 == Math.min(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Glem')} ; ${myMap2.get('Glem')} UAH ; Glem ; ${myMap3.get('Glem')} march`)
	}else if(producer_4 == Math.min(producer_1, producer_2, producer_3, producer_4)) {
			alert(`${myMap1.get('Issa')} ; ${myMap2.get('Issa')} UAH ; Issa ; ${myMap3.get('Issa')} march`)
	}
}

let mintime = function() {
    let producer_1 = myMap3.get('Kotton')
	let producer_2 = myMap3.get('Arizzo')
	let producer_3 = myMap3.get('Glem')
	let producer_4 = myMap3.get('Issa')

	if(producer_1 == Math.min(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Kotton')} ; ${myMap2.get('Kotton')} UAH ; Kotton ; ${myMap3.get('Kotton')} march`)
	}else if(producer_2 == Math.min(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Arizzo')} ; ${myMap2.get('Arizzo')} UAH ; Arizzo ; ${myMap3.get('Arizzo')} march`)
	}else if(producer_3 == Math.min(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Glem')} ; ${myMap2.get('Glem')} UAH ; Glem ; ${myMap3.get('Glem')} march`)
	}else if(producer_4 == Math.min(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Issa')} ; ${myMap2.get('Issa')} UAH ; Issa ; ${myMap3.get('Issa')} march`)
	}
}

let maxprice = function() {
    let producer_1 = myMap2.get('Kotton')
	let producer_2 = myMap2.get('Arizzo')
	let producer_3 = myMap2.get('Glem')
	let producer_4 = myMap2.get('Issa')

    if(producer_1 == Math.max(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Kotton')} ; ${myMap2.get('Kotton')} UAH ; Kotton ; ${myMap3.get('Kotton')} march`)
	}else if(producer_2 == Math.max(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Arizzo')} ; ${myMap2.get('Arizzo')} UAH ; Arizzo ; ${myMap3.get('Arizzo')} march`)
	}else if(producer_3 == Math.max(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Glem')} ; ${myMap2.get('Glem')} UAH ; Glem ; ${myMap3.get('Glem')} march`)
	}else if(producer_4 == Math.max(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Issa')} ; ${myMap2.get('Issa')} UAH ; Issa ; ${myMap3.get('Issa')} march`)
	}
}

let maxtime = function() {
    let producer_1 = myMap3.get('Kotton')
	let producer_2 = myMap3.get('Arizzo')
	let producer_3 = myMap3.get('Glem')
	let producer_4 = myMap3.get('Issa')

    if(producer_1 == Math.max(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Kotton')} ; ${myMap2.get('Kotton')} UAH ; Kotton ; ${myMap3.get('Kotton')} march`)
	}else if(producer_2 == Math.max(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Arizzo')} ; ${myMap2.get('Arizzo')} UAH ; Arizzo ; ${myMap3.get('Arizzo')} march`)
	}else if(producer_3 == Math.max(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Glem')} ; ${myMap2.get('Glem')} UAH ; Glem ; ${myMap3.get('Glem')} march`)
	}else if(producer_4 == Math.max(producer_1, producer_2, producer_3, producer_4)) {
		alert(`${myMap1.get('Issa')} ; ${myMap2.get('Issa')} UAH ; Issa ; ${myMap3.get('Issa')} march`)
	}
}

minprice();
mintime();
maxprice();
maxtime();
