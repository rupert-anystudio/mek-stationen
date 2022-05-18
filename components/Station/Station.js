import Chapters from "../Chapters"
import Header from "../Header"
import IdleCover from "../IdleCover"
import Main from "../Main"

const Station = () => {
  return (
    <>
      <Header />
      <Main>
        <Chapters />
      </Main>
      <IdleCover />
    </>
  )
}

export default Station