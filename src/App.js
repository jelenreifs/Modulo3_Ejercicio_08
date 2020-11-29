import './App.css';

import React, { useState } from 'react';


function App() {
  //definimos el estado: el símbolo, que irá cambiando en cada turno, y un array con las nueve posiciones del tablero
  let [simbolo, setSimbolo] = useState('X');
  let [cuadrados, setCuadrados] = useState([null, null, null, null, null, null, null, null, null]);

  //declaramos una variable para comprobar si hay un ganador. el valor asignado a esta variable será lo que nos devuelva la función comprobarGanador.
  let ganador = comprobarGanador(cuadrados);


  //declaramos una función para cambiar de símbolo en cada turno. actualizamos el estado
  function cambiarSimbolo() {
    if (simbolo === 'X') {
      setSimbolo('0');
    } else {
      setSimbolo('X')
    }
  }

  //creamos una función para crear los botones. recibe un parámetro 'i' que usaremos para saber en qué posición del array deberemos pintar el símbolo. esta función devuelve un elemento JSX: un botón con un evento onClick.
  function pintarBoton(i) {
    //el evento onClick ejecuta una función para añadir al array 'cuadrados', en la posición 'i', el símbolo correspondiente. es decir, si el i que recibe como parámetro la función pintarBoton es un 6, pintaremos en la posición 6 del array el símbolo correspondiente ('O' o 'X')
    return <button value={i} onClick={function () {
      //primero comprobamos que esa posición del array no tiene ya un valor.
      if (cuadrados[i] === null) {
        //creamos un nuevo array a partir del array que tenemos en el estado.
          let simbolos = cuadrados.slice();
          //let simbolos = [...cuadrados]
        //al array nuevo le añadimos un valor a la posición indicada.
        simbolos[i] = simbolo;
        //actualizamos el estado con el array.
        setCuadrados(simbolos);
        //cambiamos el símbolo
        cambiarSimbolo();
      }
      //pintamos en el HTML el valor del array en la posición i. si no hay ningún valor no se mostrará nada
    }}>{cuadrados[i]}</button>
  }

  //creamos la función para comprobar el ganador. recibe como parámetro el array 'cuadrados' que tenemos en el estado
  function comprobarGanador(cuadrados) {
    /*comprobamos todas las posibles combinaciones: líneas horizontales, verticales y diagonales. para eso comprobamos si los valores de las posiciones del array son iguales.
      
    | 0 , 1 , 2 |
    | 3 , 4 , 5 |
    | 6 , 7 , 8 |
    
    */
    if (cuadrados[0] === cuadrados[1] && cuadrados[0] === cuadrados[2] && cuadrados[1] === cuadrados[2]) {

      return cuadrados[0];

    } else if (cuadrados[3] === cuadrados[4] && cuadrados[3] === cuadrados[5] && cuadrados[4] === cuadrados[5]) {

      return cuadrados[3];

    } else if (cuadrados[6] === cuadrados[7] && cuadrados[6] === cuadrados[8] && cuadrados[7] === cuadrados[8]) {

      return cuadrados[6];

    } else if (cuadrados[0] === cuadrados[3] && cuadrados[0] === cuadrados[6] && cuadrados[3] === cuadrados[6]) {

      return cuadrados[0];

    } else if (cuadrados[1] === cuadrados[4] && cuadrados[1] === cuadrados[7] && cuadrados[4] === cuadrados[7]) {

      return cuadrados[1];

    } else if (cuadrados[2] === cuadrados[5] && cuadrados[5] === cuadrados[8]) {

      return cuadrados[2];

    } else if (cuadrados[0] === cuadrados[4] && cuadrados[0] === cuadrados[8] && cuadrados[4] === cuadrados[8]) {

      return cuadrados[0];

    } else if (cuadrados[2] === cuadrados[4] && cuadrados[2] === cuadrados[6] && cuadrados[4] === cuadrados[6]) {

      return cuadrados[2];

    }

    //si no hay ninguna coincidencia, devolvemos null
    return null;

  }
  //creamos la función para mostrar el ganador en el HTML
  function mostrarGanador() {
    //si la variable ganador es diferente de null, mostramos un mensaje. si es null, no mostramos nada
    if (ganador !== null) {
      return <>Ganador: {ganador}</>
    }
  }


  return (
    <>
      {/* creamos tantos botones como necesitemos. a cada uno de ellos le pasamos un valor */}
      {pintarBoton(0)}
      {pintarBoton(1)}
      {pintarBoton(2)}
      <br />
      {pintarBoton(3)}
      {pintarBoton(4)}
      {pintarBoton(5)}
      <br />
      {pintarBoton(6)}
      {pintarBoton(7)}
      {pintarBoton(8)}
      {/* en un h1 mostramos el ganador */}
      <h1>{mostrarGanador()}</h1>

    </>
  )

}

export default App;


