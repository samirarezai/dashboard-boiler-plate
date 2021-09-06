import React from 'react';
import {Avatar, Button} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
// import InputSize from "publicComponent/inputSize";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: '80px',
        height: '80px',
        display: 'inline-block'
    },
}));

const UploadImage = (props) => {
    const {titlePhoto} =props;
    const classes = useStyles();
    return (

            <div className="col-12 col-xl-6 mb-5 mb-md-4">
                <div className="d-flex align-items-center justify-flex-start flex-column flex-md-row align-items-md-end">
                    <Avatar className={classes.avatar} variant="rounded" children="" alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"/>
                    <Button variant="outlined" color="primary" className="mx-md-3 mt-3">
                        {titlePhoto}
                    </Button>
                    <Button
                        className="mt-3"
                        variant="outlined"
                        color="secondary"
                        startIcon={<DeleteIcon/>}
                    >
                        Delete
                    </Button>
                </div>
            </div>


    );
};

export default UploadImage;
