import style from './Heading.module.css';
import PropTypes from 'prop-types';


export const Heading = (props) => {
  console.log(style);
  return (
    <h1 className={style.heading}> {props.text} </h1>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
};
