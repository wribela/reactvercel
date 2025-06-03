import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <>
        <Header />
          <section className='container'>
    <div className='apresentacao'>
      <p> Olá, sou <br/>
      <span>Will</span> <br/>
      Devs Full Stack
      </p>
        <Link to="/sobre" className='btn btn-red'>
        Saiba algo mais sobre nós!
        </Link>
    </div>
    <figure>
      <img className='img-home' src="public/img1.svg" alt="Imagem da home" />
    </figure>
    </section>
      <Footer />
      </>
    )
}

export default Home
