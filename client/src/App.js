import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Form from './components/Form';
import GetStudents from './components/GetStudents';

export default function App(props) {
  return(
    <Router>
      <div className='app'>
        <Routes>
          <Route path={'/'} element={
            <div>
              <Form />
              <GetStudents />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}
