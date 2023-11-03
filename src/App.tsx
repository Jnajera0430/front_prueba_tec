import { ToastContainer } from "react-toastify";
import FormUser from "./components/FormUser";
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import DataTable from "./components/DataTable";
function App() {
  return (
    <>
    <ToastContainer />
      <div className="main">
        <div className="form">
          <FormUser />
        </div>
        <div className="table">
          <DataTable />
        </div>
      </div>
    </>
  )
}

export default App
