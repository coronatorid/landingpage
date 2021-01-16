import Badge from './Badge'
import PropTypes from 'prop-types'

const BadgeReportStatus = ({status}) => {

  console.log(status);

  const allowedStatuses = [
    {
      name: 'pending',
      type: 'warning',
    },
    {
      name: 'valid',
      type: 'danger',
    },
    {
      name: 'rejected',
      type: 'default',
    },
  ]

  function selectedStatus() {
    const _status = allowedStatuses.find((item) => {
      return String(item.name).toLowerCase() == String(status).toLowerCase()
    })

    return _status ? _status : allowedStatuses[0]
  }

  return (
    <Badge type={selectedStatus().type}>
      {status}
    </Badge>
  )
}


BadgeReportStatus.propTypes = {
  status: PropTypes.string,
}

BadgeReportStatus.defaultProps = {
  status: 'pending'
}

export default BadgeReportStatus
