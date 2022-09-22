
function deleteStudent(id, list) {
    let n = list.length;
    for (let i = 0; i < n; i++) {
        let a = i + 1;
        // tim va cat bo phan tu trong list
        if (list[i].id == id) {
            list.splice(i, a);
            n = list.length;
        }
    }
    localStorage.setItem("listStuden", JSON.stringify(list));
};
// hien thi thong tin list student vao bang table
function showList() {
    let list = JSON.parse(localStorage.getItem("listStuden"));
    if (list == null) {
        return;
    }
    // xoa phan tu co san trong bang tru phan muc chinh
    $('#mytable tr:not(:first)').remove();
    list.forEach(element => {
        let thongtin = "<tr> <td>" + "<input value=" + element.id + " class=\"mytable-checkbox\" type=\"checkbox\">"
            + "</td> <td>" + element.name + "</td> <td>" +
            element.birthday + "</td> <td>" + element.phone + "</td> <td>" + element.hometown + "</td> </tr>"
        $("#mytable").append(thongtin);
    });
}

function reset() {
    $("#name").val("");
    $("#birthday").val("");
    $("#phone").val("");
    $("#home").val("");
    $("#id_student").val(0);
}

// cap nhat sinh vien
function updateStudent(Student) {
    let list = JSON.parse(localStorage.getItem("listStuden"));
    let n = list.length;
    for (let i = 0; i < n; i++) {
        let a = i + 1;
        if (list[i].id == Student.id) {
            list[i] = Student;
        }
    }
    localStorage.setItem("listStuden", JSON.stringify(list));
}

function saveStudent() {
    var ckekName = validateName("#name");
    var ckekBirthday = validateBirthday("#birthday");
    var ckekPhone = validatePhone("#phone");
    var ckekHome = required("#home");
    if (!(ckekName && ckekBirthday && ckekPhone && !ckekHome)) {
        return;
    }

    var name = $("#name").val();
    var birthday = $("#birthday").val();
    var phone = $("#phone").val();
    var hometown = $("#home").val();
    var idStudent = $("#id_student").val();

    reset();

    if (idStudent != 0) {
        var student = {
            id: idStudent,
            name,
            birthday,
            phone,
            hometown
        }
        updateStudent(student);
        showList();
        return;
    }

    // lay danh sach tu bo nho local chi co tren html5
    var list = JSON.parse(localStorage.getItem("listStuden"));
    if (list == null) {
        list = [];
        localStorage.setItem("listStuden", JSON.stringify(list));
    }
    var id = localStorage.getItem("id");
    if (id == null) {
        id = 1;

    }
    var student = {
        id: id++,
        name,
        birthday,
        phone,
        hometown
    }
    list.push(student);
    localStorage.setItem("id", id);
    localStorage.setItem("listStuden", JSON.stringify(list));

}