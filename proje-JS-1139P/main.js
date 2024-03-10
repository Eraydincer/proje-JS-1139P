let sayac =0;
const artanSayiButton=document.getElementById("artanSayiButton");
const artansayi=document.getElementById("artansayi");
const eksilSayiButton=document.getElementById("eksilSayiButton");
const reload=document.getElementById("Reload");
const teamBscore=document.getElementById("teamBscore");
const artanSayiButtonB=document.getElementById("artanSayiButtonB");
const eksilSayiButtonB=document.getElementById("eksilSayiButtonB");
const reloadB=document.getElementById("ReloadB");
const TeamA=document.getElementById("TeamA");
const TeamB=document.getElementById("TeamB");

function NewTeamA(){
    const teamName=prompt("Lütfen bir takım isimi girin :");
    TeamA.textContent=teamName;
}
function NewTeamB(){
    const teamNameB=prompt("lütfen bir takım ismi girin:");
    TeamB.textContent=teamNameB;
}

artanSayiButton.addEventListener("click",()=>{
    sayac++;
    artansayi.textContent=sayac;
})
eksilSayiButton.addEventListener("click",()=>{
if(sayac>0){
    sayac--;
    artansayi.textContent=sayac;
}
else{
    sayac==0;
    artansayi.textContent=sayac;
}

})

function showAlert(){
    const inputText = prompt("Lütfen bir gol sayısı girin:");
    if (inputText !== null) {
        const parsedNumber = parseInt(inputText);
        if (!isNaN(parsedNumber)) {
            // Numara girildiyse güncelle
            // Örnek olarak burada bir takımın gol sayısını güncelleyebilirsiniz
            // Örneğin: takimGolSayisi += parsedNumber;
            artansayi.textContent=inputText;
        } else {
            alert("Lütfen sadece sayı girin! ");
        }
    }
}
function resetScore(){
    sayac=0;
    artansayi.textContent=sayac;
   
    
}
let scoreB=0;
artanSayiButtonB.addEventListener("click",()=>{
    scoreB++;
    teamBgoal.textContent=scoreB;
})
eksilSayiButtonB.addEventListener("click",()=>{
if(scoreB>0){
    scoreB--;
    teamBgoal.textContent=scoreB;
}
else{
    scoreB==0;
    teamBgoal.textContent=scoreB;
}

})

function showAlertB(){
    const inputText = prompt("Lütfen bir gol sayısı girin:");
    if (inputText !== null) {
        const parsedNumber = parseInt(inputText);
        if (!isNaN(parsedNumber)) {
            // Numara girildiyse güncelle
            // Örnek olarak burada bir takımın gol sayısını güncelleyebilirsiniz
            // Örneğin: takimGolSayisi += parsedNumber;
            teamBgoal.textContent=inputText;
        } else {
            alert("Lütfen sadece sayı girin! ");
        }
    }
}
function resetScoreB(){
    scoreB=0;
    teamBgoal.textContent=scoreB;
   
    
}

