//EJERCICIO 2       pedir que se ingresen los datos 

const numeroUno = +prompt("ingrese un numero mayor a cero")
const numeroDos = +prompt("ingrese un numero diferente al anterior")

// pasar a numero
const numeroUnoParsed = parseFloat(numeroUno)
const numeroDosParsed = parseFloat(numeroDos)


const resultadoSuma = numeroUno + numeroDos
const resultadoResta = numeroUno - numeroDos
const resultadoMultiplicacion = numeroUno * numeroDos
const resultadoDivision = numeroUno / numeroDos

//mostrar resultados en alerta
alert(`El resultado de la Suma es: ${resultadoSuma}`)
alert(`El resultado de la Resta es: ${resultadoResta}`)
alert(`El resultado de la Multiplicación es: ${resultadoMultiplicacion}`)
alert(`El resultado de la División es: ${resultadoDivision}`)



//EJERCICIO 3 ingresar la temperatura en grados Celsius
const temperaturaCelcius = +prompt("Ingrese la temperatura en grados Celcius")

//convertir la temperatura a kelvin y fahrenheit
const temperaturaKelvin = parseFloat(temperaturaCelcius) + 273.15;
const temperaturaFahrenheit = (parseFloat(temperaturaCelcius) * 9 / 5) + 32;

//mostrar resultado en alerta
alert(`El resultado de Grados Celcius a Kelvin es: ${temperaturaKelvin}`)
alert(`El resultado de Grados Celcius a Fahrenheit es: ${temperaturaFahrenheit}`)



//EJERCICIO 4 pedir que ingrese una cantidad de dias
const cantidadDias = +prompt("Ingrese una cantidad de días")

//debo calcular la equivalencia en años, semanas y dias
const anios = Math.floor(cantidadDias / 365);
const semanas = Math.floor((cantidadDias % 365) / 7);
const diasRestantes = cantidadDias % 7;

//mostrar el resultado en alertas
alert(`${cantidadDias} días equivalen a:\n` +
    `Años: ${anios}\n` +
    `Semanas: ${semanas}\n` +
    `Días: ${diasRestantes}`);

//EJERCICIO 4 pedir que se ingresen 5 numeros
const numeros = [];

for (const i = 0; i < 5; i++) {
    const numero = prompt(`Ingrese el número ${i + 1}:`);
    numeros.push(parseFloat(numero));
}
const suma = numeros.reduce(function (total, num) {
    return total + num;
}, 0);
const promedio = suma / numeros.length;

alert(`Los números ingresados son: ${numeros.join(', ')}\n` +
    `La suma de los números es: ${suma}\n` +
    `El promedio de los números es: ${promedio.toFixed(2)}`);











