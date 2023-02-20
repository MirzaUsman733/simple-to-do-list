let arr = []
document.getElementById("add").onclick = () => {
    let input = document.getElementById("taskInput").value;
    if (input == "") {
        alert("Write some Thing in the input ");
    } else {
        document.getElementById("taskList").innerHTML = "";
        arr.push(input)
        localStorage.setItem("elements", arr)
        alert(input)
        let txt = ""
        arr.forEach((item)=>{
            document.getElementById("taskList").innerHTML += txt + item + "<br>"
        });
    }
}
    let show = document.getElementById("taskList").innerHTML = localStorage.getItem("elements") + "<br>"