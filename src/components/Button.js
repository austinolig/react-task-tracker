import PropTypes from 'prop-types'

const Button = ({ color, text, onAdd }) => {
    // const onClick1 = (e) => {
    //     console.log('Click!' + e)
    // }
    
    return ( 
        <button onClick={ onAdd } style={{ backgroundColor: color }} className='btn'>
            { text }
        </button>
    )
}

Button.defaultProps = {
    color: 'grey',
}

Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
