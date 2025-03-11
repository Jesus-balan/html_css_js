function addTask() {
    var studentId = document.getElementById('studentId').value;
    var studentName = document.getElementById('studentName').value;
    var studentDate = document.getElementById('studentDate').value;
    var studentDate = document.getElementById('selectDay').value;
    var tableList = document.getElementById('tableList');
    
    if()

    var newRow = tableList.insertRow();

    var cell1 = newRow.insertCell(0); 
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.textContent = studentId;
    cell1.textContent = studentName;
    cell1.textContent = studentDate;
    cell1.textContent = selectDay;
    cell1.innerHTML = '<button class="delete" onclick="deleteTask(event)">delete</button>';

}
