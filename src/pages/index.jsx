import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import { Banner } from '../components/Banner/Banner';
import { Menu } from '../components/Menu/Menu';
import { Gallery } from '../components/Gallery/Gallery';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';
import '../global.css';
import './index.css';

const response = await fetch ("http://localhost:4000/api/drinks")
const json = await response.json()
const drinks = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks}/>
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

document.querySelector(".nav-btn").addEventListener("click", () => {
  document.querySelector(".rollout-nav").classList.toggle("nav-closed")
})

document.querySelector(".rollout-nav").addEventListener("click", () => {
    document.querySelector(".rollout-nav").classList.add("nav-closed")
})

document.querySelectorAll(".drink__controls").forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const drinkId = e.target.dataset.id
    const ordered = e.target.dataset.ordered === "true"

    const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify([{
        op: 'replace', 
        path: '/ordered', 
        value: !ordered
      }])
    })
    const data = await response.json()

    window.location.reload()
  })
})
