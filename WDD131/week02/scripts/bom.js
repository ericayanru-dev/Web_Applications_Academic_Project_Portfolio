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
button.addEventListener("click", buttonEvent);
