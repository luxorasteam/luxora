import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxorasteamcleaning.co.uk"),
  title: "Carpet Cleaning Blog | Luxora Steam Cleaning",
  description:
    "Carpet cleaning tips, guides and advice from Luxora Steam Cleaning in Huddersfield. Learn how to keep your carpets, sofas and mattresses clean.",
  alternates: {
    canonical: "https://luxorasteamcleaning.co.uk/blog",
  },
  openGraph: {
    title: "Carpet Cleaning Blog | Luxora Steam Cleaning",
    description:
      "Carpet cleaning tips, guides and advice from Luxora Steam Cleaning in Huddersfield.",
    url: "https://luxorasteamcleaning.co.uk/blog",
    siteName: "Luxora Steam Cleaning",
    type: "website",
  },
};

const posts = [
  {
    slug: "why-is-my-carpet-sticky-after-cleaning",
    title: "Why Is My Carpet Sticky After Cleaning?",
    excerpt:
      "Carpet sticky after cleaning? Learn the likely causes, safe ways to remove residue, mistakes to avoid and when to ask a professional for help.",
    date: "2025-10-08",
    image: "/images/blog/carpet-clean-result.webp",
    imageAlt: "Clean cream carpet after professional steam cleaning with blue air mover drying fan",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="container mx-auto px-6 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold text-foreground mb-3">Carpet Cleaning Blog</h1>
      <p className="text-foreground/60 mb-10 text-lg">
        Practical guides and advice on keeping your carpets, sofas and upholstery fresh.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all shadow-sm hover:shadow-md"
          >
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <p className="text-xs text-foreground/40 mb-2">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-foreground/60 line-clamp-3">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
