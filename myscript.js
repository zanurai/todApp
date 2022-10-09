window.addEventListener("load", () => {
    const form = document.querySelector("#new-app");
    const input = document.querySelector("#new-text");
    const task = document.querySelector("#apps");

    console.log(form);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const todoApp = input.value;

        if (!todoApp) {
            alert("hi this is my todo app");
            return;
        }/* else {
            console.log("success");
        }*/

        const app_el = document.createElement("div");
        app_el.classList.add("todoApp");

        const app_content_el = document.createElement("div");
        app_content_el.classList.add("content");

        //app_content_el.innerText = todoApp;

        app_el.appendChild(app_content_el);

        const app_input_el = document.createElement("input");
        app_input_el.classList.add("texts");
        app_input_el.type = "text";
        app_input_el.value = todoApp;
        app_input_el.setAttribute("readonly", "readonly");

        app_content_el.appendChild(app_input_el);

        const app_action_el = document.createElement("div");
        app_action_el.classList.add("action");

        const app_edit_el = document.createElement("button");
        app_edit_el.classList.add("edit");

        app_edit_el.innerHTML = "Edit";
        const app_delete_el = document.createElement("button");
        app_delete_el.classList.add("delete");

        app_delete_el.innerHTML = "Delete";

        app_action_el.appendChild(app_edit_el);
        app_action_el.appendChild(app_delete_el);

        app_el.appendChild(app_action_el);


        task.appendChild(app_el);

        input.value = " ";

        app_edit_el.addEventListener("click", () => {
            if (app_edit_el.innerText.toLowerCase() == "edit") {
                app_input_el.removeAttribute("readonly")
                app_input_el.focus();
                app_edit_el.innerText = "save";
            } else {
                app_input_el.setAttribute("readonly", "readonly");
                app_edit_el.innerText = "Edit";
            }
        });

        app_delete_el.addEventListener("click", () => {
            task.removeChild(app_el);
        })
    })
})