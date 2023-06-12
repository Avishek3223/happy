import react from 'react';
import Nav from '../Components/NavBar';

const Error = () =>{
    return(
        <div className="">
        <Nav />
        <div className="h-screen  flex items-center justify-center flex-col">
            <h1 className="text-[8rem] text-center font-Roboto">404 Page Not Found</h1>
            <p className="text-[2rem] ">Oops! The page you are looking for does not exist.</p>
            <p className="">Please check the URL or go back to the homepage.</p>
        </div>
        
        </div>
    )
};

export default Error;