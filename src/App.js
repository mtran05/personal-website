import * as REACT from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
    const [photos, setPhotos] = REACT.useState([]);

    REACT.useEffect( () => {
        console.log("hi");
    });
    
    return (
        <div className='App'>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
