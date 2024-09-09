import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInUser } from "./supabase/supabase";
import { useRef } from "react";
import { useAuth } from "./supabase/authHook";
import { signIn } from "./supabase/authSlice";
import { Navigate } from "react-router-dom";

function AdminPanel() {

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const formRef = useRef();
    const isAuth = useAuth();
    const dispatch = useDispatch();

    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const values = {
          username: emailRef.current.value,
          password: passwordRef.current.value
        }
    
        const {data, error} = await signInUser(values);
    
        console.log(values);
    
        if (error) {
          console.error(error);
          alert('Tego maila nie ma w bazie')
          navigate("/admin");
          return;
        }
    
        dispatch(signIn(data))
    
      }


      const submitForm = () => {
        if (formRef.current) {
          formRef.current.requestSubmit();
        }
      }

      if (isAuth) {
        return <Navigate to="/users-list" />
      }
    return (
        <>
            <form action="" className="admin-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Login</label>
                <input type="email" id="email" ref={emailRef}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password"ref={passwordRef}/>
                <button type="submit" onClick={submitForm}>Zaloguj się</button>
            </form>
        </>
    )
}


export default AdminPanel;