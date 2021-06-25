ip = "http://13.233.153.204:80"
path = "cgi-bin/docker.py"

// function hehe(){
//     var op = document.getElementById('output')
//     op.addEventListener("keypress", (event) => {
//         if (event.key === "Enter") {
//             // Cancel the default action, if needed
//             event.preventDefault();
//             // Trigger the button element with a click
//             //  call backend api python
//             // {
//             // }
//             document.location = 'https://google.com';
//         }
//     });
// }

function showImages(){
    var xhrRequest = new XMLHttpRequest();
    cmd = 'docker images'
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    var op = document.getElementById('output');
    op.textContent = x;
}

function showContainers(){
    // alert('Not Working');
    cmd = 'docker ps'
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}

function deleteImage(){
    document.getElementById('imgstat').innerHTML = "...";
    imgname = document.getElementById('imgname').value;
    cmd = `docker rmi ${imgname}`
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}
function downloadImage(){
    imgname = document.getElementById('imgname').value;
    cmd = `docker pull ${imgname}`
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}

function runContainer(){
    contname = document.getElementById('contname').value;
    imgname = document.getElementById('cimgname').value;
    if(contname==null){
        cmd = `docker run -dit ${cimgname}`
    }
    else{
        cmd = `docker run -dit --name ${contname} ${imgname}`
    }
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}
function delContainer(){
    contname = document.getElementById('contname').value;
    cmd = `docker rm -f ${contname}`;
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("GET", `${ip}/${path}?cmd=${cmd}`,false);
    xhrRequest.send();
    x = xhrRequest.responseText;
    // console.log(x);
    var op = document.getElementById('output');
    op.textContent = x;
}