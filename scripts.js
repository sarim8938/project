document.addEventListener('DOMContentLoaded', () => {
    const podcasts = [
        {
            title: "Podcast One",
            description: "This is the first podcast.",
            image: "https://via.placeholder.com/150",
            link: "#"
        },
        {
            title: "Podcast Two",
            description: "This is the second podcast.",
            image: "https://via.placeholder.com/150",
            link: "#"
        },
        {
            title: "Podcast Three",
            description: "This is the third podcast.",
            image: "https://via.placeholder.com/150",
            link: "#"
        }
    ];

    const podcastsContainer = document.getElementById('podcasts');

    podcasts.forEach(podcast => {
        const podcastElement = document.createElement('div');
        podcastElement.classList.add('podcast');

        podcastElement.innerHTML = `
            <img src="${podcast.image}" alt="${podcast.title}">
            <h2>${podcast.title}</h2>
            <p>${podcast.description}</p>
            <a href="${podcast.link}" target="_blank">Listen Now</a>
        `;

        podcastsContainer.appendChild(podcastElement);
    });
});