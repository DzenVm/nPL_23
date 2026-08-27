import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Zasady przetwarzania danych osobowych i wykorzystania plików cookies na stronie gry.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Polityka prywatności" updated="27 sierpnia 2026">
      <p>
        Niniejsza polityka opisuje, jakie dane są zbierane w związku z
        odwiedzaniem tej strony i korzystaniem z gry, w jakim celu oraz jakie
        prawa przysługują osobie, której dane dotyczą. Administratorem danych
        jest podmiot prowadzący tę stronę, do którego można się skontaktować
        drogą wskazaną na stronie kontaktowej.
      </p>

      <h2 className="font-display text-xl text-ink-900">1. Zakres zbieranych danych</h2>
      <p>
        Sama rozgrywka nie wymaga założenia konta ani podania danych
        osobowych — postęp w grze jest domyślnie zapisywany lokalnie, w
        pamięci przeglądarki urządzenia, z którego korzystasz, i nie jest
        przesyłany na serwer. Jeśli w przyszłości udostępnimy opcjonalne
        konto do synchronizacji zapisu między urządzeniami, będzie ono
        wymagało odrębnej zgody i osobnych zasad, o których poinformujemy
        przed jego uruchomieniem.
      </p>
      <p>
        W trakcie zwykłego korzystania ze strony automatycznie zbierane są
        podstawowe dane techniczne: adres IP, typ i wersja przeglądarki,
        system operacyjny, odwiedzane podstrony, orientacyjny czas wizyty
        oraz strona odsyłająca. Dane te wykorzystywane są w celach
        statystycznych i diagnostycznych oraz do zapewnienia bezpieczeństwa
        działania strony.
      </p>

      <h2 className="font-display text-xl text-ink-900">2. Pliki cookies i podobne technologie</h2>
      <p>
        Strona korzysta z plików cookies niezbędnych do jej poprawnego
        działania (np. zapamiętanie preferencji wyświetlania) oraz — za
        zgodą użytkownika wyrażoną w widocznym na stronie ustawieniu
        zgód — z cookies analitycznych i reklamowych. Te ostatnie mogą być
        umieszczane przez zewnętrznych partnerów reklamowych w celu pomiaru
        skuteczności kampanii prowadzonych w ramach Google Ads oraz
        ograniczenia liczby wyświetleń tej samej reklamy. Zgodę można w
        każdej chwili wycofać w ustawieniach przeglądarki, usuwając zapisane
        pliki cookies, co może ograniczyć niektóre funkcje strony.
      </p>

      <h2 className="font-display text-xl text-ink-900">3. Podstawa i cel przetwarzania</h2>
      <p>
        Dane techniczne przetwarzane są na podstawie prawnie uzasadnionego
        interesu administratora (art. 6 ust. 1 lit. f RODO), polegającego na
        zapewnieniu bezpieczeństwa i poprawnego działania strony oraz
        analizie ruchu. Cookies wymagające zgody przetwarzane są na
        podstawie tej zgody (art. 6 ust. 1 lit. a RODO) i mogą zostać w
        każdej chwili cofnięte bez wpływu na zgodność z prawem
        przetwarzania dokonanego przed cofnięciem.
      </p>

      <h2 className="font-display text-xl text-ink-900">4. Udostępnianie danych</h2>
      <p>
        Dane statystyczne i związane z pomiarem skuteczności reklam mogą być
        przetwarzane przez zewnętrznych dostawców usług analitycznych i
        reklamowych, działających jako odrębni administratorzy lub
        podmioty przetwarzające, zgodnie z ich własnymi zasadami
        prywatności. Dane nie są sprzedawane osobom trzecim.
      </p>

      <h2 className="font-display text-xl text-ink-900">5. Okres przechowywania</h2>
      <p>
        Dane techniczne i analityczne przechowywane są przez okres nie
        dłuższy niż jest to niezbędne do realizacji celów wskazanych powyżej,
        a w przypadku plików cookies — zgodnie z okresem ich ważności
        ustawionym przez dany plik, o czym informuje panel zgód.
      </p>

      <h2 className="font-display text-xl text-ink-900">6. Prawa osoby, której dane dotyczą</h2>
      <p>
        Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia,
        ograniczenia przetwarzania, przenoszenia danych, a także prawo
        wniesienia sprzeciwu wobec przetwarzania opartego na uzasadnionym
        interesie. W sprawach związanych z danymi możesz skontaktować się
        drogą wskazaną na stronie kontaktowej. Przysługuje Ci również prawo
        wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
      </p>

      <h2 className="font-display text-xl text-ink-900">7. Zmiany polityki</h2>
      <p>
        Polityka może być okresowo aktualizowana, w szczególności w związku
        ze zmianami przepisów lub sposobu działania strony. Aktualna wersja
        jest zawsze dostępna pod tym adresem, wraz z datą ostatniej
        aktualizacji widoczną powyżej.
      </p>
    </LegalShell>
  );
}
