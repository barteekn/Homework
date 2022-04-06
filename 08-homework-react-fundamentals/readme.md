# Zadanie 8 - React - fundamenty

## Treść zadania
### Zadanie 1 - 5pkt
1. Wykonaj aplikację React.
2. Aplikacja powinna mieć dostępne ścieżki:
   1. `/`
   2. `/about`
   3. `/offer`
   4. `/contact`
3. Aplikacja powinna być zbudowana z wykorzystaniem re-używalnych komponentów:
   1. `Header` - nagłówek na każdej podstronie
   2. `Paragraph` - blok tekstu na podstronach: `offer` oraz `about`
   3. `List` - lista elementów `li` przedstawiająca ofertę na podstronie `offer`
   4. `Footer` - stopka na każdej podstronie
   5. `Nav` - nawigacja dostępna na każdej podstronie.
4. Link do aktywnej podstrony powinien się podświetlać.
5. Nagłówek oraz nawigacja powinny scrollować się razem ze stroną - domyślny `position: relative` oraz pojawić się użytkownikowi po zescrolowaniu 600px - `position: fixed`.
6. Aplikacja powinna wykorzystywać `styled-components`.

### Zadanie 1b - dodatkowe
1. Wykonaj komponent `Layout` oraz stwórz zagnieżdżony routing - wykorzystaj komponent `<Outlet />` - pochodzący z biblioteki `react-router-dom`.
2. Celem zadania jest wyeliminowanie powtarzających się użyć komponentu `Header`, `Footer` oraz `Nav` z wykorzystaniem utworzonego Layoutu.
3. Wykorzystaj dokumentację biblioteki: `https://reactrouter.com/docs/en/v6/api#outlet` oraz `https://reactrouter.com/docs/en/v6/getting-started/overview#nested-routes`

### Zadanie 2 - 10pkt
1. Wykorzystując aplikację z Zadania 1, utwórz podstronę `Blog` dostępną pod adresem `/blog`.
2. Po kliknięciu w post, powinna być dostępna podstrona danego postu, dostępna pod adresem: `/blog/:id`.
3. Aplikacja powinna umożliwiać bezpośrednie wczytanie podstrony konkretnego postu.
4. Utwórz komponent `CommentForm` umożliwiający dodanie komentarza do postu. Formularz powinien być dostępny na podstronie konkretnego postu.
5. Po dodaniu komentarza, komentarz powinien wyświetlić się użytkownikowi.
6. Po odświeżeniu strony lista komentarzy powinna być nadal widoczna - wykrozystaj API zbudowane na Json Server lub LocalStorage.

### Zadanie 2b - dodatkowe
1. Podczas pobierania danych - użytkownikowi powinien się wyświetlić `loader` - informujący o pobieraniu danych. Dla ułatwienia możesz ustawić opoóźnienie 10s.
2. W przypadku niepoprawnego pobrania danych użytkownikowi powinien wyświetlić się komunikat o błędzie komunikacji z API.

## Założenia
1. Nazwy funkcji, pola obiektów, nazwy zmiennych i stałych powinny być zapisane po angielsku.
2. Wykorzystaj właśne api JSON Server lub gotowe api jak JSONPlaceholder.


## Termin
Nienegocjowalnym terminem oddania zadania jest 10.04.2022, godzina 23:59.