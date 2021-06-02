$(document).ready(() => {
    $.validator.addMethod("pattern", function(value, element, regexpr) {
        return regexpr.test(value);
    }, "Vui lòng nhập thông tin hợp lệ.");

    $("#reg-form").validate({
        errorCointainer: "#message-box",
        errorLabelContainer: "#message-box",
        wrapper: "li",
        submitHandler: function() { alert("Đăng kí thành công!") },

        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                email: true
            },
            phonenumber: {
                required: true,
                pattern: /^0\d{9}/,
                digits: true
            },
            password: {
                required: true,
                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/
            },
            repassword: {
                required: true,
                equalTo: "#password",
            },
            term: {
                required: true
            }
        },
        messages: {
            firstname: "Vui lòng nhập tên của bạn!",
            lastname: "Vui lòng nhập họ của bạn!",
            username: {
                required: "Vui lòng nhập Email!",
                email: "Email không hợp lệ!"
            },
            phonenumber: {
                required: "Vui lòng nhập số điện thoại!",
                pattern: "Số điện thoại không hợp lệ!"
            },
            password: {
                required: "Vui lòng nhập mật khẩu!",
                pattern: "Mật khẩu phải chứa ít nhất một chữ cái thường, một chữ cái viết hoa, một chữ số và không được chứa kí tự đặc biệt, phải có ít nhất 8 kí tự!"
            },
            repassword: {
                required: "Vui lòng xác nhận mật khẩu của bạn!",
                equalTo: "Xác nhận mật khẩu không hợp lệ!"
            },
            term: {
                required: "Bạn phải chấp nhận Điều khoản sử dụng và Chính sách bảo mật để tiếp tục!"
            }
        }
    });
});

// $(document).ready(() => {
//     $.validator.addMethod("pattern", function(value, element, regexpr) {
//         return regexpr.test(value);
//     }, "Vui lòng nhập thông tin hợp lệ.");

//     $("#login-form").validate({
//         errorCointainer: "#message-box",
//         errorLabelContainer: "#message-box",
//         wrapper: "li",
//         submitHandler: function() { alert("Đăng nhập thành công!") },
//         rules: {
//             username: {
//                 required: true,
//                 email: true
//             },
//             password: {
//                 required: true,
//             },
//         },
//         messages: {
//             username: {
//                 required: "Vui lòng nhập Email!",
//                 email: "Email không hợp lệ!"
//             },
//             password: {
//                 required: "Vui lòng nhập mật khẩu!",
//             },
//         }
//     });
// });