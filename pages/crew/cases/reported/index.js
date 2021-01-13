import { Fragment } from "react"

export async function getServerSideProps() {

  return {
    props: {}
  }
}

const Page = (props) => {
  return (
    <Fragment>
      <div>
        reported case
      </div>
    </Fragment>
  )
}


export default Page;
