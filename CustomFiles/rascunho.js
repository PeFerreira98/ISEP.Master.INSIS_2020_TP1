

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