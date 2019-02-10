import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div>
    <nav className="navigation">
      <section className="container">
        <Link to="/" className="navigation-title">
          {siteTitle}
        </Link>
        <ul className="navigation-list float-right">
          <li>
            <Link to="/">Tentang</Link>
          </li>
          <li>
            <Link to="/kode">Kode Etik</Link>
          </li>
          <li>
            <Link to="/podcast">Podcast</Link>
          </li>
          <li>
            <a href="#">Forum Diskusi</a>
          </li>
          <li>
            <Link to="/indexPodcast">Indeks</Link>
          </li>
        </ul>
      </section>
    </nav>
  </div>
);

export default Header;
