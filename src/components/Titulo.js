import React from 'react';
import titulo from '../img/title.jpg'

const Titulo = () => {
    return(
        <div className='titulo-container'>
            <h1><img src={titulo} alt='logo de la página'/></h1>
        </div>
        )
}

export default Titulo