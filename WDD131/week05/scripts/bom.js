const input = document.querySelector("input");
const button = document.querySelector("#add");
const list = document.querySelector("#list");


function buttonEvent() {
    if (input.value.trim() !== "")
    {   const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        function deleteButton1()
        {
            list.removeChild(li);
            input.focus();
        };
        deleteButton.addEventListener("click",deleteButton1)
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
    };
}
button.addEventListener("click", () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        input.value = '';
        input.focus();
    }
});
const chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {displayList(chapter)    
});

function displayList(item) {
    const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        function deleteButton1()
        {
            list.removeChild(li);
            input.focus();
        };
        deleteButton.addEventListener("click",deleteButton1)
        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList()
}