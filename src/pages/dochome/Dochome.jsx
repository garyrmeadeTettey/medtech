import React from 'react'
import './dochome.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Docside from "../../components/sidebar/Docside";


const Dochome = () => {
  return (
    <div className="home">
      <Docside />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <h2>Doctor's Dashboard</h2>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months Visits" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Patients</div>
          <Table />
          <iframe
 src="https://udify.app/chatbot/B0Ce5RzN9YcuY6NE"
 style="width: 100%; height: 100%; min-height: 700px"
 frameborder="0" 
 allow="microphone">
</iframe>
        </div>
      </div>
    </div>

  )
}

export default Dochome
