import { pgs } from "@/data/pgs";
import PGCard from "@/components/PGCard";

export default function PGListingPage() {
    return (
        <section>
            <h1 style={{ marginTop: 0 }}>PGs in Laxmi Nagar</h1>
            <div className="grid">
                {pgs.map((pg) => (
                    <PGCard key={pg.slug} pg={pg} />
                ))}
            </div>
        </section>
    );
}
