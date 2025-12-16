"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-nav">
      <div className="brand">
        <div className="logo" />
        <div>PGFinder</div>
      </div>

      <nav className="nav-links" aria-label="Primary navigation">
        <Link className="nav-link" href="/">Home</Link>
        <Link className="nav-link" href="/pg">Listings</Link>
        <a className="nav-link" href="#contact">Contact</a>
      </nav>

      <button className="nav-link" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? 'Close' : 'Menu'}
      </button>
    </header>
  );
}
