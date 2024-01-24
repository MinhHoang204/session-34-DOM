function myFunction() {
    var table = document.getElementsByTagName("table")[0];
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "New";
    cell2.innerHTML = "New";
    cell3.innerHTML = "New";
}