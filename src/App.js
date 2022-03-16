
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import MSFS2020 from './components/pages/MSFS2020';

export default function App() {
  return (
    <div className='content'> 
      <header>
          {/* <NavbarComp /> */}
          <MSFS2020/>
      </header>
      <main>
      </main>
    </div>
  );
}

