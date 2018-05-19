import React from 'react';
import Navbar from './layouts/Navbar';
import Landing from './layouts/Landing';
import Footer from './layouts/Footer';
import '../styles/App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Landing />
                <Footer />
            </div>
        );
    }
}

export default App;
