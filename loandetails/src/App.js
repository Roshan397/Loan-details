import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import LoanDetails from './components/LoanDetail';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';
import GetLoan from './components/GetLoan';
import EditLoan from './components/EditLoan';
import DeleteLoan from './components/DeleteLoan';

function App() {
  return (
    <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/Home" element={<Home/>} />
     <Route path="/user/viewLoan/:id" element={<Search/>} />
     <Route path="/usersignup" element={<SignUp/>} />
     <Route path="/userldet" element={<LoanDetails/>} />
     <Route path="/usercdet" element={<GetLoan/>} />
     <Route path="/userupdate" element={<EditLoan/>} />
     <Route path="/userdelete" element={<DeleteLoan/>} />
    </Routes>
  );
}

export default App;
