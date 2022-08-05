import Course from "./classes/Course.js";
import Teacher from "./classes/Teacher.js";
import Student from "./classes/Student.js";

//Imprime CURSOS en el DOM cuando recibe un objeto tipo curso
const renderCourse = course => {
const courseContainer = document.getElementById('courses')
const articleCourses = document.createElement('article');
articleCourses.classList.add('card');

const divImage = document.createElement('div');
divImage.classList.add('img-container', 's-ratio-16-9', 's-radius-tr', 's-radius-tl');
const posterCourse = document.createElement('img');
posterCourse.setAttribute('src', course.getPoster());

const courseInformation = document.createElement('div');
courseInformation.classList.add('card__data',  's-border', 's-radius-br', 's-radius-bl', 's-pxy-2');
const courseTitle = document.createElement('h3');
courseTitle.classList.add('t5', 's-mb-2', 's-center')
courseTitle.innerText = `${course.getName()}`;
const divPrice = document.createElement('div');
divPrice.classList.add('s-main-center');
const priceBtn = document.createElement('a');
priceBtn.classList.add('button--ghost-alert', 'button--tiny');
priceBtn.setAttribute('href', '#');
priceBtn.innerText = `USD ${course.getPrice()}`


divImage.appendChild(posterCourse);
courseInformation.append(courseTitle, divPrice)
divPrice.appendChild(priceBtn);
articleCourses.append(divImage, courseInformation);
courseContainer.appendChild(articleCourses);
}

//Toma datos del formulario y crea una instancia del Curso
const formCourses = document.querySelector('#idCourses');
formCourses.addEventListener('submit', event => {
    event.preventDefault() //Al evento le decimos que no se ejecute.
    const target = event.target;
    const courseTitle = target.courseTitle.value;
    const coursePoster = target.coursePoster.value;
    const coursePrice = target.coursePrice.value;

    const course = new Course(courseTitle, coursePoster, coursePrice);

    renderCourse(course);
})




//Imprime PROFESORES en el DOM cuando recibe un objeto tipo curso
const renderTeacher = teacher => {
const teacherContainer = document.getElementById('teachers');
const articleTeachers = document.createElement('article');
articleTeachers.classList.add('card');

const teacherInformation = document.createElement('div');
teacherInformation.classList.add('card__data',  's-border', 's-radius-br', 's-radius-bl', 's-pxy-2');
const teacherTitle = document.createElement('p');
teacherTitle.classList.add('t5', 's-mb-2', 's-center');
teacherTitle.innerText = 'Profesor';

const divInformation1 = document.createElement('div');
divInformation1.classList.add('s-mb-2', 's-main-center');
const divInformation2 = document.createElement('div');
divInformation2.classList.add('card__teacher', 's-cross-center', 'm-py-3');
const divInformation3 = document.createElement('div');
divInformation3.classList.add('card__avatar', 's-mr-1');
const divInformation4 = document.createElement('div');
divInformation4.classList.add('circle', 'img-container');
const teacherImg = document.createElement('img');
teacherImg.setAttribute('src', teacher.getImage());
teacherImg.setAttribute('alt', `${teacher.getName()} ${teacher.getLastname()}`);
const spanFullname = document.createElement('span');
spanFullname.classList.add('small');
spanFullname.innerText =`${teacher.getName()} ${teacher.getLastname()}`;

const dictatedCourses = document.createElement('p');
dictatedCourses.classList.add('small');
dictatedCourses.innerText = `Mis cursos disponibles: ${teacher.getDictatedCourses()}`;

const coursesQty = document.createElement('p');
coursesQty.classList.add('small');
coursesQty.innerText = `Dicto ${teacher.getCoursesQty()} cursos en Arikok Cursos.`;

divInformation4.append(teacherImg);
divInformation3.appendChild(divInformation4);
divInformation2.append(divInformation3, spanFullname);
divInformation1.append(divInformation2, dictatedCourses, coursesQty);
teacherInformation.appendChild(divInformation1);
articleTeachers.appendChild(teacherInformation);
teacherContainer.appendChild(articleTeachers);
}

//Toma datos del formulario y crea una instancia del Curso
const formTeachers = document.querySelector('#idTeachers');
formTeachers.addEventListener('submit', event => {
    event.preventDefault() //Al evento le decimos que no se ejecute.
    const target = event.target;
    const teacherName = target.teacherName.value;
    const teacherLastname = target.teacherLastname.value;
    const teacherImage = target.teacherImage.value;
    const teacherDictatedCourses = target.teacherDictatedCourses.value;
    const teacherCoursesQty = target.teacherCoursesQty.value;

    const teacher = new Teacher(teacherName, teacherLastname, teacherImage, teacherDictatedCourses, teacherCoursesQty);

    renderTeacher(teacher);
})
