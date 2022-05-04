import './App.css';
import BookList from './components/BookList/BookList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetail from "./components/BookDetail/BookDetail";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<BookList />}   />
          <Route path='/BookDetail/:id' element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
