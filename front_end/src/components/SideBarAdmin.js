import React from "react";
import { Link } from 'react-router-dom';

function SideBarAdmin() {

    return (

        <ul className="nav flex-column">
            {/* <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Change Language</a></li>
            <li className="nav-item"><Link className="nav-link" to="/admin/users">Manage User</Link></li>
            <li className="nav-item">     <Link className="nav-link" to="/admin/listovertime">Manage OverTime</Link> </li>
            <li className="nav-item">      <Link className="nav-link" to="/admin/listoffice">Manage Office</Link> </li>
            <li className="nav-item">     <Link className="nav-link" to="/admin/listassigncars">Assign Car</Link> </li>
            <li className="nav-item">     <Link className="nav-link" to="/admin/listcars">Manage Cars</Link> </li> */}


            <li className="nav-item">     <Link className="nav-link" to="/admin/brand/create">Create Brand</Link> </li>
            <li className="nav-item">     <Link className="nav-link" to="/admin/brand/manage">Manage Brands</Link> </li>
            <li className="nav-item">     <Link className="nav-link" to="/admin/vehicle/create">Post a vehicle</Link> </li>
            <li className="nav-item">     <Link className="nav-link" to="/admin/vehicle/manage">Manage Vehicles</Link> </li>
            <li className="nav-item">     <Link className="nav-link" to="/admin/booking/manage">Manage Bookings</Link> </li>

        </ul>
    )

}


export default SideBarAdmin;