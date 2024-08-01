let data = [
    {id: 1, Firstname: "sudhakar", Lastname: "maheshwaran", Email: "sudhakar33mkr@gmail.com",
        Mobile: "9543803611", DOB: "2001-09-27", Address: "madukkur"},
]

function readAll(){
    var tbdata = document.querySelector(".table-body");
    var elements = "";

    data.map(d => (
        elements += `<tr>
           <td>${d.Firstname}</td>
           <td>${d.Lastname}</td>
           <td>${d.Email}</td>
           <td>${d.Mobile}</td>
           <td>${d.DOB}</td>
           <td>${d.Address}</td>
           <td>
               <button onclick={edit(${d.id})}>Edit</button>
               <button onclick={delet(${d.id})}>Delete</button>
           </td>
           </tr>`
    ))
    tbdata.innerHTML = elements;
}

function adddata(){
    document.querySelector(".form-container-create").style.display = "block";
    document.querySelector(".add-data").style.display = "none";
}

function createdata(){
    var Firstname = document.querySelector("#fname").value;
    var Lastname = document.querySelector("#lname").value;
    var Email = document.querySelector("#email").value;
    var Mobile = document.querySelector("#mobile").value;
    var DOB = document.querySelector("#dob").value;
    var Address = document.querySelector("#Address").value;

    var newObj = {id:2,Firstname,Lastname,Email,Mobile,DOB,Address};
    data.push(newObj);

    document.querySelector(".form-container-create").style.display = "none";
    document.querySelector(".add-data").style.display = "block";
    readAll();
}

function edit(id){
    document.querySelector(".form-container-update").style.display = "block";
    document.querySelector(".add-data").style.display = "none";

    var updateObj = data.find(f => f.id === id);
    document.querySelector('.update-id').value = updateObj.id;
    document.querySelector('#fname1').value = updateObj.Firstname;
    document.querySelector('#lname1').value = updateObj.Lastname;
    document.querySelector('#email1').value = updateObj.Email;
    document.querySelector('#mobile1').value = updateObj.Mobile;
    document.querySelector('#dob1').value = updateObj.DOB;
    document.querySelector('#Address1').value = updateObj.Address;
}

function update(){
    var id = parseInt( document.querySelector('.update-id').value);
    var Firstname = document.querySelector('#fname1').value;
    var Lastname = document.querySelector('#lname1').value;
    var Email = document.querySelector('#email1').value;
    var Mobile = document.querySelector('#mobile1').value;
    var DOB = document.querySelector('#dob1').value;
    var Address = document.querySelector('#Address1').value;

    var updateObj = {id,Firstname,Lastname,Email,Mobile,DOB,Address};
    
    var index = data.findIndex(f =>f.id === id);
    data[index] = updateObj;

    document.querySelector(".form-container-update").style.display = "none";
    document.querySelector(".add-data").style.display = "block";
    readAll();
}

function delet(id){
    if (confirm("are you want to delete")){
        var newdata = data.filter(f => f.id !== id);
        data = newdata;
        readAll();
    }
    else{
        readAll();
    }
    
}