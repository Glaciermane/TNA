const searchBox = document.getElementById('search-box');
const tableRows = document.querySelectorAll('table tr');

searchBox.addEventListener('keyup', function(event) {
  const searchText = event.target.value.toLowerCase();

  tableRows.forEach(function(row) {
    const cells = row.querySelectorAll('td');
    let match = false;

    cells.forEach(function(cell) {
      const cellText = cell.textContent.toLowerCase();
      if (cellText.includes(searchText)) {
        match = true;
      }
    });

    if (match) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});
