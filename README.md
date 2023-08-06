# highlightHTMLContent

> Original source code.
> Some parts of README is generated using `online sources`.

The HTML Content Highlighter is a JavaScript utility that allows you to highlight specific sections of HTML content based on positions within a corresponding plain text. This can be useful for visually emphasizing certain parts of your HTML content.

## Paths

Find the source code in `./src/main.js`.

Find the test cases code in `./src/main.test.js`.

Find the example codes in the `./example/` directory.

## Example

Here's a step-by-step guide on how you can set this up:

1. Install all node packages if you haven't already.

    ```bash
    npm install
    ```

2. Run the `serve` package to view the example file on browser.

    ```bash
    npm run example
    ```

    This will run the `serve` package.

## Test

Here's a step-by-step guide on how you can test this up:

1. Install all node packages if you haven't already.

    ```bash
    npm install
    ```

2. Run the `test` command to test the sample test case on terminal.

    ```bash
    npm run test
    ```

    This will run the `jest` package and display the output in the terminal.

## Usage

1. Include the highlightHTMLContent function in your JavaScript code.

2. Call the highlightHTMLContent function with the following parameters:

   - htmlContent `string`: The HTML content you want to highlight sections within.
   - plainText `string`: The plain text corresponding to the sections you want to highlight.
   - plainTextPositions `{ start, end }[]`: An array of position objects, where each object specifies the start and end positions of the plain text to be highlighted.

    ```js
    const highlightedHTML = highlightHTMLContent(htmlContent, plainText, plainTextPositions);
    ```

    The function will return the htmlContent with the specified sections highlighted using the `<mark>` HTML tag.

## Sources and Examples

Sources and examples are taken from online sources like:

- Google
- Stack Overflow
- ChatGPT
