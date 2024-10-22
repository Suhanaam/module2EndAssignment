let count=0;
let c=0;
const callDoList=()=>{
    // alert("hi");
    let user=document.getElementById("UserName");
    let pass=document.getElementById("Password");
    if(user.value=="admin"&&pass.value=="12345")
    {
        // alert("hi admin");
        window.location.href='toDoList.html';
    }
    else{
        alert("invalid username and password");
    }
}
var fetchList = async () => {
    try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos');
            let userData = await response.json()
            console.log(userData);
            if(userData){
                let theader = '<table class="table">\n'
                let tfooter = '</table>'
                let row = '<tr class="table-dark"><th>Sl No:</th><th>Task Name</th><th>Task Status</th></tr>';
                userData.forEach((result, index) => {
                    if(result.completed == true){  
                     row = `${row} \n <tr>\n<td>${result.id}</td><td>${result.title}</td><td><input type="checkbox" checked disabled></input></td></tr>`
                    } else {
                     row = `${row} \n <tr>\n<td>${result.id}</td><td>${result.title}</td><td><input type="checkbox" onclick="checkCount(this)"></input></td></tr>`
                    }
                });
                document.getElementById("tableSection").innerHTML = theader + row + tfooter;
                
                
            }
        
    } catch (error) {
            console.log("Error: ",error);
    }
}

const checkCount=(checkbox)=>{
    if(checkbox.checked){
        checkbox.disabled=true;

    }
    count++; 
    console.log(count)
    c++;    
    if(count==5){
        if(c==5){
        alert("5 task completed successfully");
        }
        else{
            alert("again 5 task completed successfully")
        }

        count=0;
    }
}
const logOut=()=>{
    let c=confirm("Are You Sure To Leave");
    // alert(c);
    if(c==true)
        {
            window.location.href='index.html';
        }
    
}