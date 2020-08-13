import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SideBarAdmin from './components/SideBarAdmin';
import ListUser from './components/admin/user/ListUser';
import AddUser from './components/admin/user/AddUser';
import DetailsUser from './components/admin/user/DetailsUser';
import UpdateUser from './components/admin/user/UpdateUser';
import AddOverTime from './components/admin/overtime/AddOverTime';
import ListOverTime from './components/admin/overtime/ListOverTime';
import AddOffice from './components/admin/office/AddOffice';
import ListOffice from './components/admin/office/ListOffice';
import UpdateOffice from './components/admin/office/UpdateOffice';
import AssignCar from './components/admin/assigncars/AssignCar';
import ListAssignCar from './components/admin/assigncars/ListAssignCar';
import ListCars from './components/admin/managecars/ListCars';
import AddCar from './components/admin/managecars/AddCar';
import AddBrand from './components/admin/brand/addbrand';
import ManageBrand from './components/admin/brand/managebrand';
import EditBrand from './components/admin/brand/editbrand';
import AddVehicle from './components/admin/vehicle/addvehicle';
import ListVehicle from './components/admin/vehicle/managevehicle';
import UpdateVehicle from './components/admin/vehicle/updateVehicle';
import BookingList from './components/admin/booking/list';
import TestimonialList from './components/admin/testimonials/list';
import ContactUs from './components/admin/contactus/list';
import RegUsers from './components/admin/regusers/list';
import PagesForm from './components/admin/pages/list';
import Contactinfo from './components/admin/contactinfo';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">

{/* navigation starts */}
          <div className="row">
            <div className="col-md-12">
              <Header></Header>
            </div>
          </div>
{/* navigation  ends */}

          <Switch>
            <Route path="/login">
              <div className="row">
              <div className="col-md-6">
                {/* <Register></Register> */}
              </div>
              <div className="col-md-6">
                <Login />
              </div>
            </div>
            </Route>

{/* Brand Route starts */}    
            <Route path="/admin/brand/create">
              <div className="row">
                  <div className="col-md-3">
                    <SideBarAdmin />
                  </div>

                  <div className="col-md-9">
                    <AddBrand />
                  </div>
              </div>
            </Route>

            <Route path="/admin/brand/manage/edit/:id">
              <div className="row">
                  <div className="col-md-3">
                    <SideBarAdmin />
                  </div>

                  <div className="col-md-9">
                    <EditBrand />
                  </div>
              </div>
            </Route>
            

            <Route path="/admin/brand/manage">
              <div className="row">
                  <div className="col-md-3">
                    <SideBarAdmin />
                  </div>

                  <div className="col-md-9">
                    <ManageBrand />
                  </div>
              </div>
            </Route>


{/* Brand Route ends */}    

{/* Vehicle add Route start */}    

            <Route path="/admin/vehicle/create">
              <div className="row">
                  <div className="col-md-3">
                    <SideBarAdmin />
                  </div>

                  <div className="col-md-9">
                    <AddVehicle />
                  </div>
              </div>
            </Route>

{/* Vehicle add Route ends */}    

{/* Vehicle edit Route start */}    

<Route path="/admin/vehicle/manage/edit/:id">
              <div className="row">
                  <div className="col-md-3">
                    <SideBarAdmin />
                  </div>

                  <div className="col-md-9">
                    <UpdateVehicle />
                  </div>
              </div>
            </Route>

{/* Vehicle  edit Route ends */}    

{/* Vehicle list Route start */}    

          <Route path="/admin/vehicle/manage">
              <div className="row">
                  <div className="col-md-3">
                    <SideBarAdmin />
                  </div>

                  <div className="col-md-9">
                    <ListVehicle />
                  </div>
              </div>
            </Route>

{/* Vehicle  list Route ends */}    

{/* booking manage Route start */}    
      <Route path="/admin/booking/manage">
          <div className="row">
              <div className="col-md-3">
                <SideBarAdmin />
              </div>
              <div className="col-md-9">
                <BookingList />
              </div>
          </div>
        </Route>

{/*  booking manage Route end */}    

{/* Testimonials manage Route start */}    
<Route path="/admin/testimonials/manage">
          <div className="row">
              <div className="col-md-3">
                <SideBarAdmin />
              </div>
              <div className="col-md-9">
                <TestimonialList />
              </div>
          </div>
        </Route>

{/*  Testimonials manage Route end */}    


{/* Contact manage Route start */}    
<Route path="/admin/contact/manage">
          <div className="row">
              <div className="col-md-3">
                <SideBarAdmin />
              </div>
              <div className="col-md-9">
                <ContactUs />
              </div>
          </div>
        </Route>

{/*  Contact manage Route end */}    



{/* Reg users manage Route start */}    
<Route path="/admin/regusers/manage">
          <div className="row">
              <div className="col-md-3">
                <SideBarAdmin />
              </div>
              <div className="col-md-9">
                <RegUsers />
              </div>
          </div>
        </Route>

{/*   Reg users manage Route end */}  

{/* Reg users manage Route start */}    
<Route path="/admin/pages/manage">
          <div className="row">
              <div className="col-md-3">
                <SideBarAdmin />
              </div>
              <div className="col-md-9">
                <PagesForm />
              </div>
          </div>
        </Route>

{/*   Reg users manage Route end */}    

{/* Reg users manage Route start */}    
<Route path="/admin/contactinfo">
          <div className="row">
              <div className="col-md-3">
                <SideBarAdmin />
              </div>
              <div className="col-md-9">
                <Contactinfo />
              </div>
          </div>
        </Route>

{/*   Reg users manage Route end */}    

            <Route path="/admin">
              <div className="row">
                  <div className="col-md-3">
                    <SideBarAdmin />
                  </div>

                  <div className="col-md-9">
                    <Dashboard />
                  </div>
              </div>
            </Route>



            <Route path="/">
              <div className="row">
              <div className="col-md-6">
              </div>
              <div className="col-md-6">
                <Login />
              </div>
            </div>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
