import './Menu.css'
import { Drink } from '../Drink/Drink'

export const Menu = () => (
  <section id='menu' className="menu">
    <div className="container">
      <h2>Naše nabídka</h2>
      <p className="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>

      <div className="drinks-list">
        <Drink name="Espreso" image="../public/cups/espresso.png"/>
      </div>

      <div className="order-detail">
        <a href="/order.html">Detail objednávky</a>
      </div>
    </div>
  </section>
)