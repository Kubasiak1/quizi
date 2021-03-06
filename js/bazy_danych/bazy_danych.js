let zdj_lista=[
    "https://cdna.artstation.com/p/assets/images/images/048/463/682/large/adrian-ziajor-0-3-0-pub.jpg?1650103784",
    "https://cdna.artstation.com/p/assets/images/images/048/463/772/large/adrian-ziajor-112-pub.jpg?1650104234",
    "https://cdna.artstation.com/p/assets/images/images/048/463/868/large/adrian-ziajor-205-4-1-pub.jpg?1650104523",
    "https://cdnb.artstation.com/p/assets/images/images/048/463/917/large/adrian-ziajor-205-4-2-pub.jpg?1650104743",
    "https://cdna.artstation.com/p/assets/images/images/048/463/950/large/adrian-ziajor-301-2-2-0-pub.jpg?1650104831",
    "https://cdnb.artstation.com/p/assets/images/images/048/463/985/large/adrian-ziajor-310a-3-pub.jpg?1650105007",
    "https://cdna.artstation.com/p/assets/images/images/048/463/994/large/adrian-ziajor-p-3-0-pub.jpg?1650105025",
    "https://cdnb.artstation.com/p/assets/images/images/048/463/999/large/adrian-ziajor-zew-1-6-pub.jpg?1650105045",
];

let tab_stac_rad=[
    ["RMF FM","http://217.74.72.4/rmf_fm","img/rmf_fm_logo.png","Radio Muzyka Fakty RMF.FM"],
    ["RMF MAXXX","http://217.74.72.4/rmf_maxxx","img/rmf_maxxx_logo.png","RMF MAXX - najlepsza muzyka"],
    ["RMF DANCE","http://217.74.72.4/rmf_dance","img/rmf_dance_logo.png","RMF Dance - tańcz do najlepszej muzyki"],
];

let guziki_menu=[
    ["QUIZ","ico/menu_quiz.png","quiz.html"],
    ["TIMER","ico/menu_timer.png","timer.html"],
    ["RADIO","ico/menu_radio.png","radio.html"],
    ["AUTOR I PARTNERZY","ico/autor_ico.png","autor.html"],
    ["INFORMACJE","ico/info_ico.png","info.html"],
]
let zdjecia=[
    '<br><img id="zdj_zwykle" onclick="powieksz_zdj()" src="img/quiz/1.jpg" title="Standard komunikacji"></img>',
    '<br><img id="zdj_zwykle" onclick="powieksz_zdj()" src="img/quiz/2.jpg" title="Prawa autorskie"></img>',
    '<br><img id="zdj_zwykle" onclick="powieksz_zdj()" src="img/quiz/3.jpg" title="Prawa autorskie"></img>',
    '<br><img id="zdj_zwykle" onclick="powieksz_zdj()" src="img/quiz/4.jpg" title="Prawa autorskie"></img>',
    '<br><img id="zdj_zwykle" onclick="powieksz_zdj()" src="img/quiz/5.jpg" title="Prawa autorskie"></img>',
    '<br><img id="zdj_zwykle" onclick="powieksz_zdj()" src="img/quiz/6.jpg" title="Prawa autorskie"></img>',
    '<br><img id="zdj_zwykle" onclick="powieksz_zdj()" src="img/quiz/7.jpg" title="Prawa autorskie"></img>',
    '<br><img id="zdj_zwykle" onclick="powieksz_zdj()" src="img/quiz/8.jpg" title="Prawa autorskie"></img>',
    '<br><img id="zdj_zwykle" onclick="powieksz_zdj()" src="img/quiz/9.jpg" title="Prawa autorskie"></img>',
    '<img src="img/autor_img.png" title="Zdjęcie autora strony"></img>',
    '<a href="https://shavi25.github.io/Ultraliga/index.html" target="_blank"><img src="ico/ultraliga_logo.png" title="Ultraliga"></img></a>',
    '<a href="https://morguss.github.io/PayMe/"target="_blank"><img src="ico/payme_logo.png" title="Zapłać z PayMe"></img></a>',
]

let co_nowego=[
    [
        "NOWY SZKOLNY PROJEKT",
        "Projekt szkolny został opublikowany na Artstation",
        "28.04.2022",
        "7.0.0",
    ],
    [
        "JAK URUCHOMIĆ RADIO",
        "poradnik, jak uruchomić radio pomimo problemów",
        "23.11.2021",
        "7.0.0",
    ],
    [
        "PARTNERZY",
        "pojawili się partnerzy serwisu Quizi",
        "11.11.2021",
        "6.2.0",
    ],
    [
        "POPRAWKI RESPONSYWNOŚCI",
        "poprawa włożenia elementów na urządzeniach mobilnych",
        "11.11.2021",
        "6.1.0",
    ],
    [
        "PEŁNA RESPONSYWNOŚĆ",
        "powstała wersja strony na podstawowe urządzenia mobilne, tablety i smartphony",
        "11.11.2021",
        "6.0.0",
    ],
    [
        "RESPONSYWNOŚĆ",
        "zmianie i częściowej poprawie uległa responsywność strony",
        "09.11.2021",
        "5.0.0",
    ],
    [
        "ZMIANY W RADIU",
        "zmienił się wygląd odtwarzacza radia, teraz jest mniej błędów",
        "08.11.2021",
        "4.8.0",
    ],
    [
        "USPRAWNIENIA DLA NIEDOWIDZĄCYCH",
        "opcja po najechaniu na zdjęcie w sekcji QUIZ, która powiększa zdjęcie do odpowiednich rozmiarów",
        "07.11.2021",
        "4.7.0",
    ],
    [
        "ANIMACJE",
        "dodatkowe animacje przy zmianie pytania",
        "06.11.2021",
        "4.6.1",
    ],
    [
        "PODSTRONY",
        "powstały lub zostały zmienione podstrony<br> (o autorze) oraz (informacje), pełna funkcjonalność strony",
        "06.11.2021",
        "4.6.0",
    ],
    [
        "QUIZ - #TAGI",
        "możliwość wybierania pytań po zaznaczonych #tagach",
        "05.11.2021",
        "4.5.0",
    ],
    [
        "QUIZ - LOSOWOŚĆ ODPOWIEDZI",
        "ulepszona została funkcjonalność, która zamienia kolejność odpowiedzi podczas losowania pytania",
        "03.11.2021",
        "4.4.0",
    ],
    [
        "QUIZ",
        "powstały skrypty odpowiedzialne za funkcjonalność quizu",
        "31.10.2021",
        "4.0.0",
    ],
    [
        "AUTOMATYZACJA",
        "nastąpiły zmiany w skryptach na stronie, odtąd przejścia na podstrony realizowane sa za pomocą skryptów, doszły animacje",
        "30.10.2021",
        "3.0.0",
    ],
    [
        "RADIO",
        "powstały skrypty radia, całkowita funkcjonalność powstała kilka dni później",
        "25.10.2021",
        "2.2.0",
    ],
    [
        "ZMIANY W STRUKTURZE",
        "w tym dniu nastąpiły duże zmiany w strukturze strony, powstała strona zegara oraz zalążki strony głównej",
        "23.10.2021",
        "2.0.0",
    ],
    [
     "POWSTANIE STRONY",
     "Tego dnia, wieczorem, powstała strona QUIZI mająca na celu kształcenie poprzez rozwiązywanie quizów",
     "21.10.2021",
     "1.0.0",
    ],
];

let inf_autor=[
    [
        "PARTNER: ULTRALIGA",
        `${zdjecia[10]}`
    ],
    [
        "PARTNER: PayMe",
        `${zdjecia[11]}`
    ],
    [
        "KTO TO JEST?",
        `${zdjecia[9]}`
    ],
    [
        "PODSTAWOWE INFORMACJE",
        "<ul><li>Adrian Ziajor</li><li>Lat: 19</li><li>Wykształcenie: Technik informatyk</li></ul>"
    ],
    [
        "PRZYBLIŻONE MIEJSCE PRZEBYWANIA",
        "Południowo-Wschodnia część Polski - woj. Podkarpackie"
    ],
    [
        "ZAINTERESOWANIA",
        "<ul><li>informatyka</li><li>elektronika</li><li>nowe technologie</li><li>kolej, lotnictwo</li></ul>"
    ],
    [
        "SZCZEGÓLNIE POTRAKTOWANE",
        "Kolej, zarówno ta dawna jak i ta obecna zajmuje szczególne miejsce na liście zainteresowań.<br> Gdyby była taka możliwość byłbym kolejarzem ;-)"
    ],
    [
        "NOWE TECHNOLOGIE?",
        "Staram się być na bierząco z nowinkami w świecie technologi, ale nie jest to zawsze możliwe, technologia dzisiaj bardzo idzie do przodu"
    ],
]

let op_kategoria=[
    "Sprzęt komputerowy",
    "Systemy operacyjne",
    "Sieci komputerowe",
    "Bazy danych, SQL",
    "ultraliga"
]

let pytania=[
    ["Podczas normalnego działania systemu operacyjnego w laptopie pojawił się komunikat o konieczności formatowania wewnętrznego dysku twardego. Wskazuje on na:",
    "uszkodzoną pamięć RAM",
    "błędy systemu operacyjnego spowodowane szkodliwym oprogramowaniem",
    "niezainicjowany lub nieprzygotowany do pracy nośnik",
    "C",
    op_kategoria[0]],
    ["W skanerze z układami CIS elementem oświetlającym skanowany dokument jest",
    "lampa fluorescencyjna" ,
    "grupa trójkolorowych diod LED",
    "świetlówka",
    "B",
    op_kategoria[0]],
    [`Który z portów na panelu tylnym komputera oznacza się przedstawionym symbolem?`,
    "LPT",
    "USB",
    "COM",
    "B",
    op_kategoria[0],
    zdjecia[0]
    ],
    [`Który z symboli oznacza zastrzeżenie praw autorskich?`,
    "A",
    "B",
    "C",
    "A",
    op_kategoria[0],
    zdjecia[1]    
    ],
    [`Wskaż podzespół niekompatybilny z płytą główną o przedstawionych w tabeli parametrach`,
    "Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150" ,
    "Monitor: Dell, 34","1x DisplayPort, 1x miniDP, 2x USB 3.0 Upstream, 4x USB 3.0 Downstream",
    "Karta graficzna: Gigabyte GeForce GTX 1050 OC, 2GB, GDDR5, 128 bit, PCI-Express 3.0 x16",
    "A",
    op_kategoria[0],
    zdjecia[2]
    ],
    ["W modelu RGB, w systemie szesnastkowym, kolor jest zapisany następująco: ABCDEF. Natężenie koloru niebieskiego w tym zapisie ma wartość dziesiętną",
    "205",
    "239",
    "186",
    "B",
    op_kategoria[0]],
    ["Jaką nazwę nosi rodzina procesorów firmy Intel, o niewielkich rozmiarach i małym poborze prądu, dedykowanych do zastosowań mobilnych?",
    "Atom",
    "Athlon",
    "Alpha",
    "A",
    op_kategoria[0]],
    [`Który port na przedstawionej płycie umożliwia podłączenie zewnętrznego dysku poprzez interfejs e-SATA?`,
    "1",
    "4",
    "2",
    "C",
    op_kategoria[0],
    zdjecia[3]
    ],
    ["W jednostce ALU do akumulatora została wpisana liczba dziesiętna 240. Jaka jest jej binarna reprezentacja?",
    "11110000",
    "11111000",
    "11111100",
    "A",
    op_kategoria[0]],
    ["Pamięć podręczna Intel Smart Cache wbudowana w procesory wielordzeniowe np. Intel Core Duo to pamięć",
    "Cache L1 współdzielona przez wszystkie rdzenie",
    "Cache L2 lub Cache L3, współdzielona przez wszystkie rdzenie",
    "Cache L1 podzielona równo pomiędzy rdzenie",
    "B",
    op_kategoria[0]],

    ["Instalując system operacyjny Linux należy skorzystać z systemu plików",
    "NTFS 5",
    "ReiserFS",
    "FAT32",
    "B",
    op_kategoria[1]],
    ["W systemie Linux polecenie ps spowoduje wyświetlenie",
    "konfiguracji serwera drukarek Print Server",
    "konfiguracji Proxy Server",
    "listy aktualnych procesów zalogowanego użytkownika",
    "C",
    op_kategoria[1]],
    ["Jeżeli w komórce arkusza kalkulacyjnego MS Excel, zamiast cyfr pojawiają się znaki ########, to należy przede wszystkim sprawdzić, czy",
    "wprowadzone zostały znaki tekstowe, a nie liczby",
    "wpisana formuła zawiera błąd",
    "liczba nie mieści się w komórce i nie można jej prawidłowo wyświetlić",
    "C",
    op_kategoria[1]],
    ["W systemie Linux plik ma ustawione uprawnienia na 765. Grupa przypisana do tego pliku może go",
    "odczytać i zapisać",
    "tylko odczytać",
    "odczytać i wykonać",
    "A",
    op_kategoria[1]],
    ["Która czynność NIE służy do personalizacji systemu operacyjnego Windows?",
    "Ustawienie wielkości partycji wymiany",
    "Ustawienie opcji wyświetlania pasków menu i pasków narzędziowych",
    "Ustawienie domyślnej przeglądarki internetowej",
    "A",
    op_kategoria[1]],
    ["Minimalną długość hasła użytkownika w systemie Windows można ustawić za pomocą polecenia",
    "net accounts",
    "net computer",
    "net user",
    "A",
    op_kategoria[1]],
    ["Który typ licencji uprawnia do dowolnych modyfikacji, kopiowania oraz rozpowszechniania po uiszczeniu dowolnej opłaty na rzecz autora?",
    "adware",
    "donationware",
    "postcardware",
    "B",
    op_kategoria[1]],
    ["Wskaż nieprawidłowy podział dysku MBR na partycje",
    "1 partycja podstawowa i 2 rozszerzone",
    "1 partycja podstawowa i 1 rozszerzona",
    "2 partycje podstawowe i 1 rozszerzona",
    "A",
    op_kategoria[1]],
    ["W systemach Windows można przypisać użytkownika do dowolnej grupy za pomocą przystawki",
    "fsmgmt",
    "certsrv",
    "lusrmgr",
    "C",
    op_kategoria[1]],
    [`Autor zamieszczonego oprogramowania zezwala na jego bezpłatne używanie jedynie w przypadku`,
    "przesłania przelewu z kwotą $1 na konto autora",
    "uiszczenia dobrowolnej opłaty na cele charytatywne",
    "wysłania tradycyjnej kartki pocztowej do autora",
    "C",
    op_kategoria[1],
    zdjecia[4]
    ],
    ["Wskaż nazwę usługi przełącznika, która umożliwi ustawienie wyższego priorytetu dla transmisji VoIP",
    "QoS",
    "SNMP",
    "SNMB",
    "A",
    op_kategoria[2]],
    ["Jaka przepływność definiuje standard sieci Ethernet IEEE 802.3z",
    "1 Gb/s",
    "10 Mb/s",
    "100 Gb/s",
    "A",
    op_kategoria[2]],
    ["Administrator Active Directory w domenie firma.local chce skonfigurować profil mobilny dla wszystkich użytkowników. Ma on być zapisywany na serwerze serwer1, w folderze pliki, udostępnionym w sieci jako dane$. Który z wpisów we właściwościach profilu użytkownika realizuje opisane wymagania?",
    "firma.localdane\%username%",
    "serwer1dane$\%username%",
    "firma.localpliki\%username%",
    "B",
    op_kategoria[2]],
    ["Który protokół służy do szyfrowanego terminalowego łączenia się ze zdalnym komputerem?",
    "SSJ",
    "SSL",
    "SSH",
    "C",
    op_kategoria[2]],
    ["Która funkcja przełącznika zarządzalnego umożliwia łączenie przełączników równocześnie kilkoma połączeniami fizycznymi w jedno połączenie logiczne w celu uzyskania większej przepustowości łącza?",
    "Agregacja łączy",
    "Port mirroring",
    "Zarządzanie pasmem",
    "A",
    op_kategoria[2]],
    [`Na rysunku przedstawiono fragment wyniku działania programu do testowania sieci. Wskazuje to na zastosowanie sieciowego polecenia testującego`,
    "route",
    "tracert",
    "netstat",
    "C",
    op_kategoria[2],
    zdjecia[5],
    ],
    [`Które urządzenie zostało przedstawione na rysunku?`,
    "Punkt dostępu",
    "Modem",
    "Ruter",
    "A",
    op_kategoria[2],
    zdjecia[6]
    ],
    [`Na zamieszczonym zrzucie panelu konfiguracyjnego rutera widać, że serwer DHCP`,
    "przydziela adresy IP z zakresu 192.168.1.1 - 192.168.1.100",
    "może przydzielić maksymalnie 10 adresów IP",
    "przydziela adresy IP z zakresu 192.168.1.1 - 192.168.1.10",
    "B",
    op_kategoria[2],
    zdjecia[7]
    ],
    ["Który ze standardów Gigabit Ethernet umożliwia budowę segmentów sieci o długości 550 m/5000 m z prędkością transmisji 1 Gb/s?",
    "1000Base-LX",
    "1000Base-T",
    "1000Base-SX",
    "A",
    op_kategoria[2]],
    ["Adresy IPv4 klasy B w pierwszym oktecie zawierają liczby z zakresu",
    "od 64 do 127",
    "od 128 do 191",
    "od 32 do 63",
    "B",
    op_kategoria[2]],

    [`W przedstawionym fragmencie kwerendy języka SQL, komenda SELECT ma za zadanie zwrócić`,
    "liczbę wierszy",
    "średnią w kolumnie wartosc",
    "średnią tabeli",
    "A",
    op_kategoria[3],
    zdjecia[8]
    ],
    ["W celu dodania rekordu do tabeli Pracownicy należy użyć polecenia SQL",
    `INSERT INTO Pracownicy VALUES ("Jan", "Kowalski");`,
    "INSERT VALUES (Jan; Kowalski) INTO Pracownicy;",
    "INSERT (Jan), (Kowalski) INTO TABLE Pracownicy;",
    "A",
    op_kategoria[3]],
    ["W bazie danych sklepu komputerowego istnieje tabela komputery. Aby zdefiniować raport wyświetlający dla dowolnego zbioru danych tabeli, jedynie pola tabeli dla komputerów, w których jest nie mniej niż 8 GB pamięci, a procesor to Intel, można posłużyć sie kwerendą",
    `SELECT * FROM komputery WHERE procesor = "Intel" AND pamiec >= 8;`,
    `SELECT * FROM komputery WHERE procesor = "Intel" OR pamiec >= 8;`,
    `SELECT * FROM komputery WHERE procesor = "Intel" OR pamiec < 8;`,
    "A",
    op_kategoria[3]],
    ["Relacja w bazach danych jest",
    "algebraicznym połączeniem tabel",
    "logicznym połączeniem tabel",
    "połączeniem dwóch pól jednej tabeli",
    "B",
    op_kategoria[3]],
    ["W celu stworzenia relacji wiele do wielu łączącej tabele A i B wystarczy, że",
    "wiele rekordów z tabeli A zduplikuje się w tabeli B",
    "zdefiniuje się trzecią tabelę z kluczami obcymi do tabel A i B",
    "tabela A będzie zawierała te same pola co tabela B",
    "B",
    op_kategoria[3]],
    ["Który z obiektów relacyjnej bazy danych, będący kodem języka SQL, może być wywoływany w zapytaniach modyfikujących kolumny danych widoczne jako tabela, bez względu na to czy jest tworzony programowo, czy dynamicznie?",
    "Funkcja zdefiniowana",
    "Wyzwalacz",
    "Procedura składowa",
    "A",
    op_kategoria[3]],
    ["Klucz obcy w tabeli jest tworzony po to, aby",
    "umożliwić jednoznaczną identyfikację rekordu w tabeli",
    "łączyć go z innymi kluczami obcymi tabeli",
    "zdefiniować relację 1..n wiążącą go z kluczem głównym innej tabeli",
    "C",
    op_kategoria[3]],
    ["W języku SQL aby zmodyfikować dane w tabeli, należy posłużyć się poleceniem",
    "UPDATE",
    "SELECT",
    "CREATE",
    "A",
    op_kategoria[3]],
    ["Baza danych 6-letniej szkoły podstawowej zawiera tabelę szkola z polami: imie, nazwisko, klasa. Wszyscy uczniowie klas 1-5 zdali do następnej klasy. Aby zwiększyć wartość w polu klasa o 1 należy użyć polecenia",
    "UPDATE szkola SET klasa=klasa+1 WHERE klasa>=1 AND klasa <=5;",
    "UPDATE nazwisko, imie SET klasa=klasa+1 WHERE klasa>1 OR klasa<5;",
    "SELECT szkola FROM klasa=klasa+1 WHERE klasa >=1 AND klasa <=5;",
    "A",
    op_kategoria[3]],
    ["W języku SQL, aby stworzyć tabelę, należy zastosować polecenie",
    "ALTER TABLE",
    "INSERT TABLE",
    "CREATE TABLE",
    "C",
    op_kategoria[3]],
    ["Co oznacza skrót TFT?",
    "Teams fight Teams",
    "Teams for Tactics",
    "Teamfight Tactics",
    "C",
    op_kategoria[4]],
    ["Kto stworzył Blitzcranka?",
    "Wiktor",
    "dr Mundo",
    "Camille",
    "A",
    op_kategoria[4]],
    ["",
    "",
    "",
    "",
    "C",
    op_kategoria[4]],
    ["W którym roku została wydana gra?",
    "2010",
    "2009",
    "2011",
    "B",
    op_kategoria[4]],
    ["Jak nazwano mapę 3vs3 po angielsku?",
    "Twisted Treeline",
    "Forbidden Forest",
    "Summoner’s Rift",
    "A",
    op_kategoria[4]],
    ["W jakiej klasie championów należy Kalista?",
    "Strzelec",
    "Mag",
    "Wojownik",
    "A",
    op_kategoria[4]]
]