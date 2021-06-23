function hehe(){
    var op = document.getElementById('output')
    op.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            //  call backend api python
            // {
            // }
            document.location = 'https://google.com';
        }
    });
}

function showImages(){

    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function () {
        var response = JSON.parse(xhrRequest.response);
        console.log(response)
    };
    xhrRequest.open("get", "/cgi-bin/docker.py");
    xhrRequest.send();
}
    
function showContainers(){
    alert('Not Working');
    // api for python cgi 
    // .
    // .
    // .
    // 
}
    
    
    //   var op = document.getElementById('')
    // const rawResponse = await fetch("http://192.168.21.72:64610/cgi-bin/docker.py", {
    //     method: "POST",
    //     headers: {
    //       Accept: "text/html",
    //       "Content-Type": "text/html",
    //     },
    //     body: JSON.stringify({'cmd': 'ifconfig'}),
    //   });
    //   console.log(rawResponse);
    // //   const content = await rawResponse.json();
    // //     console.log(content);
    // }
//   time.innerHTML = content["time"] + " ns";
//   if (!content["success"]) {
//     alert("Crooks's cannot solve this sudoku completely");
//   }