/* Functions for topics-grid.html */

var topics = ["Hello World", "Lightbulb", "JavaScripts Scripts", "JavaScript Syntax"];
var contents = [
    "topics-grid-subviews/hello-world.html",
    "topics-grid-subviews/lightbulb.html",
    "topics-grid-subviews/script.html",
    "topics-grid-subviews/syntax.html",
    // Add empty strings for the remaining items if you have fewer contents
];

var codes = [
    "topics-grid-subviews/interactive_code_cells/hello-world-interactive.html",
    "topics-grid-subviews/interactive_code_cells/lightbulb-interactive.html",
    "topics-grid-subviews/interactive_code_cells/script-interactive.html",
    "topics-grid-subviews/interactive_code_cells/syntax-interactive.html",
    // Add empty strings for the remaining items if you have fewer contents

];

document.addEventListener("DOMContentLoaded", function() {
    fill_topics(topics.length);
    fill_topic_content(contents.length);

    // Add event listeners for navigation
    add_navigation_listeners();
    add_code_button_navigation_listeners() 
});

function fill_topics(nb_topics) {
    if (nb_topics === topics.length) {
        for (let i = 0; i < topics.length; i++) {
            const topic_id = 'topic-' + (i + 1);
            const topic_title = topics[i];
            replace_text(topic_id, topic_title);
        }
    }
}

function fill_topic_content(nb_contents) {
    if (nb_contents === contents.length) {
        for (let i = 0; i < contents.length; i++) {
            const content_id = 'content-' + (i + 1);
            const content_url = contents[i];
            if (content_url) {
                create_object(content_id, content_url);
            }
        }
    }
}

function replace_text(id, text) {
    document.getElementById(id).innerText = text;
}

function create_object(id, url) {
    // Clear the content of the element first
    var element = document.getElementById(id);
    element.innerHTML = "";

    // Create the object tag
    const objectTag = document.createElement('object');
    objectTag.type = 'text/html';
    objectTag.data = url;
    objectTag.width = '100%';
    objectTag.height = '100%';
    //objectTag.width = '100%';
    //objectTag.height = '400px'; // or whatever height you prefer

    // Append the object tag to the element
    element.appendChild(objectTag);
}

function navigate_to(path) {
    window.location.href = path;
}

function add_navigation_listeners() {
    for (let i = 0; i < topics.length; i++) {
        const topic_id = 'topic-' + (i + 1);
        const content_url = contents[i];
        if (content_url) {
            document.getElementById(topic_id).addEventListener('click', function() {
                navigate_to(content_url);
            });
        }
    }
}


function add_code_button_navigation_listeners() {
    for (let i = 0; i < codes.length; i++) {
        const code_id = 'code-' + (i + 1);
        const code_url = codes[i];
        if (code_url) {
            document.getElementById(code_id).addEventListener('click', function() {
                navigate_to(code_url);
            });
        }
    }
}