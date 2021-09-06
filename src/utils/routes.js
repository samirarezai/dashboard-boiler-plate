import Dashboard from "pages/dashboard";
import Users from "pages/users";
import ClientUsers from "pages/users/client";
import PalizUsers from "pages/users/paliz";
import Profile from "pages/profile";

export default [
    { path: "/", name: "Dashboard", Component: Dashboard, loginRequired: false,
    children:[
        { path: "", name: "", Component: Dashboard, loginRequired: false},
        { path: "dashboard", name: "", Component: Dashboard, loginRequired: false},
    ]
    },
    { path: "/profile", name: "Profile", Component: Profile, loginRequired: false,
    children:[
        { path: "", name: "", Component: Profile, loginRequired: false},
    ]
    },
    { path: "/users", name: "Users", Component: Users, loginRequired: false,
        children:[
            // { path: "", name: "", Component: Users, loginRequired: false},
            { path: "/client", name: "Client", Component: ClientUsers, loginRequired: false},
            { path: "/paliz", name: "Paliz", Component: PalizUsers, loginRequired: false},
        ]
    },
    ]
