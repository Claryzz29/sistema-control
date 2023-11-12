import React from 'react';

function Barra() {
  return (
    <div className='barra'>
      <img 
        className='imagen-barra'
        src={require('../imagenes/logo.png')}
        alt='logo de escuela' />
        
        <div className="credenciales">
          <p className="titulo">Ingresar credenciales</p>
          <form>
            <label form="nombre">Usuario</label>
            <input type="text" id="nombre" name="nombre"></input>
          </form>

        </div>

    </div>
    


  );
}

export default Barra;
