    "use strict";

    const input = document.querySelector("#enterTextInp");
    const button = document.querySelector("#click");
    const container = document.querySelector("#container")

    let wordCount = new Map();

    const savedData = localStorage.getItem('data')

    if (savedData) {
        const parseData = JSON.parse(savedData)

        renderList()
    }

    button.addEventListener("click", () => {
        const word = input.value.toLowerCase().trim()
        
        if (word === '') return
        
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) +  1)
        } else {
            wordCount.set(word, 1)
        }

        localStorage.setItem('data', JSON.stringify([...wordCount]))

        renderList()
        input.value = '';
    })

    function renderList() {
        container.innerHTML = '';

        wordCount.forEach((count, word) => {
        const li = document.createElement('li')
        li.textContent = `${word}: ${count}\n`
        container.appendChild(li)
        })  
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            button.click()
        }
    })