import PropTypes from 'prop-types'

const Badge = ({type, children}) => {
  const allowedTypes = {
    default: {
      name: 'default',
      classes: 'bg-gray-100 border ',
    },
    danger: {
      name: 'danger',
      classes: 'bg-red-600 text-gray-100',
    },
    primary: {
      name: 'primary',
      classes: 'bg-blue-600 text-gray-100',
    },
    secondary: {
      name: 'secondary',
      classes: 'bg-gray-300 text-white',
    },
    success: {
      name: 'success',
      classes: 'bg-green-600 text-gray-100',
    },
    warning: {
      name: 'warning',
      classes: 'bg-yellow-300 text-gray-800',
    },
  };

  function selectedType() {
    return allowedTypes[type] ?? allowedTypes['default']
    const _type = allowedTypes.find((allowedType) => {
      return allowedType.name == type
    })

    return _type ? _type : allowedTypes[0]
  }

  return (
    <span className={`inline-block px-3 py-2 text-xs rounded-full shadow-sm ${selectedType().classes}`}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  type: PropTypes.string,
}

Badge.defaultProps = {
  type: 'default'
}

export default Badge
