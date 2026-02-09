import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety: When Your Body Is Always On Alert",
    excerpt:
      "Many people with anxiety describe feeling like they're constantly bracing for something to go wrong. Learn about the nervous system's role in anxiety and practical ways to find relief.",
    image: "/images/anxiety.png",
    date: "February 1, 2026",
    category: "Anxiety",
  },
  {
    id: 2,
    title: "The Hidden Cost of High Achievement: Recognizing Burnout",
    excerpt:
      "High achievers often push through exhaustion and disconnection, thinking they just need to work harder. Here's how to recognize burnout and start recovering.",
    image: "/images/burnout.png",
    date: "January 28, 2026",
    category: "Burnout",
  },
  {
    id: 3,
    title: "What to Expect in EMDR Therapy for Trauma",
    excerpt:
      "EMDR is a powerful, evidence-based approach for processing traumatic memories. Learn what happens in EMDR sessions and how it can help you heal.",
    image: "/images/trauma.png",
    date: "January 22, 2026",
    category: "Trauma",
  },
  {
    id: 4,
    title: "Perfectionism: When Good Enough Never Feels Enough",
    excerpt:
      "Perfectionism can drive success, but it often comes at a steep cost. Explore the difference between healthy striving and perfectionism that keeps you stuck.",
    image: "/images/perfection.png",
    date: "January 15, 2026",
    category: "Self-Growth",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-background)] to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[var(--color-primary)] mb-6">
              Insights on Healing & Growth
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)]">
              Practical guidance and deeper understanding for your mental health journey
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[var(--color-border)]"
              >
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">

                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[var(--color-primary)] text-white text-sm rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <time className="text-sm text-[var(--color-text-secondary)]">
                    {post.date}
                  </time>
                  <h2 className="text-2xl font-serif font-semibold text-[var(--color-primary)]">
                    {post.title}
                  </h2>
                  <p className="text-[var(--color-text-secondary)]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-primary)] mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            Receive occasional insights on mental health, therapy, and self-care
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[var(--color-primary)] text-white rounded hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-[var(--color-text-secondary)] mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}