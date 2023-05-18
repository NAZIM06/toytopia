import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';


const Main = () => {
    return (
        <>
            <Header></Header>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer/>
            

        </>
    );
};

export default Main;