import classes from './Button.module.scss';
const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${classes.btn} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
