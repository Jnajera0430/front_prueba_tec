import { ToastContainer } from "react-toastify";
import DataTableComponent from "./components/DataTable";
import FormUser from "./components/FormUser";
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer />
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
