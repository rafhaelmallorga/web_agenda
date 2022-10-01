import Router from "./routes/router"
import style from "./style"

const App = () => {
  return (
    <div className={`${style.flexCenter}`}>
      <Router/>
    </div>
  )
}

export default App