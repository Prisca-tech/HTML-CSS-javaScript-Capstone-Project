const myArray = [
    {
        //  Teacher 1
       image:'./Assets/CareerCoach.jpg',
       teacherName: 'Eva Alordia',
       designation: 'Career Coach',
       text: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    },
    // Teacher 2
    {
        image:'./Assets/Ben.jpg',
        teacherName: 'Benedict Simon',
        designation: 'Backend Dev.',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    },
 //  Teacher 3
    {
        image:'./Assets/Precious.jpg',
        teacherName: 'Precious Udegbue',
        designation: 'Front-end Dev.',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    },
 //  Teacher 4
    {
        image:'./Assets/killy.jpg',
        teacherName: 'KIngsley Okine',
        designation: 'Design/Tech Support',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    },
 //  Teacher 5
    {
        image:'./Assets/bem.webp',
        teacherName: 'Abe Precious',
        designation: 'Student Success',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    },
 //  Teacher 6
    {
        image:'./Assets/Administrator.jpg',
        teacherName: 'Godfrey Grace',
        designation: 'Administrator',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    }
]
const cardContainer = document.getElementById('teachers-section');

const cards = myArray.map((card) => ` <div class="facilitators-info">
      <div class="teachers">
                 <div class="teacher-img"><img src="${card.image}" alt=""></div>
                 <div class="name">${card.teacherName}</div>
                 <div class="designation">${card.designation}</div>
                 <div class="teacher-text"><p>${card.text}</p></div>
                 </div>
      </div>
    </div>`).join('');

cardContainer.innerHTML += cards;