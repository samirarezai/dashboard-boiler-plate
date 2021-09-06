import React from 'react';
import ThemPro from "publicComponent/themPro";
import Image from "images/404/404-error.svg"
import {Link} from "react-router-dom";
import HomeIc from "@material-ui/icons/Home";

const NotFount = (props) => {
    console.log(props)
    return (<>
        {(props.location.state===undefined && props.location.pathname !=="/") &&
    <ThemPro>
        <div className="d-flex align-items-center justify-content-center w-100" style={{height: '100vh'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8 text-center">
                        <img src={Image} alt="404" className="img-fluid" style={{maxWidth: '300px'}}/>
                        <h1 className="text-secondary">Page Not Found</h1>
                        <Link to="/" color="primary" className="d-flex align-items-center justify-content-center mt-4">
                            <HomeIc color="primary"/>
                            <span className="px-2"> Back To Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </ThemPro>
}</>
    );
};

export default NotFount;
