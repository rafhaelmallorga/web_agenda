import Router from "./routes/router"
import style from "./style"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <div className={`${style.flexCenter}`}>
      <Toaster position="top-right" />
      <Router/>
    </div>
  )
}

export default App