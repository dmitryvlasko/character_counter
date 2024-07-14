const textarea = document.querySelector('textarea');
const characters_counter = document.querySelector('.characters-count');
const without_spaces_counter = document.querySelector('.without-spaces-count');
const words_counter = document.querySelector('.words-count');
const sentences_counter = document.querySelector('.sentences-count');
const paragraphs_counter = document.querySelector('.paragraphs-count');


textarea.addEventListener('input', onInputCharacters)

function onInputCharacters(event) {
    const length = event.target.value.length;
    characters_counter.textContent = length;
}

textarea.addEventListener('input', onInputWithoutSpaces)

function onInputWithoutSpaces(event) {
    const length = event.target.value.replace(/\s/g, '').replace(/\n/g, '').length;
    without_spaces_counter.textContent = length;
}

textarea.addEventListener('input', onInputWords)

function onInputWords(event) {
    const length = event.target.value.replace(/[&\\/#,+\-=—№|()$~%.'":;@*?!<>{}]/g, '').replace(/^\s*/g, '').replace(/\s*$/, '').split(/\s+/).length;
    words_counter.textContent = length;
    if (textarea.value.length == 0) {
        words_counter.textContent = '0';
    }
}

textarea.addEventListener('input', onInputSentences)

function onInputSentences(event) {
    const length = event.target.value.replace(/(\.+|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)(.)/gm, "$1$2|").split("|").length;
    sentences_counter.textContent = length;
    if (textarea.value.length == 0) {
        sentences_counter.textContent = '0';
    }
}

textarea.addEventListener('input', onInputParagraphs)

function onInputParagraphs(event) {
    const length = event.target.value.replace(/(\.+|\!|\?)(\"*|\'*|\)*|}*|]*)(\s*)(\n|\r|\r\n)(.)/gm, "$1$2|").split("|").length;
    paragraphs_counter.textContent = length;
    if (textarea.value.length == 0) {
        paragraphs_counter.textContent = '0';
    }
}