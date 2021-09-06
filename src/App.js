import routes from 'utils/routes';
import Layout from "./publicComponent/layout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import constant from "utils/constant"

function App() {

    return (
        <div className="text-primary">
            <BrowserRouter basename={`${constant.PREFIX}`} forceRefresh={false}>
                    {
                        routes.map(({path,children,name}, index) =>{

                       return <Route path={path} key={index}>
                           <Switch>
                    {
                        children.map(({ path :pathChild,Component,name:nameChild}, i) => {
                            let list =[{name,path}]
                            if(nameChild){
                                list.push({name:nameChild,path:pathChild})
                            }
                            return <Route exact path={`${path}${pathChild}`} key={'child'+i}><Layout breadCrumbName={list}><Component/></Layout> </Route>
                            }
                        )
                    }
                           </Switch>
                        </Route>}   )
                    }
            </BrowserRouter>

        </div>
    );
}

export default App;
