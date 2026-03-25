
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';





function Layout(){

return(
 <div>
   <main>
    <Navbar/>
    <Outlet></Outlet>
    <Toaster></Toaster>
    <Footer/>
    
   </main>
 </div>
)


}
export default Layout