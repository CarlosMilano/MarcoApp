import Card from 'react-bootstrap/Card';
import {Routes, Route, useNavigate} from "react-router-dom";
import EditarFiltros from "../Pages/EditarFiltros";

function BasicExample() {
  const navigate = useNavigate();

  const navEditarFiltro = () => {
    navigate('/EditarFiltros');
  }

  return (
    <div>
      <button variant="primary" onClick={navEditarFiltro}>
        <Card style={{ width: '25rem' }} className='text-center'>
          <Card.Img style={{ height: '15rem' }} variant="top" src="/logo512.png" />
          <Card.Body>
            <Card.Title>Nombre del filtro</Card.Title>
            
          </Card.Body>
        </Card>
      </button>

      <Routes>
        <Route path="/EditarFiltros" element={<EditarFiltros />} />
      </Routes>
    </div>
  );
}

export default BasicExample;