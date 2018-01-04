# fetch() &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Zadanie (~ 15min - 25min)

Dołącz polyfill `fetch()`.

Stwórz komponent `BookInfo`, który przez props przyjmuje ISBN książki (`isbn`).

Za pomocą `fetch()` wykonaj zapytanie na adres otwartego API:
 > `https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}`
 
Gdzie zamiast `numerISBN` podasz ISBN przekazany w prosp.

Otrzymasz w odpowiedzi JSON, a z niego obiekt, w którym interesuje Cię tablica pod kluczem `items`, a w niej pierwszy element - obiekt z informacją o książce.

Niech komponent wyrenderuje w `div` element `h1` z tytułem (jest w tym obiekcie pod kluczem `volumeInfo.title`.

Pamiętaj o zablokowaniu wyświetlania komponentu, dopóki nie otrzymasz odpowiedzi z serwera.

Przetestuj swój komponent w ten sposób:

```JSX
<BookInfo isbn="0747532699" />
```

### Zadanie - dodatkowe (~ 15min - 35min)

> Aby poprawnie wykonać to zadanie musisz mieć zainstalowany `JsonServer`.
> 
> Uruchom go w katalogu projektu. Znajduje się tam znany Ci plik `db.json` z gotową bazą lokalną samochodów.

Dołącz polyfill `fetch()`.

Stwórz komponent `CarsDbManager`.

Za pomocą `fetch()` wykonaj zapytanie do swojego lokalnego serwera, tak, aby pobrać listę wszystkich aut.

Następnie zbuduj listę (pamiętaj o odpowiednich kluczach), w której będziesz wyświetlał dla każdego auta markę (`brand`), model (`name`) oraz przycisk "Sprzedany".

Po kliknięciu na ten przycisk powinieneś wykonać odpowiednie zapytanie, które usunie daną pozycję z bazy lokalnej. Następnie odśwież widok, tak, żeby odzwierciedlić zmiany.

Niech komponent wyrenderuje w `div` element `ul` z elementami listy samochodów.

Pamiętaj o zablokowaniu wyświetlania komponentu, dopóki nie otrzymasz odpowiedzi z serwera.

Przetestuj swój komponent.
