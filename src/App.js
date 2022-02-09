import React, {useState} from 'react';
import Header from './Components/Header';
import styled from '@emotion/styled';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen';
import Resultado from './Components/Resultado';




const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: white;
  padding: 3rem;
`;


function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: '',}
  });

  //extraer datos
  const { cotizacion, datos } = resumen;

  return (
    
      <Contenedor>
          <Header 
          titulo='Cotizador de Seguros'
          />
          <ContenedorFormulario>
            <Formulario 
              guardarResumen={guardarResumen} // const que tiene la función para de ahi pasarla al componente hijo (Formulario)
            /> {/* si es un componente que vive por si solo no es necesaria la etiqueta <formulario/>  */}
            <Resumen 
              datos= {datos} />
            <Resultado 
              cotizacion= {cotizacion}/>
          </ContenedorFormulario>
      </Contenedor>
    
  );
}

export default App;
