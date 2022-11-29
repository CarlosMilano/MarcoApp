import {Routes, Route, useNavigate} from "react-router-dom";
import ObrasMostradas from "./ObrasRAMostradas";
import './styles.css'

function Login () {
  const navigate = useNavigate();

  const navObras = () => {
    navigate('/ObrasMostradas');
  }

  return (
    <div>
      <button onClick={navObras} className='login'>
        <img src="/fondo.jpg" alt="" />
      </button>

      <Routes>
        <Route path="/ObrasMostradas" element={<ObrasMostradas />} />
      </Routes>
    </div>
  )
}

export default Login;