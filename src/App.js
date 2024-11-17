import './App.css';
import ParentComponent from './components/ParentComponent';
import ThemeSwitcher from './ThemeSwitcher';
import ThemeComponent from './ThemeComponent';
import ThemeProvider from './ThemeContext';
import AuthProvider from './AuthContext';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import CartProvider from './CartContext';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ThemeComponent>
          <div className="App">
            <ThemeSwitcher />
            <h2>React App</h2>
            <ParentComponent />

            <h2>Authentication App</h2>
            <Login />
            <UserProfile />
            <Dashboard />

            <CartProvider>
              <h2>Shopping Cart app</h2>
              <ProductList />
              <ShoppingCart />
            </CartProvider>
          </div>
        </ThemeComponent>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
