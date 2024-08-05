import React, {useState} from 'react'
import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  const lightMode = {
    backgroundColor: 'white',
    color: 'black'
  };

 const darkMode = {
    backgroundColor: 'black',
    color: 'white'
 };

 const [styleMode, setStyleMode] = useState(lightMode);

 const toggleStyleMode = () => {
  setStyleMode((prevStyleMode) => 
      prevStyleMode === lightMode ? darkMode : lightMode
  );
};
 




  return (
    <div style={styleMode}>
    <button onClick={toggleStyleMode}>
        Switch to {styleMode === lightMode ? 'Dark' : 'Light'} Mode
    </button>
    <Header styleMode={styleMode} />
    <Content styleMode={styleMode} />
    <Footer styleMode={styleMode} />
</div>
  );
}

export default App;
