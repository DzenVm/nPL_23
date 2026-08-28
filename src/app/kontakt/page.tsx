import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Jak skontaktować się w sprawach związanych z grą i stroną.",
};

export default function ContactPage() {
  return (
    <LegalShell title="Kontakt" updated="27 sierpnia 2026">
      <p>
        W sprawach związanych z działaniem gry, zgłoszeniem błędu, pytaniami
        dotyczącymi zakupów opcjonalnych lub kwestiami związanymi z danymi
        osobowymi, najlepiej pisać na adres{" "}
        <a href="mailto:kontakt@saobey.pro" className="underline decoration-brass-400 underline-offset-4 hover:text-ink-900">
          kontakt@saobey.pro
        </a>
        .
      </p>
      <p>
        Zgłoszenia dotyczące błędów technicznych warto uzupełnić o informację,
        jakiej przeglądarki i urządzenia dotyczą — przyspiesza to
        zdiagnozowanie problemu.
      </p>
    </LegalShell>
  );
}
