import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";

const Main = () => {

    
  const location = useLocation()
  console.log(location)
  const noFooter = location.pathname.includes('mindmap') || location.pathname.includes('gantt') || location.pathname.includes('timeline') || location.pathname.includes('roadmap')

    useEffect(() => {
        Aos.init({
          disable: 'mobile',
        })
      }, [])
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </>
    );
};

export default Main;