import { Fragment, useEffect, useState } from "react"
import {Grid, _} from 'gridjs-react'
import useAccessToken from "../../../../hooks/useAccessToken"
import {useRouter} from 'next/router'
import "gridjs/dist/theme/mermaid.css"
import Modal from '../../../../components/Modal'
import { route } from "next/dist/next-server/server/router"
import BadgeReportStatus from '../../../../components/BadgeReportStatus'
import ReportedCaseDetail from '../../../../components/ReportedCaseDetail'
import EmptyData from "../../../../components/EmptyData"

const Page = (props) => {
  const router = useRouter();
  const accessToken = useAccessToken()
  const [data, setData] = useState(
    [
      {
        "id": 1,
        "user_id": 1,
        "status": 2,
        "image_path": "http://192.168.0.7:1304/storage/1/666df487-61a1-456a-9cea-466a113ea429.jpeg?signature=AURELIA_7c6ebfc5617110b0810bd21fed6ca7bfa5ab33c8.b2f786925af34d85baedf1727c84ec0b286711a8.UC_25657ae4a8549a0ed58591c04ce359840c4c9474b926abc18ce2d9244c054647&expires_at=1610725746",
        "image_deleted": false,
        "created_at": "2021-01-15T15:48:02Z",
        "updated_at": "2021-01-15T15:48:02Z"
      },
      {
        "id": 2,
        "user_id": 1,
        "status": 2,
        "image_path": "http://192.168.0.7:1304/storage/1/666df487-61a1-456a-9cea-466a113ea429.jpeg?signature=AURELIA_7c6ebfc5617110b0810bd21fed6ca7bfa5ab33c8.b2f786925af34d85baedf1727c84ec0b286711a8.UC_25657ae4a8549a0ed58591c04ce359840c4c9474b926abc18ce2d9244c054647&expires_at=1610725746",
        "image_deleted": false,
        "created_at": "2021-01-15T15:48:02Z",
        "updated_at": "2021-01-15T15:48:02Z"
      },
      {
        "id": 3,
        "user_id": 1,
        "status": 2,
        "image_path": "http://192.168.0.7:1304/storage/1/666df487-61a1-456a-9cea-466a113ea429.jpeg?signature=AURELIA_7c6ebfc5617110b0810bd21fed6ca7bfa5ab33c8.b2f786925af34d85baedf1727c84ec0b286711a8.UC_25657ae4a8549a0ed58591c04ce359840c4c9474b926abc18ce2d9244c054647&expires_at=1610725746",
        "image_deleted": false,
        "created_at": "2021-01-15T15:48:02Z",
        "updated_at": "2021-01-15T15:48:02Z"
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
              {
                name: 'id',
                hidden: true,
              },
              'created_at',
              {
                name: 'status',
                formatter: (cell, row) => {
                  return _(<BadgeReportStatus status={row.cells[2].data} />)
                }
              },
              {
                name: 'Action',
                formatter: (cell, row) => {
                  return _(
                    <span
                      onClick={() => showDetailData(row.cells[0].data)}
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
            body={activeData ? <ReportedCaseDetail data={activeData} /> : <EmptyData />}
          />
        </div>
      </section>
    </Fragment>
  )
}


export default Page
