/// ZAD1

const main = document.querySelector("main");
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(function (users) {
        console.log(users)
        users.forEach(function (user) {
            const divName = document.createElement("div");
            divName.innerText = "Imię i Nazwisko: " + user.name
            const divEmail = document.createElement("div");
            divEmail.innerText = "Adres e-mail: " + user.email
            const divAdress = document.createElement("div");
            divAdress.innerText = "Adres zamieszkania: " + user.address.city + " " + user.address.street
            main.append(divName, divEmail, divAdress);
        });
    });