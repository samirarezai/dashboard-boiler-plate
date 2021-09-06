import React from 'react';
import { Card, CardContent, CardHeader} from "@material-ui/core";
import PublicTitle from "publicComponent/publicTitle";
import Form from "components/profile/form";

const Index = (props) => {
    return (
        <Card>
            <CardHeader subheader="Profile" className="border-bottom"/>
            <CardContent>
                <PublicTitle title="Information"/>
                <Form/>
            </CardContent>
        </Card>
    );
};

export default Index;
