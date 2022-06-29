// Display teahers section dynamically
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
        teacherName: 'Kingsley Okine',
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
const cardContainer = document.getElementById('facilitators-persons');

const cards = myArray.map((card) => ` <div class="facilitators-info">
                 <div class="teacher-img"><img src="${card.image}" alt=""></div>
                 <div class='facilitators-info__words'>
                   <div class="name"><p>${card.teacherName}</p></div>
                   <div class="designation">${card.designation}</div>
                   <hr />
                   <div class="teacher-text"><p>${card.text}</p></div>
                 </div>
                </div>
    
    </div>`).join('');

cardContainer.innerHTML += cards;

// Display mobile menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('desktop-nav')
const menuItems = document.querySelector('.close-menu');
const logo = document.querySelector('#heading-text')

function openMenu() {
  hamburger.classList.toggle('fa-xmark');
  menu.classList.toggle('show');
  document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';
}

function closeMenu() {
  hamburger.classList.replace('fa-xmark', 'fa-bars');
  menu.classList.replace('show', 'hide');
  document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'auto';
}

hamburger.addEventListener('click', openMenu);
menuItems.addEventListener('click', closeMenu);
