const saveEntry = () => {
    let entry = document.getElementById("entry").value;
    let date = new Date().toLocaleDateString();
    
    localStorage.setItem(date, entry);
    alert("Entry saved!");
};

const getEntries = () => {
    let entries = "";
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        entries += `${key}: ${value} \n`;
    }
    alert(entries || "No entries yet!");
};

// AI Chatbot Feature
const askAI = async () => {
    let entry = document.getElementById("entry").value;
    let response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_OPENAI_API_KEY"
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: `Analyze this diary entry and tell me if I am aligned with my goals: ${entry}`,
            max_tokens: 100
        })
    });

    let data = await response.json();
    document.getElementById("response").innerText = data.choices[0].text;
};
