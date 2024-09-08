




import { useRef } from "react";
import { signUpUser } from "./supabase/supabase.js";
import { Navigate, useNavigate } from "react-router-dom";


function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    

    const formRef = useRef();


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const values = {
            username: emailRef.current.value,
            password: passwordRef.current.value
        };

        const { data, error } = await signUpUser(values);
        console.log(values);

        if (error) {
            console.error(error);
            alert('Spróbuj ponownie.');
            return;
        }
    };

    
    const submitForm = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };




    const handleSignIn = () => {
      navigate('/sign-in');
    }

  

    return (
        <>
            <nav className="header">
                <ul className="up-menu-section">
                    <li onClick={handleSignIn}><a href="#">Zaloguj się</a></li>
                    <li onClick={handleSubmit}><a href="#">Załóż konto</a></li>
                </ul>
                <ul className="down-menu-section">
                    <li><a href="#">Start</a></li>
                    <li><a href="#">O co chodzi?</a></li>
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Fundacja i organizacje</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
            
            <section className="sign-up-section">
                <div>
                    <h1>Zarejestruj się</h1>
                    <form action="" onSubmit={handleSubmit} ref={formRef}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            ref={emailRef}
                            required
                        />
                        <label htmlFor="password">Hasło</label>
                        <input
                            type="password"
                            ref={passwordRef}
                            id="password"
                            required
                        />
                        <label htmlFor="password-repeat">Powtórz hasło</label>
                        <input
                            type="password"
                            id="password-repeat"
                            required
                        />
                      
                    </form>
                    <div className="button-sign-in">
                        <button onClick={handleSignIn}>Zaloguj się</button>
                        <button onClick={submitForm}>Załóż konto</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
