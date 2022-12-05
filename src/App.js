import HeaderComponent from "./Components/HeaderComponent";
import ReduxListv2 from "./Components/ReduxListv2";
import './App.css';
import {BrowserRouter as Router, Route, Routes }  from 'react-router-dom';
import ListDisplay from "./Components/ListDisplay";

function App() {

  return (
    <div id='root'>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route exact path='/todolist3' element={<ListDisplay />}></Route>
          <Route path='/todolist3/react' element={<ListDisplay />}></Route>
          <Route path='/todolist3/redux' element={<ReduxListv2 />}></Route>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
