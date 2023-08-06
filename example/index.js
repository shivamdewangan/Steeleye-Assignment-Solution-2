// Creating a demo use case to utilize the function
const section = document.querySelector('section');
section.innerHTML = highlightHTMLContent(section.innerHTML, section.innerText, [
    {
        start: 241,
        end: 247,
    },
    {
        start: 517,
        end: 524,
    },
]);

// Duplicate code from `./src/main.js`

function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
    plainText = plainText.replace(/[\n\r]+|[\s]{2,}/g, ' ').replace(/  +/g, ' ').trim();
    for (let position of plainTextPositions) {
        const word = plainText.slice(position.start, position.end);
        let offsetIndex = getIndexOfWord(htmlContent, word, position.start);
        if (offsetIndex === -1) continue;
        htmlContent = htmlContent.slice(0, offsetIndex) + `<mark>${word}</mark>` + htmlContent.slice(offsetIndex + word.length);
    }
    return htmlContent;
}

function getIndexOfWord(inputString, targetWord, start) {
    let index = inputString.indexOf(targetWord);

    while (index !== -1) {
        if (index > start) break;
        index = inputString.indexOf(targetWord, index + 1);
    }

    return index;
}