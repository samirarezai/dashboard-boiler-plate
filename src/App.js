import routes from 'utils/routes';
import Layout from "./publicComponent/layout";
import {BrowserRouter, Redirect, Route, Router, Switch} from "react-router-dom";
import constant from "utils/constant"
import Profile from "pages/profile";
import ThemPro from "publicComponent/themPro";
import NotFound from "pages/notFound";
function App() {
const isLoggedIn =false;
    return (
        <div className="text-primary">
            <BrowserRouter basename={`${constant.PREFIX}`} forceRefresh={false}>

                {isLoggedIn ?
                    <Route>
                        <Switch>
                            <Route>
                                <ThemPro><Profile/></ThemPro>
                            </Route>
                        </Switch>
                    </Route>
                    :
                    <>
                        {routes.map(({path, children, name}, index) => {

                            return (<Route path={path} key={index}>
                                <Switch>
                                    {
                                        children.map(({path: pathChild, Component, name: nameChild}, i) => {
                                                let list = [{name, path}]
                                                if (nameChild) {
                                                    list.push({name: nameChild, path: pathChild})
                                                }
                                                return <Route exact path={`${path}${pathChild}`} key={'child' + i}
                                                              render={props => <Layout
                                                                  breadCrumbName={list} {...props} ><Component {...props} /></Layout>}/>
                                            }
                                        )
                                    }
                                </Switch>
                            </Route>)
                        })}
                        <Route path="*" render={props => <NotFound {...props} />}/>
                    </>
                }

            </BrowserRouter>

        </div>
    );
}

export default App;
