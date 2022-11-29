import Card from 'react-bootstrap/Card';
import {Routes, Route, useNavigate} from "react-router-dom";
import EditarObras from "../Pages/EditarObras";

function BasicExample() {
  const navigate = useNavigate();

  const navEditarObra = () => {
    navigate('/EditarObras');
  }

  return (
    <div>
      <button onClick={navEditarObra}>
        <Card style={{ width: '25rem' }} className='text-center'>
          <Card.Img style={{ height: '15rem' }} variant="top" src="/logo512.png" />
          <Card.Body>
            <Card.Title>Nombre de la obra</Card.Title>
            <Card.Text>
              <p>Autor</p>
              <p>Técnica</p>
              <p>Fecha</p>
            </Card.Text>
            
          </Card.Body>
        </Card>
      </button>

      <Routes>
        <Route path="/EditarObras" element={<EditarObras />} />
      </Routes>
    </div>
  );
}

export default BasicExample;