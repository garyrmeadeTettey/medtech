import React from 'react'

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Adminside from "../../components/sidebar/Adminside";
import Doctors from '../../components/datatable/Doctors';

const Adminhome = () => {
  return (
    <div className="home">
      <Adminside />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <h2>Admin Dashboard</h2>
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months Visits" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">Latest Patients</div>
          <Table />
          
        </div>
        <div>
          <h2>Doctors</h2>
          <Doctors />
        </div>
      </div>
    </div>

  )
}

export default Adminhome
