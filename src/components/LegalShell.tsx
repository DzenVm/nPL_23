import Link from "next/link";
import type { ReactNode } from "react";

export function LegalShell({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-parchment-100">
      <div className="border-b border-ink-900/15 bg-parchment-100/90">
        <div className="mx-auto max-w-3xl px-5 py-6">
          <Link href="/" className="font-label text-[11px] uppercase tracking-[0.12em] text-rust-600 hover:text-rust-500">
            ← wróć na stronę główną
          </Link>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="font-display text-3xl text-ink-900 md:text-4xl">{title}</h1>
        <p className="mt-2 font-label text-[11px] uppercase tracking-[0.1em] text-ink-600">
          Ostatnia aktualizacja: {updated}
        </p>
        <div className="prose-legal mt-8 space-y-6 leading-[1.8] text-ink-700">{children}</div>
      </article>
    </div>
  );
}
