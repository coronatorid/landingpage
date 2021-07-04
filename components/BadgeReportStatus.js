import Badge from './Badge'
import PropTypes from 'prop-types'

const BadgeReportStatus = ({status}) => {

  const allowedStatuses = {
    0: {
      name: 'Dikonfirmasi',
      type: 'danger'
    },
    1: {
      name: 'Ditolak',
      type: 'secondary'
    },
    2: {
      name: 'Pending',
      type: 'warning'
    }
  }

  function selectedStatus() {
    return allowedStatuses[status] ?? allowedStatuses[0]
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
