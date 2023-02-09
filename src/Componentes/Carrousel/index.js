import Carousel from 'react-bootstrap/Carousel';
import js from './img/curso-javascript-banner.jpg'
import ht from './img/maquetadoHTML-banner.png'
import './Carrousel.css'

function Carrousel() {
  return (
    <Carousel variant="dark" className='division'>
      <Carousel.Item>
        <img
          className="d-block w-100 tamano"
          src={js}
          alt="First slide"
        />
        <Carousel.Caption className='espacio'>
          <h5 className='h5'>Curso de JavaScript</h5>
          <p className='p'>Dale vida y acción a tu página web con estos artículos que te prepararán para ser un desarrollador de JavaScript.</p>
          <h2 className='boton'><a class="btn btn-primary btn-lg hero-button " role="button" href="">Conocer más</a></h2>

        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 tamano"
          src={ht}
          alt="Second slide"
        />
        <Carousel.Caption  className='espacio'>
          <h5 className='h5'>Maquetado HTML desde 0</h5>
          <p className='p'>En este artículo te guiaremos para que crees tu primer maquetado en HTML.</p>
          <h2><a class="btn btn-primary btn-lg hero-button" role="button" href="">Conocer más</a></h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export {Carrousel}