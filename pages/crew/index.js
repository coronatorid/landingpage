import { useContext, useEffect } from "react";
import userApi from '../../services/api/userApi';
import useAccessToken from "../../hooks/useAccessToken";

const CrewIndex = (props) => {
  const accessToken = useAccessToken();

  return (
    <>
      hello from crew
    </>
  )
}

CrewIndex.layout = 'crew';

export default CrewIndex;
