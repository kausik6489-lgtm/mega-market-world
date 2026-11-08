import { useMemo, useState } from 'react';
import { Search, ShoppingBag, Utensils, Plane, Hotel, Car, Map, Menu, Globe2, ArrowRight, Store, ShieldCheck, Truck, Headphones } from 'lucide-react';

const services = [
  { name: 'Mega Shop', desc: 'Discover products from trusted sellers', icon: ShoppingBag, color: 'violet' },
  { name: 'Mega Food', desc: 'Order meals from nearby restaurants', icon: Utensils, color: 'orange' },
  { name: 'Mega Flights', desc: 'Compare flights and plan your journey', icon: Plane, color: 'blue' },
  { name: 'Mega Hotels', desc: 'Find stays for every kind of trip', icon: Hotel, color: 'pink' },
  { name: 'Mega Rides', desc: 'Book local, city and airport rides', icon: Car, color: 'green' },
  { name: 'Mega Travel', desc: 'Explore buses and tour packages', icon: Map, color: 'cyan' },
];

const products = [
  { name: 'Wireless Headphones', category: 'Electronics', price: '₹1,499', tag: 'Popular', emoji: '🎧' },
  { name: 'Everyday Backpack', category: 'Fashion', price: '₹899', tag: 'Best seller', emoji: '🎒' },
  { name: 'Smart Watch', category: 'Electronics', price: '₹2,299', tag: 'New', emoji: '⌚' },
  { name: 'Home Decor Lamp', category: 'Home', price: '₹699', tag: 'Trending', emoji: '💡' },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('India · INR ₹');
  const [menuOpen, setMenuOpen] = useState(false);
  const filtered = useMemo(() => products.filter(p => `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return <div className="app-shell">
    <div className="top-strip">Welcome to MEGA MARKET WORLD <span>One Platform. Everything. Everywhere.</span></div>
    <header className="header">
      <a className="brand" href="#"><span className="brand-mark">M</span><span>MEGA MARKET <b>WORLD</b></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        <a href="#services">Services</a><a href="#shop">Shop</a><a href="#seller">Become a Seller</a>
      </nav>
      <div className="header-actions">
        <label className="country"><Globe2 size={16}/><select value={country} onChange={e => setCountry(e.target.value)}><option>India · INR ₹</option><option>United States · USD $</option><option>United Kingdom · GBP £</option><option>United Arab Emirates · AED</option></select></label>
        <button className="login" onClick={() => alert('Customer login will be connected in the next development phase.')}>Login / Sign up</button>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Menu/></button>
      </div>
    </header>

    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">YOUR WORLD, ALL IN ONE PLACE</div>
          <h1>Everything you need.<br/><span>One world of possibilities.</span></h1>
          <p>Shop, order food, book flights and hotels, or arrange a ride — all from one simple platform.</p>
          <div className="search-box"><Search size={20}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search products, services and more"/><button onClick={() => document.getElementById('shop')?.scrollIntoView({behavior:'smooth'})}>Search</button></div>
          <div className="hero-note"><ShieldCheck size={16}/> A growing marketplace designed for customers and sellers worldwide.</div>
        </div>
        <div className="hero-art"><div className="glow"></div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="planet">🌐</div><div className="float-card card-shop">🛍️ <b>Shopping</b></div><div className="float-card card-travel">✈️ <b>Travel</b></div><div className="float-card card-food">🍽️ <b>Food</b></div></div>
      </section>

      <section className="section" id="services">
        <div className="section-heading"><div><div className="eyebrow">EXPLORE OUR ECOSYSTEM</div><h2>One platform. Many possibilities.</h2></div><p>Everything connected in one convenient place.</p></div>
        <div className="service-grid">{services.map(({name,desc,icon:Icon,color}) => <button className="service-card" key={name} onClick={() => alert(`${name} will be developed in the next phase.`)}><span className={`service-icon ${color}`}><Icon size={25}/></span><span className="service-text"><b>{name}</b><small>{desc}</small></span><ArrowRight className="service-arrow" size={18}/></button>)}</div>
      </section>

      <section className="section shop-section" id="shop">
        <div className="section-heading"><div><div className="eyebrow">MEGA SHOP</div><h2>Popular picks for you</h2></div><a className="text-link" href="#shop">Explore products <ArrowRight size={16}/></a></div>
        <div className="product-grid">{filtered.map(p => <article className="product-card" key={p.name}><div className="product-art"><span>{p.emoji}</span><small>{p.tag}</small></div><div className="product-info"><small>{p.category}</small><b>{p.name}</b><strong>{p.price}</strong><button onClick={() => alert('Cart and checkout will be connected in the next development phase.')}>Add to cart</button></div></article>)}</div>
        {filtered.length === 0 && <p className="empty">No sample products match that search. Try another word.</p>}
      </section>

      <section className="seller-banner" id="seller"><div className="seller-icon"><Store size={28}/></div><div><div className="eyebrow">GROW WITH US</div><h2>Bring your business to the world.</h2><p>Join our marketplace and reach more customers.</p></div><button onClick={() => alert('Seller registration and verification will be added in a later phase.')}>Become a seller <ArrowRight size={17}/></button></section>
      <section className="trust-row"><div><ShieldCheck/><b>Designed with trust in mind</b><small>Seller verification and secure checkout planned</small></div><div><Truck/><b>Delivery connections</b><small>Shipping partner integration planned</small></div><div><Headphones/><b>Customer support</b><small>Help and order support planned</small></div></section>
    </main>
    <footer><a className="brand" href="#"><span className="brand-mark">M</span><span>MEGA MARKET <b>WORLD</b></span></a><p>One Platform. Everything. Everywhere.</p><small>© 2026 MEGA MARKET WORLD. Demo interface — services and payments are not live yet.</small></footer>
  </div>;
}