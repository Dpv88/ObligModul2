// JavaScript source code
let application =  document.getElementById('app');
updateViews()
function view() {


    return  `
      <div id = button>  <button onclick = 'Randomnavnupdate()'>Generer navn</button></div>
        <div class = radio>
        <input type = 'radio' id = 'gutt' ${model.input.radioMaleChecked ? "checked" : ""} onchange='checkRadioMale()'  >
        <label for="gutt">Gutt</label>
        <input type = 'radio' id = 'jente' ${model.input.radioFemaleChecked ? "checked" : ""} onchange="checkRadioFemale()" >
        <label for="jente">Jente</label>
        </div>
        <div id = visningsDiv>${model.returnName}</div>
        <button onclick="goToPage(1)">Gå til side for å legg til navn</button>
`;


}

function viewTwo(){
            return `
                    <input type="text" id="textfelt" oninput="model.input.name = this.value" > 
                    <button onclick="addname()">legg til navn</button>
                    <div class="radio">
                    <input type = 'radio' id = 'gutt' ${model.input.radioMaleChecked ? "checked" : ""} onchange='checkRadioMale()'  >
                    <label for="gutt">Gutt</label>
                    <input type = 'radio' id = 'jente' ${model.input.radioMaleChecked ? "" : "checked"} onchange="checkRadioFemale()" >
                    <label for="jente">Jente</label>
                    <input type="radio" id="edit" ${model.input.radioDeleteChecked ?  "" : "checked"} onchange="checkRadioModify()"><label for="edit">endre</label>
                    <input type="radio" id="delete" ${model.input.radioDeleteChecked ? "checked" : ""} onchange="checkRadioDelete()"><label for="delete">slett</label>
                    </div>
                    <div id="showBNames">${getNames('maleNames')}</div>
                    <div id="showGNames">${getNames('femaleNames')}</div>
                    <button onclick="goToPage(0)">Gå tilbake til randomnavn side</button>
`}



function updateViews(){
    application.innerHTML =`${model.currentPage === 0 ? view() : viewTwo()}`;
}
