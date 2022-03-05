let rightSide = [];
let leftSide = [];
document.getElementById("right").value = rightSide;
document.getElementById("left").value = leftSide;
function addTask() {
    let input = document.getElementById("screen").value;
    if (input.length > 0){
        document.getElementById("screen").value = "";
        rightSide.push(input);
    }else{
          alert("Ma'lumot toldiring!!!");
    }
    drawPage()
}
function drawPage() {
    let result = "";
    let resultTwo = "";
    let progressBar = [] ;
    let progressContent = "";
    if (rightSide.length > 0 && leftSide.length > 0){
       progressBar = 100 / (rightSide.length  + leftSide.length) * leftSide.length;
        progressContent = progressBar
    } else if (rightSide.length === 0 && leftSide.length === 0){
        progressBar = 0;
        progressContent = progressBar
    } else if (rightSide.length === 0 && leftSide.length !== 0){
        progressBar = 100;
        progressContent = progressBar
    } else if (leftSide.length === 0 ){
        progressBar = 0;
        progressContent = progressBar
    } else if (rightSide.length === leftSide.length){
        progressBar = 50;
        progressContent = progressBar;
    }
    for (let i = 0 ;i < rightSide.length;i++){
        result +=
            "<div class='d-flex'>" +
            "<div class='col-10 offset-1 mt-1 d-flex' style=' border: 2px solid lightgray;border-radius: 25px 0px 0px 25px;width: 800px;height: 70px;background-color:white;' id='right-title'>"+ rightSide[i].title +" </div><button class='btn btn-success' id='buttoncheck' style='width: 30px;height: 70px;margin-top: 4px;;border-radius: 0px 25px 25px 0px' onclick='completedTask("+ i +")'>&check;</button>" +
            "</div>"
    }
    for (let i = 0;i < leftSide.length;i++){
        resultTwo +=
            "<div class='d-flex'>" +
            "<div class='col-10 mt-1' style=' border: 2px solid lightgray;border-radius: 25px 0px 0px 25px;width: 800px;height: 70px;background-color:white;' id='left-title'>"+ leftSide[i].title +"</div><button class='btn btn-danger' style='width: 30px;height: 70px;margin-top: 4px;;border-radius: 0px 25px 25px 0px' onclick='deleteTask()' >&times;</button>" +
            "</div>"
    }
    document.getElementById("right").innerHTML = result;
    document.getElementById("left").innerHTML = resultTwo;
    document.getElementById("progressBar").style.width = progressBar + "%";
    document.getElementById("progresscontent").textContent = progressContent + " %" + " completed"
}
function completedTask(index) {
    let leftWrapper = rightSide;
    rightSide.splice(index, 1);
        leftSide.push(leftWrapper);
        drawPage()
}
function deleteTask(index) {
    leftSide.splice(index,1);
    drawPage()
}