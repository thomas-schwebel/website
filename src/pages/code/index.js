import React from 'react';
import Gallery from '../../components/gallery';
import { Link } from 'react-router-dom';

export default function Code() {
  const items = [
    {
      title: "More Than 2",
      desc: `Scan your own playlists to check out from which artists you like 2 or more tracks. Gives you a hint about which artists you might wanna check more.<br>
        Coded in Go.
      `,
      src: `${process.env.PUBLIC_URL}/code/more-than-2.jpg`,
      thumb: `${process.env.PUBLIC_URL}/code/more-than-2.jpg`,
    },
    {
      title: "Generative Art",
      desc: "Having fun with generative art - Coded in JS.",
      src: `${process.env.PUBLIC_URL}/code/generative-art.jpg`,
      thumb: `${process.env.PUBLIC_URL}/code/generative-art.jpg`,
    },
    {
      title: "Facebook Birthdays Exporter",
      desc: `Small tool to export birthdays from Facebook.<br>
        Minimal tech stack with Java 15. <br><br>
        <a href="https://github.com/thomas-schwebel/fb-bday-exporter">Link to Github</a>
      `,
      src: `${process.env.PUBLIC_URL}/code/birthday-exporter.jpg`,
      thumb: `${process.env.PUBLIC_URL}/code/birthday-exporter.jpg`,
    },
    {
      title: "Pongo",
      desc: `Basic implementation of the classic Pong Game in Go.<br><br>
        <a href="https://github.com/thomas-schwebel/pongo">Link to Github</a>
      `,
      src: `${process.env.PUBLIC_URL}/code/pongo.jpg`,
      thumb: `${process.env.PUBLIC_URL}/code/pongo.jpg`,
    },
    {
      title: "This website",
      desc: `Online resume.<br>
        React + CSS Grid<br><br>
        <a href="https://github.com/thomas-schwebel/thomas-schwebel.github.io">Link to Github</a>
      `,
      src: `${process.env.PUBLIC_URL}/code/website3.jpg`,
      thumb: `${process.env.PUBLIC_URL}/code/website3.jpg`,
    },
    {
      title: "Older website",
      desc: `Older version of this website.<br>
        Twitter Bootstrap and jQuery.
      `,
      src: `${process.env.PUBLIC_URL}/code/website2.jpg`,
      thumb: `${process.env.PUBLIC_URL}/code/website2.jpg`,
    },
    {
      title: "Very old website",
      desc: `First version of this website.<br>
        Adobe Flash (Action Script 3).
      `,
      src: `${process.env.PUBLIC_URL}/code/website1.jpg`,
      thumb: `${process.env.PUBLIC_URL}/code/website1.jpg`,
    },
    {
      title: "Videolist (Hollywood Hack Day 2012)",
      desc: `VideoList was ranked 3rd best out of 24 apps. It was developed during a weekend using Rails in a team of 4 developers.<br><br>

      <a href="https://www.hollywoodhackday.com/">More info</a>`,
      src: `${process.env.PUBLIC_URL}/code/videolist.jpg`,
      thumb: `${process.env.PUBLIC_URL}/code/videolist.jpg`,
    },
  ].sort(() => Math.random() - 0.5); // shuffle


  return (
    <div className="Code">
      <Link to="/">&#x3c; back</Link>
        <h1>Code</h1>
        <Gallery items={items}/>
    </div>
  );
}
