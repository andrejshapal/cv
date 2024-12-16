/*
 * Andrejs Šapals as24193
 */

window.addEventListener("DOMContentLoaded", (event) => {
  const genreList = document.getElementById("genre-list");
  const authorNationalityList = document.getElementById("country-list");
  const showButton = document.getElementById("show");
  const wrongYear = document.getElementById("wrong-year");
  const wrongSearch = document.getElementById("wrong-search");

  const uniqueGenreList = [];
  const uniqueAuthorNationality = [];
  books.map((book) => {
    uniqueGenreList.push(book.genre);
    uniqueGenreList.sort();
    if (Array.isArray(book.author)) {
      book.author.map((author) =>
        uniqueAuthorNationality.push(author.nationality)
      );
    } else {
      uniqueAuthorNationality.push(book.author.nationality);
    }
    uniqueAuthorNationality.sort();
  });
  [...new Set(uniqueGenreList)].map((genre) =>
    genreList.add(new Option(genre))
  );
  [...new Set(uniqueAuthorNationality)].map((country) =>
    authorNationalityList.add(new Option(country, country))
  );

  showButton.addEventListener("click", () => {
    const generValue = document.getElementById("genre-list").value;
    const authorNationalityValue =
      document.getElementById("country-list").value;
    const pubYearFromValue = document.getElementById(
      "publication-year-from"
    ).value;
    const pubYearFromUntil = document.getElementById(
      "publication-year-until"
    ).value;
    const showOnlyAvailableCheck = document.getElementById("available").checked;
    const bookSearcheValue = document.getElementById("search").value;
    const includeAuthorCheck = document.getElementById("author-info").checked;
    const tableBody = document.getElementById("table-body");
    const tableHead = document.getElementById("table-head");
    let tableBodyContent = "";

    if (
      (pubYearFromValue > 0 &&
        pubYearFromUntil > 0 &&
        pubYearFromValue <= pubYearFromUntil) ||
      (pubYearFromValue > 0 && !pubYearFromUntil) ||
      (pubYearFromUntil > 0 && !pubYearFromValue) ||
      (!pubYearFromValue && !pubYearFromUntil)
    ) {
      wrongYear.innerHTML = "";

      if (bookSearcheValue.length > 2 || bookSearcheValue.length === 0) {
        wrongSearch.innerHTML = "";
        if (includeAuthorCheck) {
          tableHead.innerHTML = `
        <tr>
          <th>Title</th>
          <th>Authors</th>
          <th>Published</th>
          <th>Genre</th>
          <th>ISBN</th>
          <th>Total copies/available copies</th>
        </tr>
        `;
        } else {
          tableHead.innerHTML = `
        <tr>
          <th>Title</th>
          <th>Published</th>
          <th>Genre</th>
          <th>ISBN</th>
          <th>Total copies/available copies</th>
        </tr>
        `;
        }

        const filteredBooks = filterBooks(
          books,
          generValue,
          authorNationalityValue,
          pubYearFromValue,
          pubYearFromUntil,
          showOnlyAvailableCheck,
          bookSearcheValue
        );
        for (book in filteredBooks) {
          const title = filteredBooks[book].title;
          const authors = [];
          if (Array.isArray(filteredBooks[book].author)) {
            filteredBooks[book].author.map((author) =>
              authors.push(
                `${author.name} (${author.nationality}, ${author.birth_year})`
              )
            );
          } else {
            authors.push(
              `${filteredBooks[book].author.name} (${filteredBooks[book].author.nationality}, ${filteredBooks[book].author.birth_year})`
            );
          }

          const published = filteredBooks[book].publication_year;
          const genre = filteredBooks[book].genre;
          const isbn = filteredBooks[book].isbn;
          const copies =
            filteredBooks[book].available_copies +
            "/" +
            filteredBooks[book].total_copies;
          if (includeAuthorCheck) {
            tableBodyContent =
              tableBodyContent +
              `
          <tr>
            <td>${title}</td>
            <td>${authors.join(", ")}</td>
            <td>${published}</td>
            <td>${genre}</td>
            <td>${isbn}</td>
            <td>${copies}</td>
          </tr>
        `;
          } else {
            tableBodyContent =
              tableBodyContent +
              `
          <tr>
            <td>${title}</td>
            <td>${published}</td>
            <td>${genre}</td>
            <td>${isbn}</td>
            <td>${copies}</td>
          </tr>
        `;
          }
        }
        tableBody.innerHTML = tableBodyContent;
      } else {
        wrongSearch.innerHTML =
          "You should enter at least 3 symbols or leave empty.";
      }
    } else {
      wrongYear.innerHTML =
        "From should be before Until; In each field enter positive digits only or leave one/both fields empty;";
    }
  });
});

function filterBooks(
  books,
  generValue,
  authorNationalityValue,
  pubYearFromValue,
  pubYearFromUntil,
  showOnlyAvailableCheck,
  bookSearcheValue
) {
  if (generValue != "All") {
    books = books.filter((book) => book.genre === generValue);
  }
  if (authorNationalityValue != "All") {
    books = books.filter((book) => {
      let tmp = false;
      if (Array.isArray(book.author)) {
        book.author.map((author) => {
          if (author.nationality === authorNationalityValue) tmp = true;
        });
      } else {
        if (book.author === authorNationalityValue) tmp = true;
      }
      return tmp;
    });
  }
  if (pubYearFromValue) {
    books = books.filter((book) => book.publication_year >= pubYearFromValue);
  }
  if (pubYearFromUntil) {
    books = books.filter((book) => book.publication_year <= pubYearFromUntil);
  }
  if (showOnlyAvailableCheck) {
    books = books.filter((book) => book.available_copies > 0);
  }
  if (bookSearcheValue.length > 2) {
    const searchBookRegexp = new RegExp(
      `.*${bookSearcheValue.toLowerCase()}.*`
    );
    books = books.filter((book) => {
      let searchBookFields = book.title.toLowerCase();
      if (Array.isArray(book.author)) {
        book.author.map(
          (author) =>
            (searchBookFields =
              searchBookFields + " " + author.name.toLowerCase())
        );
      } else {
        searchBookFields =
          searchBookFields + " " + book.author.name.toLowerCase();
      }
      return searchBookFields.match(searchBookRegexp);
    });
  }
  return books;
}
