document.addEventListener("DOMContentLoaded", function () {
    var searchBtn = document.getElementById("searchBtn");
    var searchSection = document.getElementById("searchSection");
    var closeSearch = document.getElementById("closeSearch");
    var searchIcon = searchBtn.querySelector("i");

    searchBtn.addEventListener("click", function () {
        searchSection.classList.toggle("active");
        closeSearch.classList.toggle("active");
        if (searchSection.classList.contains("active")) {
            searchIcon.classList.remove("fa-search");
            searchIcon.classList.add("fa-times");
        } else {
            searchIcon.classList.remove("fa-times");
            searchIcon.classList.add("fa-search");
        }
    });

    closeSearch.addEventListener("click", function () {
        searchSection.classList.remove("active");
        closeSearch.classList.remove("active");
        searchIcon.classList.remove("fa-times");
        searchIcon.classList.add("fa-search");
    });
});
