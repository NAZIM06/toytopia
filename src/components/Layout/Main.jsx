import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';


const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer />
        </>
    );
};

export default Main;