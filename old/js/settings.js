function setActiveLanguage()
{
    langStorage = localStorage.getItem("language");
    magyar = document.getElementById("magyar");
    english = document.getElementById("english");
    if (langStorage == "hu")
    {
        magyar.classList.add("active");
    }
    else 
    {
        english.classList.add("active");
    }
}

window.onload = setActiveLanguage();

function changeLanguage(language)
{
    localStorage.setItem("language", language)
}



// --- export & import local storage by: ChatGPT ---

function exportLocalStorage() 
{
    const data = JSON.stringify(localStorage, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'localStorage_backup.json';
    a.click();
    
    URL.revokeObjectURL(url);
}

function importLocalStorage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            for (let key in data) {
                localStorage.setItem(key, data[key]);
            }
            alert('LocalStorage imported successfully!');
        } catch (err) {
            alert('Invalid JSON file');
        }
    };
    reader.readAsText(file);
}

// --- export & import local storage END ---