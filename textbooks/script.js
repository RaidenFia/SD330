// JavaScript (script.js)
// Fetch the JSON data from the file
fetch('textbook.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#myTable tbody');

    // Iterate over the courses and create table rows
    data.courses.forEach(course => {
      const row = document.createElement('tr');

      const idCell = document.createElement('td');
      idCell.textContent = course.Id;
      row.appendChild(idCell);

      const courseCell = document.createElement('td');
      courseCell.textContent = course.course;
      row.appendChild(courseCell);

      const nameCell = document.createElement('td');
      nameCell.textContent = course.courseName;
      row.appendChild(nameCell);

      const sectionCell = document.createElement('td');
      sectionCell.textContent = course.section;
      row.appendChild(sectionCell);

      const professorCell = document.createElement('td');
      professorCell.textContent = course.professor;
      row.appendChild(professorCell);

      const semesterCell = document.createElement('td');
      semesterCell.textContent = course.semester;
      row.appendChild(semesterCell);

      tableBody.appendChild(row);
    });

    // Iterate over the books and create table rows
    data.books.forEach(book => {
      const row = document.createElement('tr');

      const idCell = document.createElement('td');
      idCell.textContent = book.Id;
      row.appendChild(idCell);

      const titleCell = document.createElement('td');
      titleCell.textContent = book.title;
      row.appendChild(titleCell);

      const authorCell = document.createElement('td');
      authorCell.textContent = book.author;
      row.appendChild(authorCell);

      const publisherCell = document.createElement('td');
      publisherCell.textContent = book.publisher;
      row.appendChild(publisherCell);

      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
