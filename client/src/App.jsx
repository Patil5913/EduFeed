import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'


import { Outlet } from 'react-router-dom';
// import Login from './pages/login/Login.jsx'
// import Register from './pages/login/Register.jsx'
function App() {
  return (
    <main className='md:h-screen flex flex-col justify-between'>
      
      <Header />
      <Outlet/>
      <Footer />
     
    </main>
  );
}

export default App;
