import React from 'react';
import {Card, CardContent} from "@material-ui/core";
import TableCustom from "components/shipingCompany/table";

const Index = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <TableCustom/>
                </CardContent>
            </Card>
        </div>
    );
};

export default Index;
