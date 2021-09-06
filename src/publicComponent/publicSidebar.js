import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import ListItemText from "@material-ui/core/ListItemText";
import ListNav from "utils/sideBarList";
import {makeStyles} from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {handleActiveLink} from "redux/pages/action";
import ChildSidBar from "publicComponent/childSidBar";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, ##0F1A34 30%, #FF8E53 90%)',
        height:'100vh',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    link: {
        color: "#282626",
        textDecoration: "none"
    },
    active: {
        color: theme.palette.primary.main,
    },
}));
const PublicSidebar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [click, setClick] = React.useState(false);

    const handleClick = (name) => {
        dispatch(handleActiveLink(name))
    };
    return (<>

            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                {ListNav.map(({IconNav, name, children, path}, index) =>
                    children ?
                        <ChildSidBar IconNav={IconNav} name={name} children={children} path={path} index={index} click={click}/>
                        :
                        <NavLink to={path} className={`${classes.link} link-custom`}
                                 activeClassName={`${classes.active} link-active-custom`}
                                 onClick={() => {
                                     handleClick(name)
                                     setClick(!click)
                                 }}><ListItem button key={index}>
                            <ListItemIcon>
                                <IconNav color="Primary"/>
                            </ListItemIcon>
                            <ListItemText primary={name}/>
                        </ListItem></NavLink>
                )
                }
            </List>
        </>
    );
};

export default PublicSidebar;
// <List>
//     {ListNav.map(({IconNav,name}, index) => (
//         <ListItem button key={name}>
//             <ListItemIcon><IconNav/></ListItemIcon>
//             <ListItemText primary={name}/>
//         </ListItem>
//     ))}
//
// </List>
