// app/pg/[slug]/page.js

const pgData = [
    { slug: 'pg-1', title: 'PG One', description: 'Nice PG' },
    { slug: 'pg-2', title: 'PG Two', description: 'Cozy PG' },
];

function getPGData(slug) {
    return pgData.find((p) => p.slug === slug);
}

export default async function PGDetail({ params }) {
    const slug = params.slug;
    const data = getPGData(slug);

    if (!data) return <p>PG not found</p>;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    );
}
