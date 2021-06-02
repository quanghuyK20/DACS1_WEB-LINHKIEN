$(document).ready(() => {
    $("#login-form").submit(function(event) {
        if ($("#username").val() == "lequanghuy" && $("#password").val() == "12345678") {
            myObj = { name: "Le Quang Huy", isLogin: true };
            myJSON = JSON.stringify(myObj);
            localStorage.setItem("testJSON", myJSON);
            return;
        } else {
            alert("Tên người dùng hoặc mật khẩu không hợp lệ!");
            event.preventDefault();
        }
    });

    $("#admin-form").submit(function(event) {
        if ($("#username").val() == "phamvandat" && $("#password").val() == "12345678") {
            myObj = { name: "Pham Van Dat", isLogin: true };
            myJSON = JSON.stringify(myObj);
            localStorage.setItem("adminJSON", myJSON);
            return;
        } else {
            alert("Tên người dùng hoặc mật khẩu không hợp lệ!");
            event.preventDefault();
        }
    });
});