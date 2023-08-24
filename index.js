const input = document.getElementById("query");
const search = document.getElementById("btn");

const result = document.getElementById("result");
const testImage = document.getElementById("sample");

input.addEventListener("change", async () => {
  const response = await fetch(
    `https://dummyjson.com/users/search?q=${input.value}`
  );

  const jsonData = await response.json();
  const users = await jsonData.users;

  result.innerText = "";
  console.log(jsonData);
  //   if (!users) {
  //     alert("No user found. Try again");
  //     return;
  //   }
  users.forEach((user) => {
    const ele = document.createElement("div");
    ele.style =
      "background-color:#bdd6ff ;padding:20px; border: 2px solid blue; border-radius:5px;width:200px; height: 300px; line-height: 1.5rem;";
    const name = document.createElement("div");
    const address = document.createElement("div");
    const personal = document.createElement("div");
    const gender = document.createElement("div");
    const email = document.createElement("div");
    const image = document.createElement("img");
    name.innerText = `${user.firstName} ${user.maidenName} ${user.lastName}`;
    address.innerText = `${user.address.address}`;
    personal.innerText = `Age: ${user.age}, Gender: ${user.gender}`;
    email.innerText = `Email: ${user.email}`;
    image.src = `${user.image}`;
    image.
    image.ele.appendChild(image);
    ele.appendChild(name);
    ele.appendChild(address);
    ele.appendChild(personal);
    ele.appendChild(email);
    result.appendChild(ele);
  });
});

function childCreation() {}
