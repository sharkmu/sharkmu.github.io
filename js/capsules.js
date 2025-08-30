function renderCapsules() {
    if (localStorage.getItem("capsule") != null)
    {
        const list = document.getElementById("capsuleList");
        list.innerHTML = "";

        const data = JSON.parse(localStorage.getItem("capsule")) || [];

        for (let i = data.length - 1; i >= 0; i--) 
        {
            const li = document.createElement("li");
            li.textContent = data[i];
            list.appendChild(li);
        }
    }
}

window.onload = renderCapsules;