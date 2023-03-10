import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



const Admin = () => {
    const usenavigate = useNavigate();
    useEffect(() => {
        let username=sessionStorage.getItem('username');
        if(username==='' || username ===null){
            usenavigate('/login');
        }
    }, []);
    
    return (
        <div>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <Link style={{float:'right'}} to={'/login'}>Logout</Link>
            </div>
            <div>
                <Link to={'/adduser'}>AddUser</Link>
            </div>
            <h1 className="text-center">AdminDashboard</h1>
            <div>
                
            </div>
        </div>
    );
}

export default Admin;