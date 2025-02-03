let NameBox = document.getElementById("name");
let SampleNameBox = document.getElementById("sampleName");
let AdressBox = document.getElementById("address");
let Discriptionarea = document.getElementById("description");

let btnSubmit = document.getElementById("SubmitBtn");

btnSubmit.addEventListener("click", function () {
    let data = [];
    data.push(NameBox.value);
    data.push(SampleNameBox.value);
    data.push(AdressBox.value);
    data.push(Discriptionarea.value);

    let data_str = JSON.stringify(data);

    let file = new Blob([data_str], { type: "text/plain" }); // type to "text/plain"
    let anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(file);
    anchor.download = "save.txt";
    anchor.click();

    // Reset the values of the text boxes
    NameBox.value = "";
    SampleNameBox.value = "";
    AdressBox.value = "";
    Discriptionarea.value = "";
});
