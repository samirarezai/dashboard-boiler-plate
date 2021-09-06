import React, {useEffect} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {NavLink} from "react-router-dom";
import {handleActiveLink} from "redux/pages/action";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
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
const ChildSidBar = (props) => {
    const classes = useStyles();
    const {IconNav, name, children, path, index,click} = props;
    const dispatch = useDispatch();
    const {active_link} = useSelector(state => state.handleMenuReducer)
    const [open, setOpen] = React.useState(name === active_link);

    const handleClick = (name) => {
        dispatch(handleActiveLink(name))
    };
    useEffect(() => {
        if (name === active_link)
            setOpen(true)
        else
            setOpen(false)
    }, [active_link,click])
    return (
        < >
            <ListItem button key={index} onClick={() => setOpen(!open)} className={`${classes.link} link-custom`} >
                <ListItemIcon>
                    <IconNav color="Primary"/>
                </ListItemIcon>
                <ListItemText primary={name}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        children.map(({IconNav: IconNavChild, name: nameChild, path: pathChild}, i) =>
                            <NavLink to={`${path}${pathChild}`} className={`${classes.link} link-custom`} key={i}
                                     onClick={() => {
                                         handleClick(name)
                                     }}
                                     activeClassName={`${classes.active} link-active-custom`}> <ListItem
                                key={nameChild + i} button className={classes.nested}>
                                <ListItemIcon>
                                    <IconNavChild fontSize="Small"/>
                                </ListItemIcon>
                                <ListItemText primary={nameChild}/>
                            </ListItem></NavLink>)
                    }
                </List>
            </Collapse>
        </>
    );
};

export default ChildSidBar;
