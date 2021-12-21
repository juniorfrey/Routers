import { useNavigate } from "react-router-dom";
import useAuth from '../Auth/useAuth';


const Login = () => {

    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        auth.login();
        navigate({pathname: '/dashboard'});
    }
    
    return (
      <div>
        <h1>Login</h1>
        <button className="login" onClick={handleLogin}>
          Iniciar sessión
        </button>
      </div>
    );
}

export default Login
