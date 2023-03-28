import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import CreateBook from './components/CreateBook';
import UpdateBookInfo from './components/UpdateBookInfo';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBookList from './components/ShowBookList';
// import HomePage from './components/HomePage';



function App() {
  return (
   <Router>
    <div>
      <Routes>
        
      {/* <Route path="/" exact element={<HomePage/>}/> */}
      <Route path="/" exact element={<ShowBookList/>}/>
        <Route path="/create-book" element={<CreateBook />} />
        <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
        <Route path="/show-book/:id" element={<ShowBookDetails/>} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
