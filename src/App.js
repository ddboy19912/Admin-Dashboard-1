import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from './Pages/User/User';
import NewUser from './Pages/NewUser/NewUser'
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/newProduct/NewProduct"

function App() {
  return (
    <Router className="App">
<Topbar />
<div className="container">
  <Sidebar />
  <Routes>
  <Route exact path="/" element={<Home/>}/>
 <Route exact path="/users" element={<UserList/>}/>
 <Route exact path="/users/:userId" element={<User/>}/>
 <Route exact path="/newUser" element={<NewUser/>}/>
 <Route exact path="/products" element={<ProductList/>}/>
 <Route exact path="/products/:productId" element={<Product/>}/>
 <Route exact path="/newProduct" element={<NewProduct />}/>
</Routes>
</div>
    </Router>
  );
}

export default App;
