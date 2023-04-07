console.log("Ajax tutorial in one video");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler) 

function buttonClickHandler() {
    console.log("You have clicked the button fetchBtn");
    
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object 
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false);
    
    // USE THIS FOR POST REQUEST
    xhr.open('POST', '	https://dummy.restapiexample.com/api/v1/create', true);
    
    // What to do on progress
    xhr.onprogress = function() {
        console.log("In progress");
    }

    // What to do when response is ready
    xhr.onload = function () { 
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.error(this.error);
        }
    }

    xhr.onreadystatechange = function () { 
        console.log("ready state is ", xhr.readyState);
    }

    // send the request
    params = `{"name":"tes231t", "salary":"123", "age":"23"}`;
    xhr.send(params);

    console.log("We are done");

}

let backupBtn = document.getElementById('backupBtn');
backupBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log("You have clicked the button popHandler");
    
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true)

    // What to do when response is ready
    xhr.onload = function () { 
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";

            for (key in obj.data) {
                str += `<li>${obj.data[key].employee_name}</li>`
            }
            list.innerHTML = str;
        }
        else {
            console.error(this.error);
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
}