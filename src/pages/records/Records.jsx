// import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Records = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
        <Button variant="outlined" color="success" className='btn-1'>
            <Link to="/dochome">Back to Dashboard</Link>

        </Button>
      </div>
    </div>
  )
}

export default Records