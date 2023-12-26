import React from 'react'; //para usar todo el poder de react
import '../hojas-de-estilo/Testimonio.css';
function Testimonio(props) {
    return (
      //describir estructura de mi componente
      <div className='contenedor-testimonio'>
        <img 
        className='imagen-testimonio'
        //no podemos agregar directamente la imagen, usamos metodo require
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma'/>

        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
          <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
      </div>
      
    );
}

//Para poder "importar" en otros archivos, es necesario "exportar" el componente
export default Testimonio;