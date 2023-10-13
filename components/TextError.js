import PropTypes from 'prop-types';

const TextError = (props) => {
  return (
    <span className="text-red-500">
      {props.children}
    </span>
  )
}

export default TextError;
