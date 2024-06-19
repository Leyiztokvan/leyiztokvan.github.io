document.addEventListener("DOMContentLoaded", function() {
    const topicsList = document.getElementById('topics-list');
    const topicContent = document.getElementById('topic-content');
    const githubLink = document.getElementById('github-link');

    topicsList.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.tagName === 'A') {
            const topic = event.target.getAttribute('data-topic');
            updateTopicContent(topic);
        }
    });

    githubLink.href = "https://github.com/Leyiztokvan/javascript_beg2adv"; // Replace with your GitHub repository link

    function updateTopicContent(topic) {
        // Simulate loading content (replace with actual content retrieval if needed)
        let content = '';

        switch (topic) {
            case 'variables':
                content = "<p>In JavaScript, variables are used to store data values. They can be declared using 'var', 'let', or 'const'.</p>";
                break;
            case 'functions':
                content = "<p>Functions in JavaScript allow you to encapsulate reusable code blocks. They can be declared using the 'function' keyword.</p>";
                break;
            case 'loops':
                content = "<p>Loops in JavaScript, such as 'for' and 'while' loops, allow you to iterate over data structures and execute code multiple times.</p>";
                break;
            case 'objects':
                content = "<p>Objects in JavaScript are used to store collections of data and more complex entities. They consist of key-value pairs.</p>";
                break;
            default:
                content = "<p>Select a topic to learn more</p>";
        }

        topicContent.innerHTML = `
            <h2>${capitalizeFirstLetter(topic)}</h2>
            ${content}
        `;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
