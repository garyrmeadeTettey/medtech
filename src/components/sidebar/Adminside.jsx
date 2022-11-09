import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Adminside = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/adminhome" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Patients</span>
            </li>
          </Link>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Doctors</span>
            </li>
          </Link>
          <Link to="/adminrecords" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>Records</span>
          </li>
          </Link>
          
          <p className="title">USEFUL</p>
          <Link to="/admincalender"style={{ textDecoration: "none" }}>
            <li>
                <InsertChartIcon className="icon" />
                <span>Calender</span>
            </li>
          </Link>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notification Board</span>
          </li>
          <p className="title">OPERATIONS</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Medecine Delevery Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <ExitToAppIcon className="icon" />
            <span >Logout</span>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Adminside;
