const skills = [

    {
        skill_name : 'C' ,
        skill_percent: 90 
    },
    {
        skill_name : 'Python',
        skill_percent : 85
    },
    {
        skill_name : 'R',
        skill_percent : 20
    },
    {
        skill_name : 'Html',
        skill_percent : 90
    },
    {
        skill_name : 'Css',
        skill_percent : 85
    },
    {
        skill_name : 'Javascript',
        skill_percent : 40
    },
    {
        skill_name : 'Linux',
        skill_percent : 30
    },
    {
        skill_name : 'Sql',
        skill_percent : 20
    }
]

const colors = ['brown' , 'darkgreen' ,'orange' ,'darkolive','indigo' ,'orange' ,'darkblue']


const skills_display_section = document.querySelector('.skills_display');

window.addEventListener("DOMContentLoaded",function(){
    display_skills(skills) ;
  });

function random_index(){

    return Math.floor( Math.random()*colors.length);
  }

function display_skills (skills){

let display_skills = skills.map(function (item) {
    
    let color = colors[random_index()];

    return `<div class="skill_wrap">
    <div class="skill_percent" style = "width : ${item.skill_percent}% ; background-color : ${color}">
        <div class="skill_name">
            <span>${item.skill_name}</span>
        </div>
    </div>
</div>`;

});

display_skills = display_skills.join("");

skills_display_section.innerHTML = display_skills ;

}