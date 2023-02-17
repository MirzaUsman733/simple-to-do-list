// let arr = [];
// let input = document.getElementById("taskInput").value;
// arr.push(input)
// document.getElementById("add").onclick = function(){
//     for(let i = 0; i < arr.length; i++){

    
//     let task = " "
//     document.getElementById("taskList").innerHTML += task + arr + "<br>";
// }
// }




let arr = []
document.getElementById("add").onclick = function(){
    let input = document.getElementById("taskInput").value;
    
    if(input == ""){
        alert("Write some Thing")
    }else{
        document.getElementById("taskList").innerHTML = " "

        arr.push(input)
        localStorage.setItem("elements",arr)
        alert(input)
        let txt = ""

        arr.forEach((item)=>{
            document.getElementById("taskList").innerHTML += txt + item + "<br>"
        });
    }
}
    let show = document.getElementById("taskList").innerHTML = localStorage.getItem("elements")/n + "<br>"

// let show = document.getElementById("taskList").innerHTML += localStorage.getItem("elements") + "<br>"
// for(let i =0 ; i < arr.length; i++){
// function myFunction(){
//     localStorage.setItem("again",arr)
    
// let show = document.getElementById("taskList").innerHTML += localStorage.getItem("again") + "<br>"

// };
// };

// read array from local storage    localStorage.getItem('elements')
