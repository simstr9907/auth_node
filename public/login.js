const loginButton = document.getElementById("login");
loginButton.addEventListener("click", login);


function login()
{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let user = {};
        user.email = email;
        user.password = password;

        const req = new XMLHttpRequest();
        req.open("POST", "/login", true);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
        req.send("user="+JSON.stringify(user));
}