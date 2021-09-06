import React from 'react';
import {Badge} from "@material-ui/core";

const PublicTitle = ({title}) => {
    return (
        <div>
            <Badge color="primary" variant="dot"/>
            <span className="d-inline-block ps-3">{title}</span>
        </div>
    );
};

export default PublicTitle;
