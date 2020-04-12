
print("----mainScrpt3-----");
print("titulo: " + titulo1);
print("anopublicacao: " + anopublicacao1);
print("areaConhecimento: " + areasconhecimento1);
print("polo1: " + polo1);
print("autores: " + autores1);
print("peritos1: " + peritos1);
print("peritos2: " + peritos2);
print("facts: " + selectedFacts);
print("permited: " + isPermited);
print("----mainScrpt3-----");

var totalPeritos = (execution.getVariable('registeredUsers')).length;
var selectedFacts = execution.getVariable('selectedFacts');

var fact0 = 0;
var fact1 = 0;
for (var index = 0; index < selectedFacts.length; index++) {
    if (selectedFacts[index] == 0) {
        fact0++;
    } else {
        fact1++;
    }
}

var isPermited= false;
if (totalPeritos / fact1 >= 0.5 ) {
    isPermited = true;
}

execution.setVariable('isPermited', isPermited);


var registeredUsers = execution.getVariable('registeredUsers');
var peritosSelectedByProponente = execution.getVariable('peritos1');
var peritosSelectedByBiblioMor = execution.getVariable('peritos2');
peritosSelectedByProponente = peritosSelectedByProponente.split(',');
peritosSelectedByBiblioMor = peritosSelectedByBiblioMor.split(',');

var peritosToDelete = [];
for (var index = 0; index < registeredUsers.length; index++) {
    var bool = false;
    for (var i = 0; i < peritosSelectedByProponente.length; i++) {
        if (JSON.stringify(registeredUsers[index]) == JSON.stringify(peritosSelectedByProponente[i]) ) {
            bool = true;
        }
    }
    for (var i = 0; i < peritosSelectedByBiblioMor.length; i++) {
        if (JSON.stringify(registeredUsers[index]) == JSON.stringify(peritosSelectedByBiblioMor[i]) ) {
            bool = true;
        }
    }

    if (!bool) {
        peritosToDelete.push(registeredUsers[index]);
    }
}

for (var index = 0; index < peritosToDelete.length; index++) {
    var c = registeredUsers.indexOf(peritosToDelete[index]);
    delete registeredUsers[c];
}

print(registeredUsers);

var chooseList = JSON.parse("[{\"_id\": 0, \"text\": \"Negativo\"},{\"_id\": 1, \"text\": \"Positivo\"}]");
print(JSON.stringify(chooseList));
execution.setVariable('chooseList',JSON.stringify(chooseList));




var peritosAll = JSON.parse(execution.getVariable('registeredUsersPeritos'));
var peritosSelected = JSON.parse(execution.getVariable('choosenPeritos'));
var peritosParsed = [];
for (var index = 0; index < peritosAll.length; index++) {
    var bool = false;
    for (var index2 = 0; index2 < peritosSelected.length; index2++) {
        if(peritosAll[index].text == peritosSelected[index2].text){
            bool = true;
        }
    }
    if(bool == false){
        peritosParsed.push(peritosAll[index]);
    }
}
execution.setVariable('registeredUsersPeritos', JSON.stringify(peritosParsed));


print(JSON.stringify(peritosParsed));
print(JSON.stringify(peritosAll));
print(JSON.stringify(peritosSelected));


var peritosSelected = execution.getVariable('peritos1');
var splitedArray = peritosSelected.split(',');
var choosenPeritos = [];
for (var i = 0; i < splitedArray.length; i++) {
    choosenPeritos.push({ _id: splitedArray[i], text: splitedArray[i] });
}
execution.setVariable('choosenPeritos', JSON.stringify(choosenPeritos));