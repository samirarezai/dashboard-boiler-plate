import React from 'react';
import {Link} from "react-router-dom";
import SimpleCard from "components/dashboard/card";

const Dashboard = () => {
    return (
        <div className="row">
                {
                        [1,2,3,4].map((item,i)=><SimpleCard key={i}/>)
                }
        </div>
    );
};

export default Dashboard;
