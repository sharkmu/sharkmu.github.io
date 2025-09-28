async function loadPost(file) {
    const res = await fetch(file);
    const text = await res.text();

    let meta = {};
    let content = text;

    if (text.startsWith("---")) {
    const end = text.indexOf("---", 3);
    if (end !== -1) {
        const frontMatter = text.slice(3, end).trim();
        content = text.slice(end + 3).trim();

        frontMatter.split("\n").forEach(line => {
        const [key, ...rest] = line.split(":");
        if (key && rest.length) {
            meta[key.trim()] = rest.join(":").trim();
        }
        });
    }
    }

    return { meta, content };
}

let template = document.querySelector(".post-card");
let container = document.querySelector("#blog-post-cards");

container.removeChild(template);

async function loadPosts() {
  const res = await fetch("/v2/posts/posts.json");
  const files = await res.json();

  for (const file of files) {
    const post = await loadPost(`v2/posts/content/${file}`);
    addPost(post.meta, post.content);
  }
}

loadPosts();

function addPost(meta, content) {
    let card = template.cloneNode(true);
    let metaTitle = Object.entries(meta)[0];
    let metaImg = Object.entries(meta)[3];
    card.querySelector(".post-card-title").textContent = metaTitle[1];
    card.querySelector(".post-card-content").innerHTML = marked.parse(content);
    card.querySelector(".post-card-img").src = "/v2/posts/assets/" + metaImg[1];
    container.appendChild(card);
}