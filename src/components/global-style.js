import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
}

body {
    margin: 0;
}

main {
    display: block;
}

h1,
h2,
h3 {
    margin: 0;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

p {
    margin: 0;
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

a {
    background-color: transparent;
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
}

b,
strong {
    font-weight: bolder;
}

code,
kbd,
samp {
    font-family: monospace, monospace;
    font-size: 1em;
}

small {
    font-size: 80%;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

img {
    border-style: none;
}

button,
input,
optgroup,
select,
textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

button,
input {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
}

fieldset {
    padding: 0.35em 0.75em 0.625em;
}

legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
}

progress {
    vertical-align: baseline;
}

textarea {
    overflow: auto;
}

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

 ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

details {
    display: block;
}

summary {
    display: list-item;
}

template {
    display: none;
}

[hidden] {
    display: none;
}

    :root {
        --1color: rgb(215, 255, 245);
        --0color: rgb(40, 0, 10);
        --artcl-title: 1.5em;
        --ml: 2.4em;
        --mr: 2.4em;
        --mt: 1.6em;
        --mb: 1.6em;
        --two-cols: 2fr 1fr;
        --grid-gap: 1em;
        --dm: max(16px, 1em);
    }
    * {
        box-sizing: border-box;
        
    }
    body {
        background-color: var(--1color);
        color: var(--1color);
        font-size: 1vw;
       
    }
    
    .wrap {
        min-height: 100vh;
        width: min(96vw, max(1000px, 73vw));
        margin: auto;
        display: grid;
        grid-template-areas: "head head"  ". side" ". side" ". ." "foot foot";
        grid-template-rows: max-content auto auto auto max-content;
        grid-template-columns: var(--two-cols);
        grid-gap: calc(2.4 * var(--dm));
        grid-gap: var(--grid-gap);
        @media (max-width: 600px) {
            grid-template-areas: "head"  "." "foot";
            grid-template-columns: 1fr;
        }
    }
    
    .header_mb {
        margin-bottom: calc(.6 * var(--dm));
    }
    .header_wrap {
        grid-area: head;
    }
    
    .sidebar_wrap {
        grid-area: side;
    }
    .footer_wrap {
        grid-area: foot;
    }
    .footer_mt {
        margin-top: calc(.6 * var(--dm));
    }
`

export default GlobalStyle