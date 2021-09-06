import { Formik } from 'formik';
import React from 'react';
import {Button, FormControl, InputLabel, Select, TextField} from "@material-ui/core";
import InputSize from "publicComponent/inputSize";
import UploadImage from "components/profile/uploadImage";
import {makeStyles} from "@material-ui/styles";
import SignupSchema from "components/profile/validateForm";
import theme from 'theme/theme';
import profilePhoto from "images/icon/profile photo.svg"
import IdCartPhoto from "images/icon/idCart.svg"
const useStyles = makeStyles(() => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
        width:'100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const Form = () => {
    const classes = useStyles();
    return (
        <div className="mt-4">
            <div className="row align-items-end">
            <UploadImage titlePhoto="upload photo" imageStyle={{maxWidth:'70px'}} preImage={profilePhoto}/>
            <UploadImage titlePhoto="upload photo" imageStyle={{maxWidth:'150px'}} preImage={IdCartPhoto}/>
            </div>
            <Formik
                initialValues={{}}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <InputSize>
                            <TextField required id="standard-required" label="Forename" name="forename" onChange={handleChange} className="w-100"  />
                            </InputSize>

                            <InputSize>
                            <TextField required id="standard-required" label="Surname" name="surname" onChange={handleChange} className="w-100"  />
                            </InputSize>

                            <InputSize>
                            <TextField required id="standard-required" label="National Id" name="nationalId" onChange={handleChange} className="w-100"  />
                            </InputSize>

                            <InputSize>
                            <TextField id="standard-required" label="National Id Scan" name="nationalIdScan" onChange={handleChange} className="w-100"  />
                            </InputSize>

                            <InputSize>
                            <TextField id="standard-required" label="Company ID number" type="number" name="companyId" onChange={handleChange}  className="w-100"  />
                            </InputSize>

                            <InputSize>
                            <TextField required id="standard-required"  label="Mobile number" name="mobile" onChange={handleChange}  className="w-100"  />
                                {errors.mobile && touched.mobile ? (
                                    <div className="text-danger">{errors.mobile}</div>
                                ) : null}
                            </InputSize>

                            <InputSize>
                                <FormControl required className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Segment</InputLabel>
                                <Select
                                    native
                                    // value={state.age}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'segment',
                                        id: 'age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                            </InputSize>

                            <div className="col-12">
                                <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                            </div>
                        </div>

                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Form;
