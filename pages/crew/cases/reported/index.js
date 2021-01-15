import { Fragment } from "react"
import {Grid} from 'gridjs-react'
import useAccessToken from "../../../../hooks/useAccessToken"
import { useEffect } from "gridjs"

const Page = (props) => {
  const accessToken = useAccessToken()
  const [setData,]

  async function fetchData() {
    try {
      set
    } catch (error) {

    } finally {

    }
  }

  useEffect(() => {

  }, []);

  return (
    <Fragment>
      <h3>
        Reported Cases
      </h3>
      <section className="section">
        <div className="mb-3">
          <Grid
            data={data}
            columns={['id', 'status']}
            pagination={{
              limit: 10,
            }}
            server={{
              url: '',
              then: data => {
                return data.data.map(card => )
              }
            }}
            >

          </Grid>
        </div>
      </section>

    </Fragment>
  )
}


export default Page;
