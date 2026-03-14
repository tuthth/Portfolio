import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0a0a0a]">
      {/* Large 404 */}
      <h1 className="text-[8rem] sm:text-[10rem] font-bold leading-none tracking-tighter text-zinc-800">
        404
      </h1>

      {/* Accent line */}
      <div className="mt-4 h-[2px] w-16 bg-accent rounded-full" />

      {/* Message */}
      <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-zinc-100">
        Page not found
      </h2>
      <p className="mt-3 max-w-md text-base text-zinc-400 leading-relaxed font-medium">
        The page you are looking for does not exist or has been moved.
        Let&apos;s take you back home.
      </p>

      {/* CTA */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-accent px-7 py-3 text-sm font-semibold tracking-wide text-black transition hover:bg-[#ff8a80]"
      >
        Back to homepage
        <span className="ml-2">→</span>
      </Link>

      {/* Footer-like branding */}
      <div className="mt-16 flex items-baseline gap-2">
        <span className="font-northwell-alt text-3xl text-zinc-600">
          Tuan
        </span>
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-600">
          NGUYEN
        </span>
      </div>
    </div>
  );
}
