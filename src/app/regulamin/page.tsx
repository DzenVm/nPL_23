import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Zasady korzystania z gry przeglądarkowej dostępnej na tej stronie.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Regulamin korzystania z gry" updated="27 sierpnia 2026">
      <h2 className="font-display text-xl text-ink-900">1. Postanowienia ogólne</h2>
      <p>
        Regulamin określa zasady korzystania z gry przeglądarkowej udostępnianej
        pod tym adresem. Rozpoczęcie korzystania z gry oznacza akceptację
        poniższych zasad.
      </p>

      <h2 className="font-display text-xl text-ink-900">2. Charakter usługi</h2>
      <p>
        Gra jest dostępna bezpłatnie, bezpośrednio w przeglądarce internetowej,
        bez konieczności instalowania dodatkowego oprogramowania. Podstawowa
        rozgrywka — zbieranie składników, tworzenie receptur i realizacja
        zleceń — jest dostępna dla każdego odwiedzającego bez żadnych opłat.
      </p>

      <h2 className="font-display text-xl text-ink-900">3. Zakupy opcjonalne</h2>
      <p>
        W ramach gry dostępne są opcjonalne, kosmetyczne elementy wyglądu
        warsztatu (np. wygląd mebli, kolorystyka pomieszczenia). Każdy taki
        element ma stałą, jawnie podaną cenę przed dokonaniem zakupu i wpływa
        wyłącznie na wygląd, nie na dostępność mechanik, treści fabularnych
        ani na tempo postępów w grze. Zakupy realizowane są za pośrednictwem
        zewnętrznego operatora płatności; szczegółowe warunki płatności
        zostaną przedstawione w momencie uruchomienia tej funkcji.
      </p>

      <h2 className="font-display text-xl text-ink-900">4. Konto i zapis postępu</h2>
      <p>
        Domyślnie zapis postępu przechowywany jest lokalnie w przeglądarce
        urządzenia użytkownika. Odinstalowanie przeglądarki, wyczyszczenie jej
        danych lub zmiana urządzenia może skutkować utratą zapisanego postępu.
        Zalecamy zachowanie ostrożności przy czyszczeniu danych przeglądarki,
        jeśli zależy Ci na zachowaniu postępu.
      </p>

      <h2 className="font-display text-xl text-ink-900">5. Zasady korzystania</h2>
      <p>
        Zabronione jest podejmowanie działań mających na celu zakłócenie
        działania strony, obejście jej zabezpieczeń technicznych lub
        wykorzystywanie automatycznych narzędzi do masowego pobierania
        treści strony w sposób niezwiązany ze zwykłym korzystaniem z gry.
      </p>

      <h2 className="font-display text-xl text-ink-900">6. Odpowiedzialność</h2>
      <p>
        Dokładamy starań, aby gra działała poprawnie i bez przerw, jednak nie
        gwarantujemy nieprzerwanej dostępności usługi. Nie ponosimy
        odpowiedzialności za utratę zapisu postępu wynikającą z działań
        podjętych po stronie urządzenia użytkownika ani za przerwy w
        dostępności wynikające z przyczyn niezależnych od administratora.
      </p>

      <h2 className="font-display text-xl text-ink-900">7. Reklamacje</h2>
      <p>
        Uwagi dotyczące działania gry lub zrealizowanych zakupów można
        zgłaszać drogą wskazaną na stronie kontaktowej. Zgłoszenie powinno
        zawierać opis problemu oraz, jeśli to możliwe, przybliżoną datę jego
        wystąpienia. Odpowiedź udzielana jest w rozsądnym terminie, nie
        dłuższym niż 14 dni.
      </p>

      <h2 className="font-display text-xl text-ink-900">8. Zmiany regulaminu</h2>
      <p>
        Regulamin może być aktualizowany; zmiany wchodzą w życie z chwilą
        publikacji nowej wersji pod tym adresem, wraz z aktualną datą
        widoczną powyżej.
      </p>

      <h2 className="font-display text-xl text-ink-900">9. Postanowienia końcowe</h2>
      <p>
        W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają
        obowiązujące przepisy prawa polskiego, w szczególności Kodeksu
        cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.
      </p>
    </LegalShell>
  );
}
