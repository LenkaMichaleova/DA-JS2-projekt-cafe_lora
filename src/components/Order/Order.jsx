import { OrderedItem } from "../OrderItem/OrderItem";

export const Order = ({items}) => (
  <main className="order">
    <div className="container order__content">
      <h1>Vaše objedávnka</h1>

      {items.length === 0 ?
          <p className="empty-order">Zatím nemáte nic objednáno</p>
        :
          <div className="order__items">
            {items.map((item) => <OrderedItem image={item.image} name={item.name}/>)}
          </div>
      }

    </div>
  </main>
)