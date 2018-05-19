import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Landing from './layouts/Landing';
import Footer from './layouts/Footer';
import '../styles/App.css';
import Register from './auth/Register';
import Login from './auth/Login';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
