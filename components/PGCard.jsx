import Link from "next/link";

export default function PGCard({ pg }) {
  return (
    <article className="pg-card">
      <div className="pg-image">Image</div>
      <div>
        <div className="pg-title">{pg.name}</div>
        <div className="pg-meta">{pg.location ?? 'Near city center'}</div>
        <div className="pg-meta">₹{pg.price}/month</div>
      </div>
      <div className="pg-actions">
        <Link href={`/pg/${pg.slug}`} className="btn btn-primary">View</Link>
        <button className="btn btn-ghost">Save</button>
      </div>
    </article>
  );
}
