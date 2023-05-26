

// This puts the subjects options in the select element.
var subject_list = ["Math", "Physics", "Computer Science", "Cyber", "English", "History", "Biology"];
let select_subject_input = document.getElementById("SeekumSubjectInputID");
for (let i = 0; i < subject_list.length; i++) {
    let option = document.createElement("option");
    option.value = subject_list[i];
    option.text = subject_list[i];
    select_subject_input.appendChild(option);
}

let sendButton = document.getElementById("SendButtonID");
var fileInput = document.getElementById('FileInputID');
let fileContent = "";




function readAsText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const content = e.target.result;
        resolve(content);
      };
  
      reader.onerror = function (e) {
        reject(e);
      };
  
      reader.readAsText(file);
    });
  }

async function handleFile() {
    const file = fileInput.files[0];
    if (file) {
      try {
        fileContent = await readAsText(file);
      } catch (error) {
        console.log("Error reading file:", error);
        fileContent = "";
      }
    } else {
      fileContent = "";
    }
  }




function GetSeekumData(){
    var SeekumWriterName = document.getElementById("SeekumWriterNameInputID");
    var SeekunTitle = document.getElementById("SeekumTitleInputID");
    var SeekumSubject = document.getElementById("SeekumSubjectInputID");
    var OtherNotes = document.getElementById("OtherNotesInputID");

    if (SeekumWriterName.value == ""){ alert("Please enter writer's name."); return; }
    if (SeekunTitle.value == ""){ alert("Please enter title."); return; }
    if (SeekumSubject.value == ""){ alert("Please enter subject."); return; }
    if (fileContent == "" || fileContent == undefined){ alert("Please enter file (not empty)."); return; }

    var seekum_data = {
        "SeekumWriterName": SeekumWriterName.value,
        "SeekunTitle": SeekunTitle.value,
        "SeekumSubject": SeekumSubject.value,
        "OtherNotes": OtherNotes.value,
        "FileContent": fileContent
    }
    console.log(seekum_data);
    return seekum_data;
}

sendButton.addEventListener("click", async function(){
    await handleFile();
    console.log(fileContent);
    GetSeekumData();   
});
  
