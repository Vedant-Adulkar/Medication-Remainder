// JavaScript code for managing the reminders
document.addEventListener('DOMContentLoaded', () => {
  const addReminderButton = document.getElementById('add-reminder');
  const remindersList = document.getElementById('reminders-list');

  addReminderButton.addEventListener('click', () => {
    const medName = document.getElementById('medication-name').value;
    const reminderTime = document.getElementById('reminder-time').value;
    const amPm = document.getElementById('am-pm').value;

    if (medName && reminderTime) {
      const reminderItem = document.createElement('li');
      reminderItem.textContent = `${medName} at ${reminderTime} ${amPm}`;
      
      // Add delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        remindersList.removeChild(reminderItem);
      });
      reminderItem.appendChild(deleteButton);

      // Add edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit');
      editButton.addEventListener('click', () => {
        const newMedName = prompt('Enter new medication name:', medName);
        const newReminderTime = prompt('Enter new reminder time:', reminderTime);
        const newAmPm = prompt('Enter new AM/PM:', amPm);

        if (newMedName && newReminderTime && newAmPm) {
          reminderItem.textContent = `${newMedName} at ${newReminderTime} ${newAmPm}`;
          reminderItem.appendChild(deleteButton);
          reminderItem.appendChild(editButton);
        }
      });
      reminderItem.appendChild(editButton);

      remindersList.appendChild(reminderItem);
    }
  });
});
