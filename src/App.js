import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import './App.css';
import ScrumBoard from "./components/ScrumBoard/ScrumBoard";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <header>

                    </header>
                    <ScrumBoard/>
                    <footer>

                    </footer>
                </Container>
            </div>
        );
    }
}

export default App;
