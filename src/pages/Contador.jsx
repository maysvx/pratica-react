import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Contador = () => {

    //let numero = 0;
    let [numero, setNumero] = useState(0)

    function somar(){
        setNumero(++numero)
        console.log(numero)
    }

    function menos(){
        setNumero(--numero)
        console.log(numero)
    }

    function menoscinco(){
        setNumero(numero - 5)
        console.log(numero)
    }

    function menosdez(){
        setNumero(numero - 10)
        console.log(numero)
    }

    function maiscinco(){
        setNumero(numero + 5)
        console.log(numero)
    }

    function maisdez(){
        setNumero(numero + 10)
        console.log(numero)
    }

  return (
    <div>
        <h1>Contador</h1>
        
        <Button variant="danger" onClick={menosdez}> -10 </Button>
        <Button variant="danger" onClick={menoscinco}> -5 </Button>
        <Button variant="danger" onClick={menos}> - </Button>
        {numero} 
        <Button variant="success" onClick={somar}> + </Button>
        <Button variant="success" onClick={maiscinco}> +5 </Button>
        <Button variant="success" onClick={maisdez}> +10 </Button>

    </div>
  )
}

export default Contador