import Proptypes from 'prop-types';

const Button = ({ bulmaColor, text, onClick }) => {
    return (
        <button onClick={onClick}
        className={`button ${bulmaColor}`}
        >
        {text}
        </button>
    )
}

Button.propTypes = {
    text: Proptypes.string,
    bulmaColor: Proptypes.string,
    onClick: Proptypes.func,
}

export default Button