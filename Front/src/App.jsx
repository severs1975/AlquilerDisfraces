import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Admin from './Routes/Admin'
import AddProduct from './Routes/AddProduct'
import { useEffect, useState } from 'react'
import Detail from './Routes/Detail'
import Detail2 from './Routes/Detail2'
import Register from './Routes/Register'
import AdminCaracteristicas from './Routes/AdminCaracteristicas'
import Login from './Routes/Login'
import AdminFilter from './Routes/AdminFilter'
import Perfil from './Routes/Perfil'
import AdminPrivilegios from './Routes/AdminPrivilegios'
import UserFilter from './Routes/UserFilter'
import UserFilter2 from './Routes/UserFilter2'
import { UserProvider } from './UserContext'
import Buscador from './Components/Home/Buscador';

function App() {

const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = 'https://script.google.com/macros/s/AKfycby68nFVpGDO4lUtUfi3SXg2qICKgcCDOwfIzywVgU6jaLB7OybUb5B_a4DTGvFYMxyx/exec?action=getProduct';
        
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchProducts();
  }, []);


//useEffect(()=>{console.log(products)},[products]);

//console.log(products);
const handleAddProduct = (newProduct) => {
//console.log('Nuevo producto:', newProduct);
//setProducts([...products, newProduct]);
};

return (
  <UserProvider>
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home products={products} onAddProduct={handleAddProduct}/>} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/card/:id" element={<Detail products={products} />} />
      
      <Route
        path="/admin/AddProduct"
        element={<AddProduct products={products} setProducts={setProducts} onAddProduct={handleAddProduct} />}
      />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Admin/AdminCaracteristicas" element={<AdminCaracteristicas/>} />
      
      <Route path="/adminFilter" element={<AdminFilter/>} />
      <Route path="/userFilter" element={<UserFilter products={products} />} />
      <Route path="/userFilter2" element={<UserFilter2 products={products} />} />
      <Route path="/AdminPrivilegios" element={<AdminPrivilegios/>} />
      <Route path="/detail/:productId" element={<Detail products={products} />} />
      <Route path="/detail2/:productId" element={<Detail2 products={products} />} />
      <Route path='/Perfil' element={<Perfil products={products} />} />
      <Route path="/buscador" element={<Buscador />} />
      </Routes>
    <Footer />
  </div>
  </UserProvider>
);
}

export default App