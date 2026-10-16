import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import Button from '@mui/material/Button';

import './categories.css';

import living from '../assets/images/living-room.jpg';
import bedroom from '../assets/images/bedroom.jpg';
import kitchen from '../assets/images/kitchen.jpg';
import office from '../assets/images/office.jpg';
export function CategoryGallery() {
    const categories = [
  { id: 'living', name: 'Living s paces', title: 'Living room interiors', group: 'Living', img: living, description: 'Comfortable gathering places, layered with natural textures and considered details. A space for slow mornings, good conversations, and everything in between.' },
  { id: 'bedroom', name: 'Rest, reimagined.', title: 'Bedroom interiors', group: 'Bedroom', img: bedroom, description: 'Quiet palettes, tactile fabrics and beautifully balanced furniture. Thoughtful bedrooms that feel like a deep breath at the end of your day.' },
  { id: 'kitchen', name: 'Kitchens with soul', title: 'Kitchen interiors', group: 'Kitchen', img: kitchen, description: 'Beautifully practical kitchens where daily rituals come together. Natural materials and intelligent layouts make room for cooking, sharing and connecting.' },
  { id: 'office', name: 'Inspired workspaces', title: 'Home office interiors', group: 'Workspace', img: office, description: 'An intentional place to focus and create. Comfortable proportions, useful storage and natural light bring a little more clarity to your working day.' },
];
  const [filter, setFilter] = useState('All spaces');
  const [selected, setSelected] = useState(null);
  const groups = ['All spaces', ...new Set(categories.map(category => category.group))];
  const visible = categories.filter(category => filter === 'All spaces' || category.group === filter);

  return <section className="services-section" id="services" aria-labelledby="services-heading">
    <div className="section-intro">
      <div><p className="eyebrow"><span /> SPACES, THOUGHTFULLY CONSIDERED</p><h1 id="services-heading">Our services<span className="heading-dot">.</span></h1></div>
      <div className="intro-aside"><p>Good design begins with the way you live.<br />Discover a little possibility in every room.</p><a href="#category-grid" className="text-link">Find your space <ArrowDown size={15} /></a></div>
    </div>
    <div className="filter-bar"><div className="filter-list" aria-label="Filter spaces">{groups.map(group => <Button key={group} variant="ghost" className={`filter-button ${filter === group ? 'is-active' : ''}`} onClick={() => setFilter(group)} aria-pressed={filter === group}>{group}</Button>)}</div><span className="space-count">{String(visible.length).padStart(2, '0')} curated spaces</span></div>
    <div id="category-grid" className={`category-grid ${filter !== 'All spaces' ? 'is-filtered' : ''}`}>
      {visible.map((category, index) => <a href={`#${category.id}`} key={category.id} className={`space-card space-${category.id}`} onClick={event => { event.preventDefault(); setSelected(category); }} aria-label={`Explore ${category.name}`}>
        <img src={category.img} alt={category.title} width={1200} height={912} loading={index === 0 ? 'eager' : 'lazy'} />
        <div className="space-shade" /><span className="space-index">0{index + 1} / {category.title}</span>
        <div className="space-caption"><div><p>{category.group === 'Workspace' ? 'ROOM TO THINK' : category.id === 'bedroom' ? 'YOUR EVERYDAY RETREAT' : category.id === 'kitchen' ? 'THE HEART OF HOME' : 'MADE FOR EVERYDAY LIVING'}</p><h2>{category.name}</h2></div><span className="space-arrow"><ArrowUpRight size={23} strokeWidth={1.4} /></span></div>
      </a>)}
    </div>
    <div className="section-bottom"><span>Different spaces. One thoughtful approach.</span><a href="#category-grid" className="text-link" onClick={() => setFilter('All spaces')}>Explore all spaces <ArrowRight size={16} /></a></div>
    {selected && <div className="detail-backdrop" onClick={() => setSelected(null)}><section className="space-detail" role="dialog" aria-modal="true" aria-label={selected.name} onClick={event => event.stopPropagation()} onKeyDown={event => { if (event.key === 'Escape') setSelected(null); }} tabIndex={-1} ref={element => element?.focus()}><Button className="detail-close" variant="secondary" size="icon" onClick={() => setSelected(null)} aria-label="Close space details"><X /></Button><img src={selected.img} alt={selected.title} width={1200} height={912} /><div className="detail-copy"><p className="eyebrow">{selected.title}</p><h2>{selected.name}</h2><p>{selected.description}</p></div></section></div>}
  </section>;
}
