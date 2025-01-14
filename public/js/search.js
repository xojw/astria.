document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector("iframe");
    const div = document.querySelector(".search-container");
    const navbar = document.querySelector(".navbar");
    const searchInput1 = document.getElementById("searchInput");
    const searchInput2 = document.getElementById("searchInputt");
    const loadingScreen = document.querySelector(".loading-screen");

    navbar.style.display = "none";
    iframe.style.display = "none";
    searchInput2.style.display = "block";

    const searchInputs = [searchInput1, searchInput2];
    searchInputs.forEach((input) => {
        input.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                handleSearch(input.value);
            }
        });
    });

    async function handleSearch(query) {
        const searchURL = search(query);
        preloadResources(searchURL);

        showLoadingScreen();
        div.style.display = "none";
        iframe.style.display = "block";

        iframe.src = await getUrlWithDelay(searchURL);

        iframe.onload = () => {
            hideLoadingScreen();
            navbar.style.display = "block";
            generateRandomId();
        };
    }

    function search(input) {
        try {
            return new URL(input).toString();
        } catch (err) {}
        try {
            const url = new URL(`https://${input}`);
            if (url.hostname.includes(".")) return url.toString();
        } catch (err) {}

        const url = `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;
        return url;
    }

    function showLoadingScreen() {
        loadingScreen.style.display = "flex";
        loadingScreen.querySelector(".loading-text").textContent = "Almost there! We're getting your content ready...";
    }

    function hideLoadingScreen() {
        loadingScreen.querySelector(".loading-text").textContent = "Ready!";
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 200);
    }

    function preloadResources(url) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = url;
        link.as = "fetch";
        document.head.appendChild(link);
    }

    function getUrlWithDelay(url) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(__uv$config.prefix + __uv$config.encodeUrl(url));
            }, 0);
        });
    }

    function generateRandomId() {
        var randomId = '';
        var characters = '0123456789abcdefghijklmnopqrstuvwxyz';

        for (var i = 0; i < 5; i++) { 
            randomId += characters.charAt(Math.floor(Math.random() * 36)); 
        }

        history.replaceState({}, '', '/course?id=' + randomId); 
    }
});
