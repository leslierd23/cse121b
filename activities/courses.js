// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
    {
    sectionNum: 1,
    roomNum: "STC 353",
    enrolled: 26,
    days:"TTh",
    instructor: "Bro T",
  },
  {
    sectionNum:2,
    roomNum:"STC 347",
    enrolled: 25,
    days:"TTh",
    instructor:"Sis A"
  }
 ]
};

function aCourse(course){
    const courseName= document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
}

function renderSections(sectsions){
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
      );
      document.querySelector("#sections").innerHTML = html.join("");
    }
    setCourseInfo(aCourse);
    renderSections(aCourse.sections);