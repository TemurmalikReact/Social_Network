import { Fragment, lazy, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { compose } from "redux";
import { Provider, connect } from "react-redux";
import { initializeApp } from "./redux/reducers/app-reducer";
import { getInitialized } from "./redux/selectors/app-selectors";
import Preloader from "./components/Common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar"
import LoginPage from "./components/Pages/LoginPage/LoginPage";
import WithSuspense from "./components/hoc/WithSuspense";
const ProfilePageContainer = lazy(() => 
  import("./components/Pages/ProfilePage/ProfilePageContainer"));
const UsersPageContainer = lazy(() => 
  import("./components/Pages/UsersPage/UsersPageContainer"));
const MessagesPageContainer = lazy(() => 
  import("./components/Pages/MessagesPage/MessagesPageContainer"));

const App = ({initializeApp, initialized}) => {
  const [ isClosed, setClosed ] = useState(false)
  const toggleNavbar = () => setClosed(prev => !prev)

  useEffect(() => initializeApp(), [initialized])

  if (!initialized) return <Preloader />
  return (
    <Fragment> 
      <HeaderContainer toggleNavbar={toggleNavbar} />
      <Navbar isClosed={isClosed} />
      <Switch> 
        <Route path="/profile/:id?" render={ WithSuspense(ProfilePageContainer) } />
        <Route path="/messages" render={ WithSuspense(MessagesPageContainer) } />
        <Route path="/users" render={ WithSuspense(UsersPageContainer) } />
        <Route path="/login" render={() => <LoginPage /> } />
      </Switch>
    </Fragment>
  )
}

const mapStateToProps = state => ({ initialized: getInitialized(state) })

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);  

const SocialNetworkApp = () => 
  <BrowserRouter>
    <Provider store={store}> <AppContainer /> </Provider>
  </BrowserRouter> 

export default SocialNetworkApp;
