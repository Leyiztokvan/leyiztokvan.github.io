function executeCode(id) {
    const code = document.getElementById(id).value;
    const viewSection = document.getElementById('view-section');
    viewSection.innerHTML = code;

    // Delay to ensure the new HTML content is rendered
    setTimeout(() => {
        // Reload and execute syntax-interactive.js
        reloadScript('syntax-interactive.js', initializeInteractiveContent);
    }, 100); // Adjust the delay if necessary
}

function reloadScript(src, callback) {
    const oldScript = document.querySelector(`script[src="${src}"]`);
    if (oldScript) {
        oldScript.remove();
    }

    const newScript = document.createElement('script');
    newScript.src = src;
    newScript.defer = true;

    // Log script load start
    console.log(`Loading script: ${src}`);

    newScript.onload = () => {
        console.log(`Script loaded: ${src}`);
        if (callback) {
            callback();
        }
    };

    newScript.onerror = () => {
        console.error(`Failed to load script: ${src}`);
    };

    document.body.appendChild(newScript);
}

function initializeInteractiveContent() {
    if (typeof initializeContent === 'function') {
        initializeContent();
    } else {
        console.error('initializeContent function not found.');
    }
}
