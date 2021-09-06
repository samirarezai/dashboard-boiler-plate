import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../theme/theme';
import PublicSidebar from "./publicSidebar";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {Box, Paper} from "@material-ui/core";
import PrimarySearchAppBar from "./publicMenu";
import HomeIcon from "@material-ui/icons/Home";
import {useDispatch, useSelector} from "react-redux";
import {handleMenu} from "redux/pages/action";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    appBar: {

        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {

        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        backgroundColor:"#0F1A34",
        color:'#fff',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {

        flexGrow: 1,
        padding: 0,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100vh'
    },
    contentFinal: {
        flexGrow: 1,
    },
    breadCrumb: {
        width: "100%",
    }
}));

export default function MiniDrawer(props) {
    const classes = useStyles();
    // const theme = theme;
    const dispatch = useDispatch();
    const {menuKey: open} = useSelector(state =>state.handleMenuReducer)

    const {children, breadCrumbName} = props;
    const setOpen = () => {
        dispatch(handleMenu())
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <PrimarySearchAppBar/>

                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose} color="Inherit">
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <PublicSidebar/>
                    {/*<Divider/>*/}
                    {/*<List>*/}
                    {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                    {/*        <ListItem button key={text}>*/}
                    {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
                    {/*            <ListItemText primary={text}/>*/}
                    {/*        </ListItem>*/}
                    {/*    ))}*/}
                    {/*</List>*/}
                </Drawer>

                <main className={classes.content}>

                    <div className={classes.toolbar}/>
                    <Paper square elevation={3}>
                        <Box p={1} px={3} className="bg-white w-100 breadCrumb-custom" position="fixed" height='35px'>
                            <Breadcrumbs className={classes.breadCrumb}
                                         separator={<NavigateNextIcon color="Primary" fontSize="small"/>}
                                         aria-label="breadcrumb">

                                {
                                    breadCrumbName.map((item, i, array) => (array.length - 1 == i) ?
                                        <Typography color="textPrimary" key={i}>{item.name}</Typography>
                                        :
                                        <Link color="inherit" href={item.path}  key={i}>
                                            {item.name}
                                        </Link>)
                                }
                            </Breadcrumbs>
                        </Box>
                    </Paper>
                    <Box p={3} px={3} className={`${classes.contentFinal} container-fluid`} mt='35px'>
                        {children}
                    </Box>

                </main>
            </div>
        </ThemeProvider>
    );
}
