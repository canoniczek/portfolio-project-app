
// import './components/main.scss';

import { useNavigate, Navigate } from "react-router-dom";
import { signInUser } from "./supabase/supabase";
import { useRef } from "react";
import { useAuth } from "./supabase/authHook";

function SignIn() {

  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const formRef = useRef();

  const isAuth = useAuth();

  const handleRegister = () => {
    navigate('/sign-up');
  }

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
      navigate("/home");
      return;
    }

  }

    const submitForm = () => {
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }


  
    if (isAuth) {
      return <Navigate to="/home" />;
    }
  

    return (
      <>
        <nav className="header">
          <ul className="up-menu-section">
              <li><a href="#">Zaloguj się</a></li>
              <li><a href="#">Załóż konto</a></li>
          </ul>
          <ul className="down-menu-section">
              <li><a href="#">Start</a></li>
              <li><a href="#">O co chodzi?</a></li>
              <li><a href="#">O nas</a></li>
              <li><a href="#">Fundacja i organizacje</a></li>
              <li><a href="#">Kontakt</a></li>
          </ul>
        </nav>

        <section className="sign-in-section">
            <div>
                <h1>Zaloguj się</h1>
                <form action="" onSubmit={handleSubmit} ref={formRef}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" ref={emailRef}/>
                    <label htmlFor="email">Hasło</label>
                    <input type="password" id="password" ref={passwordRef}/>
                </form>
                <div className="button-sign-in">
                      <button onClick={submitForm}>Zaloguj się</button>
                      <button onClick={handleRegister}><a href="">Załóż konto</a></button>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default SignIn;
  
  
  