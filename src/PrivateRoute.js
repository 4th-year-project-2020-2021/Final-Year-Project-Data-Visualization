import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [logged] = useAuth();
  
    return <Route {...rest} render={(props) => (
      logged
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
}