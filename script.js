// function btn(e) {
// 	e.preventDefault();
// 	console.log('world');
// }

/*
function add(num, nums) {
	return num + nums;
}

const sum = add(1, 2);

window.alert(sum);
function(message)period
*/

function getValue() {
	let x = document.getElementById('input').valueAsNumber;
	// alert(typeof x);
	// alert(x + x);
	// const y = document.getElementById('result').valueAsNumber;

	// alert(x);

	x = x - 123;

	document.getElementById('number').textContent = `It's 
		${x}° fahrenheit on Mars be grateful you live on earth, BITCH! 🚀`;
}
