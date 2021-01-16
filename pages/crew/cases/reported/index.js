import { Fragment, useEffect, useState } from "react"
import {Grid, _} from 'gridjs-react'
import useAccessToken from "../../../../hooks/useAccessToken"
import {useRouter} from 'next/router'
import "gridjs/dist/theme/mermaid.css"
import Modal from '../../../../components/Modal'
import { route } from "next/dist/next-server/server/router"
import BadgeReportStatus from '../../../../components/BadgeReportStatus'

const Page = (props) => {
  const router = useRouter();
  const accessToken = useAccessToken()
  const [data, setData] = useState(
    [
      {
        id: '1',
        created_at: '123123',
        status: 'valid',
      },
      {
        id: '2',
        created_at: '12323',
        status: 'pending'
      }
    ]
  )
  const [showModal, setShowModal] = useState(false)
  const [activeData, setActiveData] = useState(null)
  const [page, setPage] = useState(router.query.page || 1);

  useEffect(() => {
    const {pathname} = router;

    router.push({
      pathname,
      query: {
        ...router.query,
        page: page,
      }
    });

    console.log('page changed to: ', page);
  }, [page]);

  async function fetchData() {
    try {
      set
    } catch (error) {

    } finally {

    }
  }

  async function showDetailData(id) {
    const detailData = data.find(item => {
      return item.id == id;
    })

    if(detailData)
      setActiveData(detailData)

    setShowModal(true)
  }

  return (
    <Fragment>
      <h3>
        Cases - Reported
      </h3>
      <section className="section">
        <div className="mb-3">
          <Grid
            data={data}
            columns={[
              'created_at',
              {
                name: 'status',
                formatter: (cell, row) => {
                  return _(<BadgeReportStatus status={row.cells[1].data} />)
                }
              },
              {
                name: 'id',
                formatter: (cell) => {
                  return _(
                    <span
                      onClick={() => showDetailData(cell)}
                      className="inline-block bg-blue-500 rounded-md text-gray-100 px-3 py-2"
                    >Show Data</span>
                  )
                }
              }
            ]}
            pagination={{
              limit: 20,
            }}
            >
          </Grid>
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            header="Case Detail"
            body={
              activeData
                ? (
                  <div>
                    <div>
                      {activeData.id}
                    </div>
                    <div>
                      {activeData.status}
                    </div>
                    <div>
                    </div>
                  </div>
                )
                : (
                  <p>No Data</p>
                )
            }
          />
        </div>
      </section>
    </Fragment>
  )
}


export default Page
