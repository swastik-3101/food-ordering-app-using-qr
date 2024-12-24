import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import NavbarComponent from './Components/Navbar.jsx';
import AdminNavbar from './Components/AdminNavbar.jsx';
import Home from './Pages/Home.jsx';
import Menu from './Pages/Menu.jsx';
import Cart from './Pages/Cart.jsx';
import Login from './Pages/Login.jsx';
import AdminDashboard from './Pages/admin/Dashboard.jsx';
import OrderManagement from './pages/admin/OrderManagement';
import MenuManagement from './Pages/admin/MenuManagement.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  var isAdmin = window.location.pathname.startsWith('/admin');
  isAdmin=false;
  console.log('isAdmin:', isAdmin); // Add this to check the value

  return (
    
    <BrowserRouter>
      <CartProvider>
        <div className="app">
          {isAdmin ? <AdminNavbar /> : <NavbarComponent />}
          <Routes>
            {/* Customer Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/orders" element={<OrderManagement />} />
            <Route path="/admin/menu" element={<MenuManagement />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;