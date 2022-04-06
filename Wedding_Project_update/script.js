function style1(){
    document.getElementById('myImage')
    .src="/image/image1.jpeg";
}

function style2(){
    document.getElementById('myImage')
    .src="/image/image2.jpeg";
}
function style3(){
    document.getElementById('myImage')
    .src="/image/image3.jpeg";
}


function getName() {
    var nam = document.getElementById('name').value;
    document.getElementById("input").innerHTML =''+nam;
}


function getsecondName() {
    var sec = document.getElementById('sname').value;
    document.getElementById("input2").innerHTML =""+ sec;
}

function getDate() {
    var d = document.getElementById('date').value;
    var arrDate = d.split("-");
    var newDate = arrDate[2] + "-" +arrDate[1] + "-" + arrDate[0];
    document.getElementById("input3").innerHTML =""+ newDate;
}

function getLocation() {
    var v = document.getElementById('location').value;
    document.getElementById("input4").innerHTML =""+ v;
}