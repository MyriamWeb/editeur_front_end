const text = document.getElementById('text');
const max = document.getElementById('text').maxLength;
const downl = document.querySelector("img")
const progressBar = document.getElementById('progressBar')

//********************************************Je crée le décompte de mon compteur de lettres et avec la couleur associée************************** */
text.onkeyup = text.onkeypress = function(){
    document.getElementById('live').innerHTML = this.value;
    document.getElementById('compt').innerHTML = max-text.value.length;
        const counter = 100*text.value.length/max;
        document.getElementById('progressBar').style.setProperty('width', counter+'%');
            if (counter >= 0 && counter < 35) {
                document.getElementById('progressBar').style.backgroundColor = "ForestGreen";
            }
            if (counter >= 35 && counter < 80){
                document.getElementById('progressBar').style.backgroundColor = "Orange";
            }
            if (counter >= 80 && counter < 100){
                document.getElementById('progressBar').style.backgroundColor = "red";
            }
        
//******************************************************Je fais ici pour mon gif n'apparaissent que quand on ecrit******************************* */
}
text.addEventListener("input", () => {
    downl.style.visibility = "visible";
});
document.addEventListener("mouseover", () =>{
    downl.style.visibility = "hidden"
});

//********************************************************je fais ici le js pour les boutons B et I et couleurs***************************** */
const br = document.getElementById('b')
const italic = document.getElementById('i')
const red = document.getElementById('btn-1')
const blue = document.getElementById('btn-2')
const fuschia = document.getElementById('btn-3')


br.addEventListener('click', () => {
    text.value +="<br></br>";
});
italic.addEventListener('click',() => {
    text.value +="<i></i>";
});
red.addEventListener('click',() => {
    text.value +="<div style=color:red ></div>";
});
blue.addEventListener('click',() => {
    text.value +="<div style=color:blue ></div>";
});
fuschia.addEventListener('click',() => {
    text.value +="<div style=color:fuchsia ></div>";
});

