let elem = document.querySelector('#elem');

setInterval(function() {
	elem.value = Number(elem.value) + 1;
}, 1000); // Функция Number используется для преобразования значения элемента input с id "elem" в числовой тип данных. 