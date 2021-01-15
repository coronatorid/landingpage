import { Fragment } from "react"
import useAccessToken from "../../../../hooks/useAccessToken";

const CasesInput = (props) => {
  const accessToken = useAccessToken();

  return (
    <Fragment>
      Input case goes here
    </Fragment>
  )
}


export default CasesInput;
