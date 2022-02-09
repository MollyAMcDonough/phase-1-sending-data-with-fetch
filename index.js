// Add your code here
/*
fetch("http://localhost:3000/dogs", {
    //method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
})
.then(function (resp) {
    return resp.json();
})
.then(function (obj) {
    console.log(obj);
})
.catch(function (error) {
    alert("Bad things!");
    console.log(error.message);
});
*/

function submitData (name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })
    })
    .then(function (resp) {
        return resp.json();
    })
    .then(function (obj) {
        const id = document.createElement("h3");
        id.textContent = obj.id;
        document.body.appendChild(id);
    })
    .catch(function (error) {
        const message = document.createElement("h3");
        message.textContent = error.message;
        document.body.appendChild(message);
    })
}

