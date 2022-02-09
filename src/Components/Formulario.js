import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obetenerDifYear, calculaMarca, obtenerPlan } from '../helper';

//--- STYLED COMPONENTS --- //
const Campo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem ;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color 600ms ease; // color - tiempo - animación
    margin-top: 1.5rem ;

    //& permite refenciar al elemento y darle estilo a sus pseudo-elements
    &:hover{ 
        background-color: #26c6da;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    width: 100%;
    padding: 1rem;
    text-align: center ;
    margin-bottom: 1.5rem;
`;

//--- COMPONENTE ---//

const Formulario = ({guardarResumen}) => {

    //registro el estado inicial de un Evento. Un state
    const [datos, guardarDatos] = useState({  
        marca: '',
        year: '', //letra ñ no se puede declarar como variable
        plan: ''
    })

    //registro un state por si hay error 
    const [error, guardarError] = useState(false) //false xq no hay error hasta que el usuario deje algún campo vacío

    //extraer los datos a partir del destructuring
    const { marca, year, plan } = datos;

    //leer los datos del formulario y colocarlos en state
    const obtenerInformacion = e => {
        guardarDatos({
            //copio el objeto a partir del spread operator
            ...datos, 
            //sustraigo, a partir del met target, el name y el value de 'e'
            [e.target.name] : e.target.value //dynamic key name me sirve para usar el valor de una var como key
        })
    }


    //cuando el usuario presiona submit - EVENTO
    const cotizarSeguro = e => {
       
        //cuando presione submit, IMPIDO que lo envie.
        e.preventDefault()

        //si hay datos vacios 
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        //base de año, 2000
        let resultado = 2000;
    
        // obtener la diferencia de años
        const diferencia = obetenerDifYear(year);
        
        // por cada año hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;
        
        // Americano 15
        // Asiatico 5
        // Europeo 30
        resultado = calculaMarca(marca) * resultado;
        
        //Basico aumenta 20
        //Completo 50%
        const verificoIncrem = obtenerPlan(plan);
        resultado = parseFloat(verificoIncrem * resultado).toFixed(2); //float y fixed para los centavos
        console.log(resultado);
        //Total

        guardarResumen({
            cotizacion: resultado,
            datos
        })
    }   



  return (
    <form
        onSubmit={cotizarSeguro}    //button debe ser type='submit' para que dispare el evento
    >
        {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
            <Label>Marca</Label>
            <Select
                name='marca'
                value={marca}
                //onChange es el tipo de evento, y va a llamar a la función cuando suceda para ejecute código
            onChange={obtenerInformacion}> 
            <option value="">-- Seleccione --</option>
            <option value="Americano">Americano</option>
            <option value="Europeo">Europeo</option>
            <option value="Asiatico">Asiatico</option>
            </Select>
        </Campo>
        <Campo>
            <Label>Año</Label>
            <Select
                name='year'
                value={year}
                onChange={obtenerInformacion}>
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            </Select>
        </Campo>

      <Campo>
            <Label>Plan</Label>
            <InputRadio type="radio" name="plan" value="basico" 
                checked={plan === 'basico'}
                onChange={obtenerInformacion} />
            Básico
            <InputRadio type="radio" name="plan" value="completo" 
                checked={plan === 'completo'}
                onChange={obtenerInformacion} />
            Completo
      </Campo>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

export default Formulario;
