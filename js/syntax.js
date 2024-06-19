/* Functions for syntax.html */
var topics = ["Output", "Statements", "Variables", "TOPIC_4"];
var contents = [
    // Note: The paths are relative to the location of topics-grid.html,
    // not the location of the topics-grid.js file. 
    "syntax-subviews/syntax-output.html",
    "syntax-subviews/syntax-statements.html",
    "syntax-subviews/syntax-variables.html",
    ""
];

document.addEventListener("DOMContentLoaded", function() {
    fill_topics(topics.length);
    fill_topic_content(contents.length);
});

function fill_topics(nb_topics) {
    if (nb_topics === topics.length) {
        for (let i = 0; i < topics.length; i++) {
            const topic_id = 'topic_' + (i + 1);
            const topic_title = topics[i];
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
                create_object(content_id, content_url);
            }
        }
    }
}

function replace_text(id, text) {
    document.getElementById(id).innerHTML = text;
}

function replace_html(id, html) {
    document.getElementById(id).innerHTML = html;
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
    objectTag.height = '400px';

    // Append the object tag to the element
    element.appendChild(objectTag);
}

