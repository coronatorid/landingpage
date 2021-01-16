import Badge from './Badge'
import PropTypes from 'prop-types'

const BadgeReportStatus = ({status}) => {

  console.log(status);

  const allowedStatuses = [
    {
      id: '1',
      name: 'Unnamed Status',
      type: 'warning',
    },
    {
      id: '2',
      name: 'Unnamed Status',
      type: 'danger',
    },
    {
      id: '3',
      name: 'Unnamed Status',
      type: 'default',
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
  status: PropTypes.string,
}

BadgeReportStatus.defaultProps = {
  status: 'pending'
}

export default BadgeReportStatus
