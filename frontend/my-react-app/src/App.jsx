import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuProvider } from './contexts/MenuContext';
import { CartProvider } from './contexts/CartContext';
import TableMenu from './Pages/TableMenu';
import TableCart from './Pages/TableCart';
import AdminDashboard from './Pages/admin/Dashboard';
import OrderManagement from './Pages/admin/OrderManagement';
import MenuManagement from './Pages/admin/MenuManagement';
import TableLogin from './pages/TableLogin';
import AdminNav from './components/AdminNav';

const App = () => {
  const isAdmin = window.location.pathname.startsWith('/admin');

  return (
    <BrowserRouter>
      <MenuProvider>
        <CartProvider>
          {isAdmin && <AdminNav />}
          <Routes>
            {/* Table Routes */}
            <Route path="/table/:tableId" element={<TableLogin />} />
            <Route path="/table/:tableId/menu" element={<TableMenu />} />
            <Route path="/table/:tableId/cart" element={<TableCart />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/orders" element={<OrderManagement />} />
            <Route path="/admin/menu" element={<MenuManagement />} />
          </Routes>
        </CartProvider>
      </MenuProvider>
    </BrowserRouter>
  );
};

export default App;