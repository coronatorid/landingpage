import { useContext, useEffect } from "react"
import userApi from '../../services/api/userApi'
import useAccessToken from "../../hooks/useAccessToken"
import Link from 'next/link'

const Page = (props) => {
  const accessToken = useAccessToken()

  return (
    <>
      hello from crew
    </>
  )
}

Page.layout = 'crew'

export default Page
