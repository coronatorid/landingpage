import Badge from './Badge'
import PropTypes from 'prop-types'

const BadgeReportStatus = ({status}) => {
  const allowedStatuses = [
    {
      id: 0,
      name: 'Dikonfirmasi',
      type: 'danger'
    },
    {
      id: 1,
      name: 'Ditolak',
      type: 'secondary',
    },
    {
      id: 2,
      name: 'Pending',
      type: 'warning',
    },
  ]

  function selectedStatus() {
    const _status = allowedStatuses.find((allowedStatus) => {
      return allowedStatus.id == status
    })

    return _status ? _status : allowedStatuses[0]
  }

  return (
    <Badge type={selectedStatus().type}>
      {selectedStatus().name}
    </Badge>
  )
}

BadgeReportStatus.propTypes = {
  status: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

BadgeReportStatus.defaultProps = {
  status: 'pending'
}

export default BadgeReportStatus
