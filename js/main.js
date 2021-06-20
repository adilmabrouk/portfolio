//Showing about Sections
const experience = document.querySelector('.experience');
const education = document.querySelector('.education');
const skills__container= document.querySelector('.skills__container');

document.querySelector('#skills').addEventListener('click',()=>{
    experience.style.display = "none";
    education.style.display = "none";
    skills__container.style.display = "unset";
})
document.querySelector('#education').addEventListener('click',()=>{
    experience.style.display = "none";
    education.style.display = "unset";
    skills__container.style.display = "none";
})
document.querySelector('#experience').addEventListener('click',()=>{
    experience.style.display = "unset";
    education.style.display = "none";
    skills__container.style.display = "none";
})

//Active Links
const navLink = document.querySelectorAll('.skills .item');

function linkAction(){
    
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction))





document.querySelector('.btn__menu').addEventListener('click',()=>{
    const menu = document.querySelector('.nav__menu');
    menu.style.visibility = 'unset';
    menu.style.opacity = '1';
})

document.querySelector('.close__menu').addEventListener('click',()=>{
    const menu = document.querySelector('.nav__menu');
    menu.style.visibility = 'hidden';
    menu.style.opacity = '0';
})



const navItem = document.querySelectorAll('.nav__item');

function Action(){
    const menu = document.querySelector('.nav__menu');
    menu.style.visibility = 'hidden';
    menu.style.opacity = '0';
}
navItem.forEach(n => n.addEventListener('click', Action))


    const tabs = document.querySelector(".portfolio-section .nav__list"),
    projects = document.querySelector(".projects"),
    projects_items = document.querySelectorAll(".projects .item"),
    pop__up = document.querySelector(".pop__up"),
    nextBtn = pop__up.querySelector(".fa-play-right"),
    prevBtn = pop__up.querySelector(".fa-play-left"),
    closeBtn = pop__up.querySelector(".fa-times"),
    projectsDetails = pop__up.querySelector(".details__all"),
    projectsDetailsBtn = pop__up.querySelector(".btn__details .btn");

    let indexitem , screenshots , slideIndex;

    //filter porjetcs items
    tabs.addEventListener('click',(event)=>{
        if(event.target.classList.contains('item') && !event.target.classList.contains('active')){
            
            //desactive and active the new item
            tabs.querySelector('.active').classList.remove('active');
            event.target.classList.add('active');

            const target = event.target.getAttribute("data-target");

            projects_items.forEach((item)=>{
                if(target === item.getAttribute('data-categorie') || target === 'all'){
                    item.classList.remove('hide');
                    item.classList.add('show');
                }
                else{
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            })
            
        }
    })

    projects.addEventListener('click',(event)=>{
    
        // get project item index
         indexitem = Array.from(event.target.closest('.item').parentElement.children).indexOf(event.target.closest('.item'));
        
         screenshots = projects_items[indexitem].querySelector('.image__box img').getAttribute('data-screenshots').split(",");
        // convert screenshots to array
         slideIndex = 0;

         popupToggle();

         popupSlidShow();

         popupDetails();
    })

    //Close the Popup
    closeBtn.addEventListener('click',()=>{
        popupToggle();

        if(projectsDetails.classList.contains('show')){
            projectsDetails.classList.remove('show');
            document.querySelector('.change').classList.remove('fa-minus');
            document.querySelector('.change').classList.add('fa-plus');
        }
    })

    //Show the Popup
    function popupToggle(){
        pop__up.classList.toggle('open');
        stopScroling();
    }
    
    //Get the screenshoots
    function popupSlidShow(){
        const images = screenshots[slideIndex],
              imageBox = document.querySelector('.image__container img');
             
              imageBox.src = images;

              document.querySelector('.counter').innerHTML = (slideIndex + 1) + "of" + screenshots.length;
    }
    //Next slide
    nextBtn.addEventListener('click', ()=>{
        if(slideIndex === screenshots.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        popupSlidShow();
    })
    //Prev slide
    prevBtn.addEventListener('click', ()=>{
        if(slideIndex === 0){
            slideIndex = screenshots.length -1;
        }
        else{
            slideIndex--;
        }
        popupSlidShow();
    })

    //Show and Hide Details popup
    projectsDetailsBtn.addEventListener('click',()=>{
        if(projectsDetails.classList.contains('show')){
            projectsDetails.classList.remove('show');
            document.querySelector('.change').classList.remove('fa-minus');
            document.querySelector('.change').classList.add('fa-plus');
        }
        else{
            projectsDetails.classList.add('show');
            document.querySelector('.change').classList.remove('fa-plus');
            document.querySelector('.change').classList.add('fa-minus');
        }

    })
    //Desative the body scroling
    function stopScroling(){
        document.querySelector('body').classList.toggle('stopScroling');
    }

     //get project details 

     function popupDetails(){

            const title = projects_items[indexitem].querySelector('.title').innerHTML,
                  categorie = projects_items[indexitem].getAttribute('data-categorie'),
                  description = projects_items[indexitem].querySelector('.project__brief p').innerHTML,
                  datee = projects_items[indexitem].querySelector('.date span').innerHTML,
                  client = projects_items[indexitem].querySelector('.client span').innerHTML,
                  link = projects_items[indexitem].querySelector('.link a').innerHTML,
                  tools = projects_items[indexitem].querySelector('.tools span').innerHTML;

            
            const ppDetails = document.querySelector('.details__all');
            const pp_title = ppDetails.querySelector('.title'),
                  pp_categorie = ppDetails.querySelector('.categorie'),
                  pp_description = ppDetails.querySelector('.project__brief p'),
                  pp_datee = ppDetails.querySelector('.date span'),
                  pp_client = ppDetails.querySelector('.client span'),
                  pp_link = ppDetails.querySelector('.link a'),
                  pp_tools = ppDetails.querySelector('.tools span');

                  pp_title.innerHTML = title;
                  pp_categorie.innerHTML = categorie.split("_").join(" ");
                  pp_description.innerHTML = description;
                  pp_datee.innerHTML = datee;
                  pp_client.innerHTML = client;
                  pp_link.innerHTML = link;
                  pp_tools.innerHTML = tools;
                  
     }


    



