import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="text-center px-6 relative z-10">
        <div className="text-[8rem] font-bold text-gradient leading-none mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-text-secondary mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold via-gold-highlight to-gold-deep text-bg-primary shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 transition-all duration-350"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
