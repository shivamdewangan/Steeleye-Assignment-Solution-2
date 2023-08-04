const highlightHTMLContent = require("../src/main");

test('testing simple additions', () => {
    expect(highlightHTMLContent(1, 1)).toBe(true);
    expect(highlightHTMLContent(2, 2)).toBe(false);
});