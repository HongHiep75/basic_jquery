// kiem tra xem ng dung nhap thong tin chua
function required(selecter) {
    var val = $(selecter).val();
    if (val == "") {
        $(selecter).parent().addClass("errInput");
        $(selecter).parent().children(".mess").text("Nội dung bắt buộc nhập");
        return true;
    }
    return false;
}

// xoa thong tin loi 
function removeErr(selecter) {
    $(selecter).parent().removeClass("errInput");
    $(selecter).parent().children(".mess").text("");
}
// validate cho cot name 
function validateName(selecter) {
    if (required(selecter)) {
        return false;
    }
    let val = $(selecter).val();
    // lon hon 50 ky tu tra ve loi va return false
    if (val.length > 50) {
        $(selecter).parent().addClass("errInput");
        $(selecter).parent().children(".mess").text("nhap noi dung khong qua 50 ky tu");
        return false;
    }
    return true;
}

$("#name").blur(function () {
    validateName(this)
});

$("#name").focus(function (e) {
    removeErr(this)
});
// end validate name--------------


// validate cho  phone
function validatePhone(selecter) {
    if (required(selecter)) {
        return false;
    }
    let val = $(selecter).val();
    // lon hon 50 ky tu tra ve loi va return false
    if (val.length != 10) {
        $(selecter).parent().addClass("errInput");
        $(selecter).parent().children(".mess").text("Số điện thoại gồm 10 số");
        return false;
    }
    return true;
}
$("#phone").blur(function () {
    validatePhone(this)
});

$("#phone").focus(function (e) {
    removeErr(this)
});
//-------end validate phone

// validate hometown
$("#home").blur(function () {
    required(this)
});

$("#home").focus(function (e) {
    removeErr(this)
});
//--end validate home

//validate birthday
function validateBirthday(selecter) {
    if (required(selecter)) {
        return false;
    }
    let val = $(selecter).val();
    var birthday = new Date(val);
    let currentYear = new Date().getFullYear();
    // step 4
    let age = currentYear - birthday.getFullYear();

    if (age < 1) {
        $(selecter).parent().addClass("errInput");
        $(selecter).parent().children(".mess").text("Năm sinh không hợp lệ ");
        return false;
    }
    return true;
}
$("#birthday").blur(function () {
    validateBirthday(this)
});
$("#birthday").focus(function (e) {
    removeErr(this)
});
//--------end---------