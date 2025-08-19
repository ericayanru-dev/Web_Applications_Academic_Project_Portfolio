let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
};

aCourse.sections = [
  { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
  { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
];

function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.code} – ${course.title}`;
}

function sectionTemplate(section) {
  return `<tr>
           <td>${section.section}</td>
           <td>${section.enrolled}</td>
           <td>${section.instructor}</td>
         </tr>`;
}

function renderSections(course) {
  const html = course.sections.map(sectionTemplate).join("");
  document.querySelector("#sections tbody").innerHTML = html;
}


setCourseInformation(aCourse);
renderSections(aCourse);

console.log(person['isEmployed']); // true
console.log(person.hobbies[0]); // "reading"
console.log(person.age); // 30
console.log(person['address'].city); // "Santa Rosa"
