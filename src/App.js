import './App.css';
import React, { useState} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";


 const App = (props) => {
 const apiKey = process.env.REACT_APP_NEWS_API ;
 const pageSize = 8;
  const [darkMode, setdarkMode] = useState(false);
  const [bgColor, setbgColor] = useState('light');
  const [text, settext] = useState('dark')

 const toggleDarkMode = () => {
    if(darkMode===true)
    {
      document.body.style.backgroundColor = '#e0e3e8';
      setdarkMode(false);
      setbgColor('light');
      settext('dark')
    }
    else
    if(darkMode===false)
    {
      document.body.style.backgroundColor = '#282c34';
      setdarkMode(true);
      setbgColor('dark');
      settext('light');
    }
  }
    return (
      <div>
        <BrowserRouter>
        <NavBar toggleDarkMode={toggleDarkMode} bgColor={bgColor} text={text}/>
      <Routes>
        <Route exact path="/" element={ <News bgColor={bgColor} key={'general'} pageSize={pageSize} apiKey={apiKey} country={'in'} category = {'general'} text={text}/>} />
        <Route exact path="business" element={ <News bgColor={bgColor} key={'business'} pageSize={pageSize} apiKey={apiKey} country={'in'} category = {'business'} text={text}/>} />
        <Route exact path="entertainment" element={ <News bgColor={bgColor} key={'entertainment'} pageSize={pageSize} apiKey={apiKey} country={'in'} category = {'entertainment'} text={text}/>} />
        <Route exact path="health" element={ <News bgColor={bgColor} key={'health'} pageSize={pageSize} apiKey={apiKey} country={'in'} category = {'health'} text={text}/>} />
        <Route exact path="science" element={ <News bgColor={bgColor} key={'science'} pageSize={pageSize} apiKey={apiKey} country={'in'} category = {'science'} text={text}/>} />
        <Route exact path="sports" element={ <News bgColor={bgColor} key={'sports'} pageSize={pageSize} apiKey={apiKey} country={'in'} category = {'sports'}  text={text}/>} />
        <Route exact path="technology" element={ <News bgColor={bgColor} key={'technology'} pageSize={pageSize} apiKey={apiKey} country={'in'} category = {'technology'} text={text}/>} />
      </Routes>
    </BrowserRouter>
      </div>
    )
}
export default App;