// API giả lập danh sách phim
const movies = [
    { id: 1, title: "Avengers: Endgame", img: "https://via.placeholder.com/200", desc: "Phim siêu anh hùng của Marvel." },
    { id: 2, title: "Interstellar", img: "https://via.placeholder.com/200", desc: "Phim khoa học viễn tưởng của Christopher Nolan." },
    { id: 3, title: "Inception", img: "https://via.placeholder.com/200", desc: "Phim hack não về giấc mơ." },
    { id: 4, title: "Joker", img: "https://via.placeholder.com/200", desc: "Câu chuyện về phản diện nổi tiếng nhất Gotham." }
];

// Hiển thị danh sách phim
function displayMovies(filteredMovies = movies) {
    const list = document.getElementById("movie-list");
    list.innerHTML = "";
    filteredMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "movie-card";
        movieCard.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieCard.onclick = () => showDetail(movie);
        list.appendChild(movieCard);
    });
}

// Tìm kiếm phim
function searchMovies() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filteredMovies);
}

// Hiển thị chi tiết phim
function showDetail(movie) {
    document.getElementById("movie-list").classList.add("hidden");
    document.getElementById("movie-detail").classList.remove("hidden");

    const content = document.getElementById("movie-content");
    content.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.img}" alt="${movie.title}">
        <p>${movie.desc}</p>
    `;
}

// Đóng chi tiết phim
function closeDetail() {
    document.getElementById("movie-list").classList.remove("hidden");
    document.getElementById("movie-detail").classList.add("hidden");
}

// Chạy khi trang load
displayMovies();