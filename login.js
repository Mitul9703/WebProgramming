var db = [
    {
        uname: "MitulKrishna",
        passwd: "Mitulk"
    },
    {
        uname:"user",
        passwd:"user"
    }

]


function loginValidation(uname, passwd) {
    let flag = false;
    for (let i = 0; i < db.length;i++) {
        if (db[i].uname == uname && db[i].passwd == passwd) {
            flag = true;
        }
    }
    if (!flag) {
        let errorDoc = document.getElementById("Error-msg");
        errorDoc.innerHTML = "Error username or password";
    }
}