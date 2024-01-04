
import PropTypes from 'prop-types';


const NewMessage = {
    message : "Hola Mundo",
    name: "Manuel Castillo",
    title: "PRUEBA"
};

const getResult = () => {
    return 4+4;
}

export const FirstModule = ({title,  subTitle, name}) => {
  return (
    <>
        <h1>{ name }</h1>
        <h2>{ title }</h2>
        <p>{ subTitle }</p>
    </>
  )
};


FirstModule.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired 
}

FirstModule.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'No hay nombre'
}