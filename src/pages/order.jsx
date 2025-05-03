import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Order } from '../components/Order/Order';
import '../global.css';
import './index.css';
import './order.css';

const chosen = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image")
const json = await chosen.json()
const chosenDrinks = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <Header showMenu={false}/>
      <Order items={chosenDrinks}/>
      <Footer />
    </div>
  </div>
);
