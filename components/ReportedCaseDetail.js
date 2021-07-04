import PropTypes from 'prop-types'
import EmptyData from './EmptyData'
import moment from 'moment'
import { useState } from 'react'

const ReportedCaseDetail = ({data}) => {
  const [isSubmit, setIsSubmit] = useState(false)

  async function updateStatus() {
    // update status and update this case here...
  }

  return (
    <div>
      <div className="font-bold tracking-wide">
        Case ID: {data.id}
      </div>
      <p className="text-gray-500 text-sm mb-3">
        {moment(data.created_at).format('YYYY, MMMM DD - HH:mm:ss')}
      </p>
      {
        data.image_deleted == false
          ? (
            <>
              <div className="block w-full border border-gray-300 rounded-md overflow-hidden">
                <img src={data.image_path} alt="..."/>
              </div>
            </>
          )
          : (
            <EmptyData />
          )
      }
    </div>
  )
}

ReportedCaseDetail.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    user_id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    status: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    image_path: PropTypes.string,
    image_deleted: PropTypes.bool,
    created_at: PropTypes.string
  })
}

export default ReportedCaseDetail
