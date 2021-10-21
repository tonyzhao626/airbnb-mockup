import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import RentalListing from "components/rental/rental-list/RentalListing";
import RentalSearchListing from "components/rental/rental-list/RentalSearchListing";
import RentalDetail from "components/rental/rental-detail/RentalDetail";
import RentalCreate from "components/rental/rental-create/RentalCreate";
import BookingManage from "components/booking/booking-manage/BookingManage";
import RentalManage from "components/rental/rental-manage/RentalManage";
import Register from "components/register/Register";
import Login from "components/login/Login";
import ProtectedRoute from "components/shared/auth/ProtectedRoute";
import LoggedInRoute from "components/shared/auth/LoggedInRoute";

import * as actions from "actions";

import "App.css";

const store = require("./reducers").init();

class App extends Component {
  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState() {
    store.dispatch(actions.checkAuthState());
  }

  logout() {
    store.dispatch(actions.logout());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/rentals" />} />
              <Route exact path="/rentals" component={RentalListing} />
              <Route
                exact
                path="/rentals/:city/homes"
                component={RentalSearchListing}
              />
              <ProtectedRoute
                exact
                path="/rentals/manage"
                component={RentalManage}
              />
              <ProtectedRoute
                exact
                path="/bookings/manage"
                component={BookingManage}
              />
              <ProtectedRoute
                exact
                path="/rentals/new"
                component={RentalCreate}
              />
              <Route exact path="/rentals/:id" component={RentalDetail} />
              <Route exact path="/login" component={Login} />
              <LoggedInRoute exact path="/register" component={Register} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
