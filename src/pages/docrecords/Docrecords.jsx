import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const Docrecords = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <h2>Medical Records for Patients</h2>
        <Datatable/>
      </div>
    </div>
  )
}

export default Docrecords