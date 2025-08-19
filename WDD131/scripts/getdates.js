
    const year = document.querySelector("#currentyear"),
    oLastModif = document.querySelector("#modification"),
    today = new Date, modification = new Date(document.lastModified); year.innerHTML = `<span 
        class="highlight">${today.getFullYear()}</span>`, oLastModif.innerHTML = `<span 
        class="highlight">${modification.toLocaleString()}</span>`;