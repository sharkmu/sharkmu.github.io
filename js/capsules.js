function renderCapsules() {
    if (localStorage.getItem("capsule") != null)
    {
        const list = document.getElementById("capsuleList");
        list.innerHTML = "";

        const data = JSON.parse(localStorage.getItem("capsule")) || [];

        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    }
}

window.onload = renderCapsules;