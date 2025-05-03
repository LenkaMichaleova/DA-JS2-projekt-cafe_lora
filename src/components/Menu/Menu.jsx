import './Menu.css'
import { Drink } from '../Drink/Drink'

export const Menu = ({drinks}) => (
  <section id='menu' className="menu">
    <div className="container">
      <h2>Naše nabídka</h2>
      <p className="menu-intro">
        Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
      </p>

      <div className="drinks-list">
        {drinks.map((item) => 
          <Drink 
            id={item.id}
            key={item.id}
            name={item.name} 
            image={item.image}
            layers={item.layers}
            ordered={item.ordered}
          />
        )}
      </div>

      <div className="order-detail">
        <a href="/order.html">Detail objednávky</a>
      </div>
    </div>
  </section>
)
