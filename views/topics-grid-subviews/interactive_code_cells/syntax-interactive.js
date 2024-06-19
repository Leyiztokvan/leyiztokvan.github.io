var topics = ["Output", "Statements", "Variables", "TOPIC_4"];
var contents = [
    "../syntax-subviews/syntax-output.html",
    "../syntax-subviews/syntax-statements.html",
    "../syntax-subviews/syntax-variables.html",
    ""
];

function initializeContent() {
    console.log("Initializing content");
    fill_topics(topics.length);
    fill_topic_content(contents.length);
    add_navigation_listeners();
}

function fill_topics(nb_topics) {
    if (nb_topics === topics.length) {
        for (let i = 0; i < topics.length; i++) {
            const topic_id = 'topic_' + (i + 1);
            const topic_title = topics[i];
            console.log("Replacing text for:", topic_id, "with:", topic_title);
            replace_text(topic_id, topic_title);
        }
    }
}

function fill_topic_content(nb_contents) {
    if (nb_contents === contents.length) {
        for (let i = 0; i < contents.length; i++) {
            const content_id = 'content_' + (i + 1);
            const content_url = contents[i];
            if (content_url) {
                console.log("Creating object for:", content_id, "with URL:", content_url);
                create_object(content_id, content_url);
            }
        }
    }
}

function replace_text(id, text) {
    var element = document.getElementById(id);
    if (element) {
        element.innerText = text;
        console.log("Replaced text for:", id, "with:", text);
    } else {
        console.error("Element not found:", id);
    }
}

function create_object(id, url) {
    var element = document.getElementById(id);
    if (element) {
        element.innerHTML = "";

        const objectTag = document.createElement('object');
        objectTag.type = 'text/html';
        objectTag.data = url;
        objectTag.width = '100%';
        objectTag.height = '100%';

        element.appendChild(objectTag);
        console.log("Created object for:", id, "with URL:", url);
    } else {
        console.error("Element not found:", id);
    }
}

function navigate_to(path) {
    console.log("Navigating to:", path);
    window.location.href = path;
}

function add_navigation_listeners() {
    for (let i = 0; i < topics.length; i++) {
        const topic_id = 'topic_' + (i + 1);
        const content_url = contents[i];
        if (content_url) {
            var element = document.getElementById(topic_id);
            if (element) {
                element.addEventListener('click', function() {
                    navigate_to(content_url);
                });
                console.log("Added listener to:", topic_id);
            } else {
                console.error("Element not found for listener:", topic_id);
            }
        }
    }
}

// Call initializeContent if the script runs normally
document.addEventListener("DOMContentLoaded", initializeContent);
