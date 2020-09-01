import React from 'react';
import Gallery from '../../components/gallery';
import { Link } from 'react-router-dom';
import './photos.css';

function createItem(name, desc) {
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title: capitalized.replace('-', ' '),
    desc,
    src: `${process.env.PUBLIC_URL}/photos/${name}.jpg`,
    thumb: `${process.env.PUBLIC_URL}/photos/${name}_thumb.jpg`
  }
}

function Photos() {
  const items = [
    createItem('colmar', 'Cutest town in France'),
    createItem('cowboys', 'Cowboys in Grand Canyon National Park'),
    createItem('bodie', 'Ghost Town in California'),
    createItem('jordan', 'Wadi Rum desert'),
    createItem('grand-canyon', 'Sunrise in Grand Canyon National Park'),
    createItem('sunset', 'Californian Sunset'),
    createItem('santa-monica', 'Santa Monica Pier'),
    createItem('fraises', 'Strawberries'),
    createItem('guatape', 'Colorful village in Colombia'),
    createItem('portugal', 'South of Portugal'),
    createItem('yosemite', 'Yosemite National Park - California'),
    createItem('australia', 'Bondi Beach')
  ].sort(() => Math.random() - 0.5); // shuffle

  return (
    <div className="Photos">
      <Link to="/">&#x3c; back</Link>
        <h1>Photos</h1>
      <Gallery items={items}/>
    </div>
  );
}

export default Photos;