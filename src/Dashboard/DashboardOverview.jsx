import {React } from 'react';
import {Link} from 'react-router-dom'

const DashboardOverview = ()=>{
    return(
        <div>
            <h1>Dashboard Overview</h1>
            <Link to="/dashboard/edit">Edit</Link>
        </div>
    )
}

export default DashboardOverview;