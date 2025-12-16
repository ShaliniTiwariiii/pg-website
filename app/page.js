import Link from 'next/link';

export default function Home() {
    return (
        <section className="hero">
            <h1>Find your next PG — comfortable, safe, and affordable</h1>
            <p className="muted">Search curated PG listings with verified photos and easy booking.</p>
            <div style={{ marginTop: 12 }}>
                <Link href="/pg" className="btn btn-primary">Browse Listings</Link>
            </div>
        </section>
    );
}
