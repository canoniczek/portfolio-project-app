import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function AdminPanel() {


    const ShowUsers = () => {
        
    }

    return (
        <>
            <form action="" className="admin-form">
                <label htmlFor="email">Login</label>
                <input type="email" id="email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password"/>
                <button type="submit">Zaloguj się</button>
            </form>
        </>
    )
}


export default AdminPanel;