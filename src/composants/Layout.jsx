
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


function Layout(){

return(
 <div>
   <main>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
   </main>
 </div>
)


}
export default Layout