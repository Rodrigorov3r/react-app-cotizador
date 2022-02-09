import React from 'react';
import styled from '@emotion/styled';
import { primerMayus } from '../helper';


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;


const Resumen = ({datos}) => {
    //extraer datos
    const {marca, year, plan} = datos;
    
    //si esta todo en blanco no llega al return del h2, es decir no llega a ese bloque de cod y no ejecuta nada
    if(marca === '' || year === '' || plan === '') 
    return null; 
    
    return (
        //fragment
        <ContenedorResumen> 
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { primerMayus(marca) }</li>
                <li>Plan: { primerMayus(plan) }</li>
                <li>Año del Auto: { primerMayus(year) }</li>
            </ul>
        </ContenedorResumen>

        
  );
};

export default Resumen;
