import Link from "next/link";

export default function NotFound() {
  return (
    <main className="l-container flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <p className="text-6xl font-bold text-zinc-900 dark:text-zinc-100">404</p>
      <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">
        Nie znaleziono strony
      </h1>
      <p className="max-w-md text-zinc-500 dark:text-zinc-400">
        Podany adres nie istnieje lub materiał został przeniesiony w inne miejsce.
      </p>
      <Link
        href="/"
        className="focus-ring rounded-md bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Wróć na stronę główną
      </Link>
    </main>
  );
}
