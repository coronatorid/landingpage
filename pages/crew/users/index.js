import { Fragment } from "react"
import useAccessToken from '../../../hooks/useAccessToken';

const Users = () => {
  const accessToken = useAccessToken();

  return (
    <Fragment>
      <div>
        Users
      </div>
    </Fragment>
  )
}

export default Users;
