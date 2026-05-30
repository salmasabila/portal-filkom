// Menampilkan tanggal hari ini

const today = new Date();

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

const dateElement = document.getElementById("current-date");

if(dateElement){
    dateElement.innerHTML = today.toLocaleDateString('id-ID', options);
}
const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
    if(link.getAttribute("href") === currentPage){
        link.classList.add("active");
    }
});