import PropTypes from 'prop-types'

const Button = ({
  size,
  type,
  children,
}) => {
  return (
    <></>
  )
}

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.element,
}

Button.defaultProps = {
  size: 'md',
  type: 'default',
  children: (<></>)
}

export default Button
