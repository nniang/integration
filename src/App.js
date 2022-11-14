import 'bootstrap/dist/css/bootstrap.min.css';
import Advice from './component/Advice';
import Feacture from './component/Feacture';
import Footer from './component/Footer';
import Footer1 from './component/Footer1';
import Header from './component/Header';
 import Header1 from './component/Header1';
import Navbarre from './component/Navbarre';
import Package from './component/Package';
import Practice from './component/Practice';
function App() {
  return (
    <div>
      <Navbarre/>
      <Header/>
       <Header1/>
      <Package/>
      <Advice/>
      <Practice/>
      <Feacture/>
      <Footer/>
      <Footer1/>
    </div>
  );
}

export default App;
