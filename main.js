"use strict";

const input = document.querySelector("#enterTextInp");
const button = document.querySelector("#click");

let wordCount = new Map();

button.addEventListener("click", () => {
    const word = input.value.toLowerCase().trim()

    if (word === '') return
    let result = ''

    if (wordCount.has(word)) {
        wordCount.set(word, wordCount.get(word) +  1)
    } else {
        wordCount.set(word, 1)
    }

    wordCount.forEach((count, word) => {
        result += `${word}: ${count}\n`
    })

    console.log(wordCount)
})