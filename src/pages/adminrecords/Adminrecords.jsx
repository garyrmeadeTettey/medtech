import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Adminside from "../../components/sidebar/Adminside";

const Adminrecords = () => {
  return (
    <div className="list">
      <Adminside/>
      <div className="listContainer">
        <Navbar/>
        <h2>Administrative Records for Patients</h2>
        <Datatable/>
        <h2>Employment Records for Doctors</h2>
        <Datatable/>
      </div>
    </div>
  )
}

export default Adminrecords