 var bio={
    name:"Essa Al-hadi",
    role:"Technical Consultant",
    contacts:[{
        mobile:"+966-58285-2282",
        email:"alhadi.essa@gmail.com",
        github:"alhadi-essa",
        linkdin:"alhadiessa",
        locatiom:"Riyadh,Saudi Arabia"
    }],
    welcomeMessage:"",
    skills:["JS","HTML","ITIL","CSS"],
    bioPic:"images/Me.jpg"
 }

  var work={
    position:"Technical Consultant",
    employer:"Unikomm",
    years:"Feb/2016 - Present",
    city:"Riydh"
 }

  var education={
    schools:[
    {
    "name":"Jazan Univerity",
    "degree":"BA",
    "major":"Computer Science",
    "dates":"2010 - 2015",
    "city":"Gizan,Saudi Arabia"
    }
    ]
 };

 var formatedName=HTMLheaderName.replace("%data%",bio.name);
 var formatedRole=HTMLheaderRole.replace("%data%",bio.role);

 $("#header").prepend(formatedRole);
 $("#header").prepend(formatedName);

 $("#header").append(work["position"]);
 $("#header").append(education.name);

 if (bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
 }

 for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var FormaattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var FormaattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var FormaattedEmployerTitle= FormaattedEmployer + FormaattedTitle;
    $(".work-entry:last").append(FormaattedEmployerTitle);
 }

