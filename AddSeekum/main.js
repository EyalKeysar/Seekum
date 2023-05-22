
var subject_list = ["Math", "Physics", "Computer Science", "Cyber", "English", "History", "Biology"];

let select_subject_input = document.getElementById("subjects");

for (let i = 0; i < subject_list.length; i++) {
    let option = document.createElement("option");
    option.value = subject_list[i];
    option.text = subject_list[i];
    select_subject_input.appendChild(option);
}