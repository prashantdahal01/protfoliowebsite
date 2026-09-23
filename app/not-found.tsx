import Link from "next/link";

export default function NotFound() {
  return <main className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center"><div><p className="text-xs font-medium tracking-[0.22em] text-cyan-200">404</p><h1 className="mt-4 text-5xl font-semibold tracking-tight">That page moved on.</h1><p className="mx-auto mt-5 max-w-md text-gray-300">The link is no longer here, but the useful work is still close by.</p><Link href="/" className="mt-8 inline-flex rounded-full bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-white">Back home</Link></div></main>;
}
