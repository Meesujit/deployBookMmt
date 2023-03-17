import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CreateBook from './components/CreateBook';
import UpdateBookInfo from './components/UpdateBookInfo';
import ShowBookDetails from './components/ShowBookDetails';


function App() {
  return (
   <Router>
    <div>
      <Routes>
      <Route exact path="/" element={<ShowBookDetails/>}/>
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
        <Route path="show-book/:id" element={<ShowBookDetails/>} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
