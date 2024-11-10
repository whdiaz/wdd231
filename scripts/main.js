// JavaScript to update the current year dynamically in the footer
document.addEventListener('DOMContentLoaded', function () {
  // Get the current year and set it in the footer
  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = currentYear;

  // Set the last modified date in the footer
  document.getElementById('lastModified').textContent = document.lastModified;

  // Array of course objects
  const courses = [
    { name: 'WDD 231 Web Development', credits: 3, completed: true },
    { name: 'WDD 232 Advanced Web Development', credits: 3, completed: false },
    {
      name: 'CSE 110 Introduction to Programming',
      credits: 4,
      completed: true,
    },
    { name: 'CSE 210 Data Structures', credits: 4, completed: false },
    { name: 'WDD 101 Introduction to Web Design', credits: 3, completed: true },
  ];

  // Function to display all courses
  function displayCourses(filteredCourses) {
    const courseContainer = document.getElementById('courseList');
    courseContainer.innerHTML = ''; // Clear the current content

    let totalCredits = 0;
    filteredCourses.forEach((course) => {
      const courseElement = document.createElement('div');
      courseElement.classList.add('course-card');
      courseElement.innerHTML = `
              <h3>${course.name}</h3>
              <p>Credits: ${course.credits}</p>
              <p class="status">${
                course.completed ? 'Completed' : 'Not Completed'
              }</p>
          `;
      if (course.completed) {
        courseElement.classList.add('completed');
      } else {
        courseElement.classList.add('not-completed');
      }
      courseContainer.appendChild(courseElement);
      totalCredits += course.credits;
    });

    // Display total credits dynamically
    const creditsElement = document.getElementById('totalCredits');
    creditsElement.textContent = `Total Credits: ${totalCredits}`;
  }

  // Filter courses based on category
  document.getElementById('allCourses').addEventListener('click', function () {
    displayCourses(courses);
  });

  document.getElementById('wddCourses').addEventListener('click', function () {
    const wddCourses = courses.filter((course) => course.name.includes('WDD'));
    displayCourses(wddCourses);
  });

  document.getElementById('cseCourses').addEventListener('click', function () {
    const cseCourses = courses.filter((course) => course.name.includes('CSE'));
    displayCourses(cseCourses);
  });

  // Initially display all courses
  displayCourses(courses);
});
