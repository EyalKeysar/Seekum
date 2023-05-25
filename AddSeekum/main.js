

// This puts the subjects options in the select element.
var subject_list = ["Math", "Physics", "Computer Science", "Cyber", "English", "History", "Biology"];
let select_subject_input = document.getElementById("subjects");
for (let i = 0; i < subject_list.length; i++) {
    let option = document.createElement("option");
    option.value = subject_list[i];
    option.text = subject_list[i];
    select_subject_input.appendChild(option);
}

let sendButton = document.getElementById("SendButtonID");
var fileInput = document.getElementById('FileInputID');


function handleFile() {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const fileContent = e.target.result;
        // Do something with the file content
        console.log(fileContent);
        return fileContent;
      };
  
      reader.readAsText(file); // Use readAsArrayBuffer for binary files
    }
    else{
        alert("No file selected");
    }
}

function GetSeekumData(){
    var seekum_data = {

        // TODO: Add the rest of the data.

        "subjects": document.getElementById("subjects").value,
        "file": handleFile()
    }
    return seekum_data;

}

sendButton.addEventListener("click", handleFile);
  
