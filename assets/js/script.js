// if(!document.readyState()) return
emailjs.init(`jJDm6YUhKRPu4RIWD`);

let role = document.getElementById("role")
let typewriter = new Typewriter(role, {
    loop: true,
    delay: 100
})
const pauseDelay = 1000;
const style = `color:#29f3c3;`;
typewriter.typeString(`<span style=${style}>Back-end</span>`)
    .pauseFor(pauseDelay)
    .deleteAll()
    .typeString(`<span style=${style}>Front-end</span>`)
    .pauseFor(pauseDelay)
    .deleteAll()
    .typeString(`<span style=${style}>Fullstack</span>`)
    .pauseFor(pauseDelay)
    .deleteAll()
    .start();

let technoTitle = document.getElementById("technologies-title")
let technoTitleTypewriter = new Typewriter(technoTitle,{
    loop: true,
    delay: 100
})
technoTitleTypewriter.typeString(`Skills`)
    .pauseFor(pauseDelay)
    .deleteAll()
    .start()

const projectsTitle = document.getElementsByClassName('recent-projects-title')[0].getElementsByClassName('text')[0];
const projectsTypewriter = new Typewriter(projectsTitle, {
    loop: true,
    delay: 100
})
projectsTypewriter.typeString(`<span>Projects</span>`)
    .pauseFor(pauseDelay)
    .deleteAll()
    .start()

const contactTitle = document.getElementsByClassName('left-contact')[0].getElementsByClassName('title')[0].getElementsByClassName('text')[0];
const contactTypewriter = new Typewriter(contactTitle, {
    loop: true,
    delay: 100
})
contactTypewriter.typeString(`Contact`)
    .pauseFor(pauseDelay)
    .deleteAll()
    .start()

const displayElement = (element, display) => {
    element.style.display = display ? 'block' : 'none';
}
const changeOpacity = (element, opactityValue) => {
    element.style.opacity = parseFloat(opactityValue);
}
const navMobileButton = document.getElementById("nav-mobile-button");
const navMobile = document.getElementById("nav-mobile");
const bgNav = document.getElementById("bgNav");

navMobileButton.addEventListener('click', () => {
    displayElement(navMobile, true);
    changeOpacity(navMobile, 1);
    displayElement(bgNav, true);
});

bgNav.addEventListener('click', () => {
    changeOpacity(navMobile, 0);
    displayElement(navMobile, false);
    displayElement(bgNav, false);
})

document.addEventListener('scroll', (e) => {
    // console.log(e)
})
const sections = {
    HOME: 'landing-page',
    TECHNOS: 'technologies',
    PROJECTS: 'recent-projects',
    CONTACT: 'contact'
}
const home = document.getElementById("landing-page");
const technologies = document.getElementById("technologies");
const projects = document.getElementById("recent-projects");
const contact = document.getElementById("contact");

const handleScrollTo = (target) => {
    if (target == sections.HOME) home.scrollIntoView();
    else if (target == sections.TECHNOS) technologies.scrollIntoView();
    else if (target == sections.PROJECTS) projects.scrollIntoView();
    else if (target == sections.CONTACT) contact.scrollIntoView();
}

const btn = document.getElementsByClassName('btn')[0];
// btn.innerHTML = 'lelena'
document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
    const email = this.email.value;
    const name = this.from_name.value;
    const message = this.message.value;
    if(!email | !name | !message){
        return
    }
    btn.innerHTML = "sending ..."
   const serviceID = 'default_service';
   const templateID = 'template_e1gywld';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerHTML = "Email sent !"
      alert('Email sent successfully !');
      window.location.reload()
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
      console.log(err)
      btn.innerHTML = "Submit"
    });
});