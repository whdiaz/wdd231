// Dynamic current year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Sample course data (modify based on your completion status)
const courses = [
  { name: 'WDD 101', completed: true, credits: 3 },
  { name: 'CSE 121', completed: false, credits: 4 },
];

// Function to dynamically display courses
function displayCourses(filter = 'all') {
  const courseContainer = document.getElementById('courseContainer');
  courseContainer.innerHTML = ''; // Clear previous courses

  const filteredCourses = courses.filter((course) => {
    return filter === 'all' || course.name.includes(filter);
  });

  filteredCourses.forEach((course) => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'Not Completed'}</p>
        `;
    courseCard.style.backgroundColor = course.completed
      ? 'lightgreen'
      : 'lightcoral';
    courseContainer.appendChild(courseCard);
  });

  // Dynamically display total credits
  const totalCredits = filteredCourses.reduce(
    (total, course) => total + course.credits,
    0
  );
  document.getElementById(
    'totalCredits'
  ).textContent = `Total Credits: ${totalCredits}`;
}

// Call displayCourses with default filter ('all')
displayCourses();

// Add filter buttons for WDD, CSE, and all courses
document
  .getElementById('wddFilter')
  .addEventListener('click', () => displayCourses('WDD'));
document
  .getElementById('cseFilter')
  .addEventListener('click', () => displayCourses('CSE'));
document
  .getElementById('allFilter')
  .addEventListener('click', () => displayCourses('all'));
