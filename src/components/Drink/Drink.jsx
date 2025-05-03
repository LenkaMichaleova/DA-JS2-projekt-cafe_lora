import { Layer } from '../Layer/Layer'
import './Drink.css'

export const Drink = ({id, name, ordered, image, layers}) => {
  
  return (
  <div key={id} id={id} className="drink">
    <div className="drink__product">
      <div className="drink__cup">
        <img src={`http://localhost:4000${image}`}/>
      </div>
      <div className="drink__info">
        <h3>{name}</h3>
        {layers.map(({label, color}) => <Layer key={label} color={color} label={label}/>)}
      </div>
    </div>
    <form className="drink__controls">
      <input type="hidden" className="order-id" value="0" />
      <button className="order-btn">
        Objednat
      </button>
    </form>
  </div>  
  )
}
