/**
 * Strips the prefix from the keys of the given key-value pairs
 * @param {string} htmlContent - HTML content which needs to be highlighted
 * @param {string} plainText - This plain text is extracted from htmlContent
 * @param {array} plainTextPositions - Array of Objects with start and end positions of words in plainText (Not the positions in HTML)
 * @returns {string} Using the positions in plainText, find the appropriate positions in htmlContent, highlight the content and return it
 */
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

// export default highlightHTMLContent;

module.exports = highlightHTMLContent;