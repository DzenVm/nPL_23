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
        osobowymi, najlepiej pisać bezpośrednio na adres kontaktowy
        przypisany do tej domeny — zostanie on uzupełniony po jej
        skonfigurowaniu.
      </p>
      <p>
        Do czasu podpięcia docelowej domeny i skrzynki pocztowej ta strona
        pełni funkcję zapowiedzi — pełne dane kontaktowe pojawią się tutaj
        wraz z uruchomieniem finalnej wersji.
      </p>
      <p>
        Zgłoszenia dotyczące błędów technicznych warto uzupełnić o informację,
        jakiej przeglądarki i urządzenia dotyczą — przyspiesza to
        zdiagnozowanie problemu.
      </p>
    </LegalShell>
  );
}
