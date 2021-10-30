import React from "react";
import styled from "styled-components";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  .arrow {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    font-size: 3rem;
    color: #333;
    transition: all 0.4s;

    :hover {
      color: rgb(148, 148, 148);
    }
  }
`;

const Privacy = () => {
  return (
    <Container>
      <Link to="/" className="arrow">
        <AiFillCaretLeft />
      </Link>
      <h2>Polityka prywatności</h2>
      <p>
        Polityka prywatności opisuje zasady przetwarzania przez nas informacji
        na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw.
        cookies.
      </p>
      <h3>1. Informacje ogólne</h3>
      <p>
        Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url:
        strona.netlify.app.
      </p>
      <p>
        Operatorem serwisu oraz Administratorem danych osobowych jest: Jacek
        Czochruj Betonowa, 81-300 Kozdruń.
      </p>
      <p>Adres kontaktowy poczty elektronicznej operatora: puaro@vp.pl.</p>
      <p>
        Operator jest Administratorem Twoich danych osobowych w odniesieniu do
        danych podanych dobrowolnie w Serwisie. Serwis wykorzystuje dane osobowe
        w następujących celach: <br /> Prezentacja oferty lub informacji.
      </p>
      <p>
        Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich
        zachowaniu w następujący sposób:
        <br /> Poprzez dobrowolnie wprowadzone w formularzach dane, które
        zostają wprowadzone do systemów Operatora.
        <br /> Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw.
        „ciasteczka”).
      </p>
      <h3>2. Wybrane metody ochrony danych stosowane przez Operatora</h3>
      <p>
        Miejsca logowania i wprowadzania danych osobowych są chronione w
        warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane
        logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
        użytkownika i mogą być odczytane jedynie na docelowym serwerze.
      </p>
      <h3>3. Hosting</h3>
      <p>
        Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora:
        inna firma.
      </p>
      <h3>
        4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
      </h3>
      <p>
        W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane
        osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej
        z Tobą umowy lub do zrealizowania obowiązków ciążących na
        Administratorze. Dotyczy to takich grup odbiorców: firma hostingowa na
        zasadzie powierzenia.
      </p>
      <p>
        Twoje dane osobowe są przetwarzane przez Administratora nie dłużej, niż
        jest to konieczne do wykonania związanych z nimi czynności określonych
        osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do
        danych marketingowych dane nie będą przetwarzane dłużej niż przez 3
        lata. Przysługuje Ci prawo żądania od Administratora:
        <br /> dostępu do danych osobowych Ciebie dotyczących,
        <br /> ich sprostowania, <br />
        usunięcia,
        <br /> ograniczenia przetwarzania, <br />
        oraz przenoszenia danych.
        <br /> Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
        przetwarzania wskazanego w pkt 3.3 c wobec przetwarzania danych
        osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych
        przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie
        będzie mogło być wykonane w przypadku istnienia ważnych prawnie
        uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie
        interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub
        obrony roszczeń.
      </p>
      <p>
        Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony
        Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
      </p>
      <p>
        Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi
        Serwisu. W stosunku do Ciebie mogą być podejmowane czynności polegające
        na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu
        świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez
        Administratora marketingu bezpośredniego. Dane osobowe nie są
        przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych
        osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii
        Europejskiej.
      </p>
      <h3>5. Informacje w formularzach</h3>{" "}
      <p>
        Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym
        dane osobowe, o ile zostaną one podane. Serwis może zapisać informacje o
        parametrach połączenia (oznaczenie czasu, adres IP). Serwis, w
        niektórych wypadkach, może zapisać informację ułatwiającą powiązanie
        danych w formularzu z adresem e-mail użytkownika wypełniającego
        formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz
        adresu url strony zawierającej formularz. Dane podane w formularzu są
        przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w
        celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu
        handlowego, rejestracji usług itp. Każdorazowo kontekst i opis
        formularza w czytelny sposób informuje, do czego on służy.
      </p>
      <h3>6. Logi Administratora</h3>
      <p>
        Informacje o zachowaniu użytkowników w serwisie mogą podlegać logowaniu.
        Dane te są wykorzystywane w celu administrowania serwisem.
      </p>
      <h3>7. Istotne techniki marketingowe</h3>{" "}
      <p>
        Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google
        Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do
        operatora tej usługi danych osobowych, a jedynie zanonimizowane
        informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu
        końcowym użytkownika. W zakresie informacji o preferencjach użytkownika
        gromadzonych przez sieć reklamową Google, użytkownik może przeglądać i
        edytować informacje wynikające z plików cookies przy pomocy narzędzia:
        https://www.google.com/ads/preferences/.
      </p>
      <h3>8. Informacja o plikach cookies</h3>{" "}
      <p>
        Serwis korzysta z plików cookies. Pliki cookies (tzw. „ciasteczka”)
        stanowią dane informatyczne, w szczególności pliki tekstowe, które
        przechowywane są w urządzeniu końcowym Użytkownika Serwisu i
        przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies
        zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas
        przechowywania ich na urządzeniu końcowym oraz unikalny numer. Podmiotem
        zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies
        oraz uzyskującym do nich dostęp jest operator Serwisu. Pliki cookies
        wykorzystywane są w następujących celach: utrzymanie sesji użytkownika
        Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej
        podstronie Serwisu ponownie wpisywać loginu i hasła; realizacji celów
        określonych powyżej w części "Istotne techniki marketingowe";
      </p>
      <p>
        W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
        „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies
        „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu
        końcowym Użytkownika do czasu wylogowania, opuszczenia strony
        internetowej lub wyłączenia oprogramowania (przeglądarki internetowej).
        „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika
        przez czas określony w parametrach plików cookies lub do czasu ich
        usunięcia przez Użytkownika. Oprogramowanie do przeglądania stron
        internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
        przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
      </p>
      <p>
        Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie.
        Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe
        jest także automatyczne blokowanie plików cookies. Szczegółowe
        informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki
        internetowej. Ograniczenia stosowania plików cookies mogą wpłynąć na
        niektóre funkcjonalności dostępne na stronach internetowych Serwisu.
      </p>
      <p>
        Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu
        wykorzystywane mogą być również przez współpracujące z operatorem
        Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z
        siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter
        (Twitter Inc. z siedzibą w USA).
      </p>
      <h3>
        9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
      </h3>
      <p>
        Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
        ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
        cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
        utrzymania preferencji użytkownika może utrudnić, a w skrajnych
        przypadkach może uniemożliwić korzystanie ze stron www.
      </p>
      <p>
        W celu zarządzania ustawienia cookies wybierz z listy poniżej
        przeglądarkę internetową, której używasz i postępuj zgodnie z
        instrukcjami: <br />
        Edge <br />
        Internet Explorer
        <br /> Chrome <br />
        Safari
        <br /> Firefox
        <br /> Opera
        <br />
        Urządzenia mobilne:
        <br /> Android
        <br /> Safari (iOS)
        <br /> Windows Phone
      </p>
    </Container>
  );
};

export default Privacy;
