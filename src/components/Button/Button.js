import './Button.css';

const Button = function(props){
    return(
        <button className='button'>{props.text}</button>
    )
}

export default Button;