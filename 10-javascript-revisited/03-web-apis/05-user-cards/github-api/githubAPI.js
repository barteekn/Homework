const gitHubForm = document.getElementById("gitHubForm");
const username = document.getElementById("username");


gitHubForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // const username = document.getElementById("username").value;
  

  let usernameInput = document.getElementById("usernameInput");

  let gitHubUsername = usernameInput.value;


  requestUserRepos(gitHubUsername);
});

function requestUserRepos(username) {
  const xhr = new XMLHttpRequest();

  const url = `https://api.github.com/users/${username}/repos`;

  xhr.open("GET", url, true);

  xhr.onload = function () {
    const data = JSON.parse(this.response);
    console.log(data);
    for (let i in data) {
      let ul = document.getElementById("userRepos");
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = `<p><strong>Repo:</strong> ${data[i].name}</p>
        <p><strong>Description:</strong> ${data[i].description}</p>
        <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
    `;
      ul.appendChild(li);
    }
  };

  xhr.send();
}

// requestUserRepos("facebook");
