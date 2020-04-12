
var totalPeritos = (execution.getVariable('registeredUsers')).length;
var selectedFacts = execution.getVariable('selectedFacts');

print(totalPeritos);
print(selectedFacts); /* [p1: 0, p2:1, p3:0] */
print(selectedFacts[0]);
var cenas = JSON.stringify(selectedFacts[0]);
print(cenas[cenas.length]);

var fact0 = 0;
var fact1 = 0;
for (var index = 0; index < array.length; index++) {
    if (condition) {
        
    }
}



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