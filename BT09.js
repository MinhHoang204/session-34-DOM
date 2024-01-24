function editUser(button) {
    let userName = button.previousElementSibling.textContent;
    document.getElementById('editInput').value = userName;
}

function saveEdit() {
    let editedName = document.getElementById('editInput').value;
    let selectedUser = document.querySelector('.user-item.active');
    if (selectedUser) {
      selectedUser.querySelector('.user-name').textContent = editedName;
    }
}