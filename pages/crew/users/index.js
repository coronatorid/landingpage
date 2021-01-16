import { Fragment } from "react"
import useAccessToken from '../../../hooks/useAccessToken'

const Page = () => {
  const accessToken = useAccessToken()

  return (
    <Fragment>
      <div>
        Users page
      </div>
    </Fragment>
  )
}

export default Page
