function updateViews(){
    application.innerHTML =`${model.currentPage === 0 ? view() : viewTwo()}`;
}
function goToPage(i){
    model.currentPage = i;
    updateViews();
}

function checkRadioMale(){
    model.input.isMale = true;
    model.input.radioMaleChecked = true;
    model.input.radioFemaleChecked = false;
    updateViews();
}
function checkRadioFemale(){
    model.input.isMale = false;
    model.input.radioMaleChecked = false;
    model.input.radioFemaleChecked = true;
    updateViews();
}


function Randomnavnupdate() {
    randomNavn();
    updateViews();
}
function randomNavn() {
    let vNavn = [];
    let nameList = [];
    if (model.input.isMale === null){
        alert('Trykk på en radiknapp');
        return;
    }
    model.input.isMale ? nameList = model.maleNames : nameList = model.femaleNames;
    console.log(model.input.isMale, nameList);

    for (let user of nameList){
        vNavn.push(user.name);
    }

    let random = Math.floor(Math.random() * vNavn.length);
    model.hasRun = true;
    model.returnName= vNavn[random];
}
function getNames(li) {
    // if li not in model return empty string and console.error
    if(!(li in model)){
        console.error(`"${li}" not in model!`);
        return '';
    }
    let names = [];
    for (let i=0; i<model[li].length; i++){
        names.push(`<li><span onclick="clickname('${li}',${i})">${model[li][i].name}</span></li>`);
    }
    let stuff = `<ul>${names.join('\n')}</ul>`

    return stuff;

}
function clickname(li,i){
    console.log(li,i)
    // if li not in model return empty string and console.error
    if(!(li in model)){
        console.error(`"${li}" not in model!`);
        return '';
    }
    if (model.input.radioDeleteChecked === true){
        if(confirm('er du sikker')) deleteName(li,i)
    }else{
        modifyNamePrompt(li,i)
    }
   updateViews()

}

function addname(){
  if (validateName(model.input.name)=== true){
    if (model.input.isMale !== null){
        model.input.isMale === true ?
            model.maleNames.push( {name :` ${model.input.name}`,isMale: true }) :
            model.femaleNames.push( {name :` ${model.input.name}`,isMale: false });
    }else{
        alert(`du må velge en radioknapp!`);
    }}else{
      alert('ugyldig navn')

  }
    updateViews();
}
function checkRadioModify() {
    model.input.radioDeleteChecked = false;
    updateViews();
}
function checkRadioDelete() {
    model.input.radioDeleteChecked = true;
    updateViews();
}
function deleteName(li,i) {
    model[li].splice(i,1);

}
function modifyName(li,i,newName) {
    if(newName !== null && validateName(newName)) {
    model[li][i].name = newName;}
}
function modifyNamePrompt(li,i){
    let result =    prompt('angi nytt navn');
    if(result !== null) {
        modifyName(li, i, result);
    }}
function validateName(valname) {
    for (let char of valname){
        if(!(model.alphabet.includes(char.toLowerCase()))) return false

    }
    return true
}