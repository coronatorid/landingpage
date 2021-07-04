import { Fragment } from "react"
import useAccessToken from "../../../../hooks/useAccessToken"

const Page = (props) => {
  const accessToken = useAccessToken()

  return (
    <Fragment>
      <h3>
        Cases - Input
      </h3>
      <section className="section">
        <div>

        </div>
      </section>
    </Fragment>
  )
}


export default Page
