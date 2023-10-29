import DataTableComponent from "./components/DataTable";
import FormUser from "./components/FormUser";
import './index.css'
function App() {
  return (
    <>
      <div className="main">
        <div className="form">
          <FormUser />
        </div>
        <div className="table">
          <DataTableComponent />
        </div>
      </div>
    </>
  )
}

export default App
