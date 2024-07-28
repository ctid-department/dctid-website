import Link from "next/link";

interface SearchResult {
  _type: string;
  title: string;
  currentSlug: string;
  image: any;
}

export default function SearchResults({
  query,
  results,
}: {
  query: string;
  results: SearchResult[];
}) {
  return (
    <div className="my-4 mt-8">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for &quot;{query}&quot;
      </h1>
      {!results || results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="mb-2">
              <span className="text-lg font-medium text-ctid-taupe hover:underline cursor-pointer">
                <Link
                  href={
                    result._type === "article"
                      ? `news/${result.currentSlug}`
                      : result._type === "event"
                        ? `events/${result.currentSlug}`
                        : (result.currentSlug ?? "/")
                  }
                >
                  {result.title}
                </Link>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
