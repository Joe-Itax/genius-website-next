import { Metadata } from "next";
import Link from "next/link";

const metadata: Metadata = {
  title: "Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page non trouvée
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-100">
          Désolé, nous n&apos;avons pas pu trouver la page que vous recherchez.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="text-sm px-3.5 py-2.5 rounded-md border border-blue-800 hover:bg-[rgba(36,36,36,0.5)] font-semibold text-gray-100"
          >
            Contacter le support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
