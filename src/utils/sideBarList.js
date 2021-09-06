import InboxIcon from "@material-ui/icons/MoveToInbox";
import DashboardIc from "@material-ui/icons/Dashboard";
import UsersIc from "@material-ui/icons/People";
import PersonIc from "@material-ui/icons/Person";
import GroupIc from "@material-ui/icons/Group";
import AccountCircleIc from "@material-ui/icons/AccountCircle";


export default [
    { path: "/dashboard", name: "Dashboard", loginRequired: false,IconNav:DashboardIc,children:null},
    { path: "/profile", name: "Profile", loginRequired: false,IconNav:AccountCircleIc,children:null},
    { path: "/users", name: "Users", loginRequired: false,IconNav:UsersIc,
        children:[
            // { path: "", name: "", loginRequired: false},
            { path: "/client", name: "Client", loginRequired: false,IconNav:PersonIc},
            { path: "/paliz", name: "Paliz", loginRequired: false,IconNav:GroupIc},
        ]
    },
]
