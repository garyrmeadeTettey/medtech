import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Records from "./pages/records/Records";
import Register from "./pages/register/Register";
import Dochome from "./pages/dochome/Dochome";
import Docrecords from "./pages/docrecords/Docrecords";
import Adminhome from "./pages/adminhome/Adminhome";
import Adminrecords from "./pages/adminrecords/Adminrecords";
import Calender from "./pages/calender/Calender";
import Admincalender from "./pages/calender/Admincalender";
import Doccalender from "./pages/calender/Doccalender";
import Admin from "./components/datatable/Admin";
import Personal from "./components/datatable/Personal";
import Prescription from "./components/datatable/Prescription";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/personal" element={<Personal />} />

          {/* Routes for the doctors pipeline */}
          <Route>
            <Route path="/dochome" element={<Dochome />} />
            <Route path="/docrecords" element={<Docrecords />} />
            <Route path="/doccalender" element={<Doccalender />} />
            <Route path="/prescription" element={<Prescription />} />
          </Route>
          {/* Routes for the admin pipeline */}
          <Route>
            <Route path="/adminhome" element={<Adminhome />} />
            <Route path="/adminrecords" element={<Adminrecords />} />
            <Route path="/admincalender" element={<Admincalender />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          {/* Routes for the patient pipeline */}
            <Route path="users">
              <Route index element={<Admin />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New Patient" />}
              />
            </Route>
            {/* Routes for the records pipeline */}
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="records" >
              <Route index element={<Records />} title="Medical Records Overview" />
            </Route>

            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
