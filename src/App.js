
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/post/:postId' element={<PostDetails></PostDetails>}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
