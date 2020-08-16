function passref() {
    username = document.querySelector("#user").Value;
    password = document.querySelector("#pass").Value;

    newElement1 = document.querySelector("#refcom1").cloneNode(true);
    newElement.style.visibility = visible;

    newElement2 = document.querySelector("#refcom2").cloneNode(true);

    newElement1.innerHTML = username;
    newElement2.innerHTML = password;

    displaybox = document.querySelector("#commentbox")
    displaybox.inserBefore(newElement1, displaybox.firstchild);
    displaybox.inserBefore(newElement2, displaybox.firstchild);

    document.querySelector("#user").Value = "";
    document.querySelector("#pass").Value = "";
}