function addToSchedule(e) {
            e.preventDefault(); 
            var activity = document.getElementById('activity').value;
            var day = document.getElementById('day').value;
            var time = document.getElementById('time').value;
            var description = document.getElementById('description').value;

            var tableBody = document.getElementById('scheduleBody');
            var emptyMessage = tableBody.querySelector('.empty-message');
            if (emptyMessage) {
                tableBody.innerHTML = '';
            }
            var newRow = document.createElement('tr');

            var dayCell = document.createElement('td');
            dayCell.textContent = day;
            newRow.appendChild(dayCell);

            var timeCell = document.createElement('td');
            timeCell.textContent = time;
            newRow.appendChild(timeCell);

            var activityCell = document.createElement('td');
            activityCell.textContent = activity;
            newRow.appendChild(activityCell);

            var descriptionCell = document.createElement('td');
            descriptionCell.textContent = description || '-';
            newRow.appendChild(descriptionCell);

            var actionCell = document.createElement('td');
            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = function() {
                deleteRow(newRow);
            };
            actionCell.appendChild(deleteBtn);
            newRow.appendChild(actionCell);

            tableBody.appendChild(newRow);
            document.getElementById('scheduleForm').reset();
        }
        function deleteRow(row) {
            var tableBody = document.getElementById('scheduleBody');
            tableBody.removeChild(row);

            if (tableBody.children.length === 0) {
                var emptyRow = document.createElement('tr');
                var emptyCell = document.createElement('td');
                emptyCell.colSpan = 5;
                emptyCell.className = 'empty-message';
                emptyCell.textContent = 'No activities scheduled yet. Add one above!';
                emptyRow.appendChild(emptyCell);
                tableBody.appendChild(emptyRow);
            }
        }
