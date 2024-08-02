import { client } from "../lib/sanity";

async function getSlugs() {
  const query = `
      *[_type == "article" || _type == "event" || _type == "page"] {
        _type == "article" => {
          "slug": "news/" + slug.current,
          "updated": _updatedAt
        },
        _type == "event" => {
          "slug": "events/" + slug.current,
          "updated": _updatedAt
        },
        _type == "page" => {
          "slug": coalesce(slug.current, ""),
          "updated": _updatedAt
        }
      }
    `;

  const data = await client.fetch(query);
  return data || null;
}

const renderXML = (slugs: { slug?: string; updated: string }[]) => {
  const url = "https://up-dctid.vercel.app";

  const sourceXML = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs.filter(Boolean).map(
          (item) => `<url>
          <loc>${url}/${item.slug}</loc>
          <lastmod>${item.updated}</lastmod>
        </url>`
        )}
      </urlset>`;

  return sourceXML;
};

export async function GET() {
  const slugs = await getSlugs();
  const xmlContent = renderXML(slugs);

  return new Response(xmlContent, { headers: { "Content-Type": "text/xml" } });
}
