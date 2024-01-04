import { useState } from 'react'

import PropTypes from 'prop-types';


export const CounterApp = ({valor}) => {
  
    const [ counter, setCounter ] = useState( valor )


    const handleAdd = () => setCounter ( (c) => c + 1 ) ;
    
    const handleSubs = () => setCounter ( (c) => c - 1 ) ;

    const handleRst = () => setCounter ( (c) => valor ) ;
  
    return (
    <>
        <h1> CounterApp </h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubs }> -1 </button>
        <button onClick={ handleRst }> Reset </button>
    </>
  )
};


CounterApp.propTypes = {
    valor: PropTypes.number.isRequired 
}

CounterApp.defaultProps = {
    valor: 'No hay valor' 
}