document.querySelector('.marker')
  .innerText = (new Date()).toLocaleTimeString();

document.querySelector('.get-ajax-html')
    .addEventListener('click', getHtmlAjax);

function getHtmlAjax() {
    const XHR_STATE_FINISHED = 4;
    const HTTP_STATUS_OK = 200;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XHR_STATE_FINISHED
            && xhr.status === HTTP_STATUS_OK) {
               document.querySelector('.html-container')
                 .innerHTML = xhr.responseText;
        }
    }

    const clientName = Math.random() > 0.5 ? 'john' :'alice';
    xhr.open('GET', `client-data-${clientName}.html`, true);
    xhr.send();
}

document.querySelector('.fetch-html')
    .addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('client-data-alice.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-container')
                 .innerHTML = html );
}