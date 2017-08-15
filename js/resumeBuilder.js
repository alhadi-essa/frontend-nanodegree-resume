 var bio={
    name:"Essa Al-hadi",
    role:"Technical Consultant",
    contacts:[{
        mobile:"+966-58285-2282",
        email:"alhadi.essa@gmail.com",
        github:"alhadi-essa",
        linkdin:"alhadiessa",
        location:"Riyadh"
    }],
    welcomeMessage:"I'm loving with world",
    skills:["JS","HTML","ITIL","CSS","ITSM","Photographer"],
    biopic:"images/Me.jpg"
 };

  var work={
    "jobs":[
    {
    "employer":"Unikomm",
    "title":"Technical Consultant",
    "dates":"Feb/2016 - Present",
    "location":"Riyadh",
    "description":"Responsible for the successful design and delivery of ServiceNow solution and ITIL best practices, in a client-consulting environment.including Application UI Configuration, Workflow Configuration, Development of client specific reporting, Development of integration components (SSO, LDAP, etc.), Day-to-day System Administration, Reporting and Performance Analysis, Surveys, Email Notifications, Knowledge Management, Incident Change Management, Service Catalog, and AD integration."
    }],
    "training":[{
        "name":"Saudi Aramco",
        "title":"DataBase Adminstrator",
        "dates":"06/13-07/13",
        "location":"AL Dhahran",
        "description":"I get training for 2 months as DB Administrator in COD/DMD/Database Administration Group in Saudi Aramco,during this time i attended many workshops such as Security in IT, Patrol Monitoring System, (Course) Introduction to UNIX Operating System and Oracle RAC High Availability Solution."
    },
    {
        "name":"Summer Training in Japan",
        "title":"Computer Science",
        "dates":"June/2014 - July/2014",
        "location":"Tokyo",
        "description":"Study and training in best unversities in japan.Study performed in Osaka Unversity,Nagoya Unversity,MIE Unversity,University of Tokyo and Tokyo Unversity of Technology.Training performed in Kyocera Corporation,Panasonic Center and NEC Corporation"
    }]
 };

  var education={
    "schools":[{
    "name":"Jazan University",
    "degree":"BA",
    "major":"Computer Science",
    "dates":"2010 - 2015",
    "location":"Gizan"
    }],
    "onlineCourses":[{
        "tittle":"Front-End Nanodegree",
        "school":"Udacity",
        "dates":"Aug-Sep",
        "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
  };

var projects={
    "project":[{
    "title":"Sanabel Alsalam-ITSM SNOW Project",
    "dates":"Feb 2017 – Mar 2017",
    "description":"Drive Innovation by implementing ITSM process using world class Service management tool, with an objective to standardize the service delivery process within Sanabel Alsalam.To implement:Incident Management,Service Level Management,Reports and Dashboards,Integration,Active Directory for user authentication,Exchange for email notifications,Asset Management (CI to be loaded from SCCM),and Arabization of Incident management for the end user interface",
    "images":""
  },{
    "title":"Computrized Medical Shop Managment",
    "dates":"Feb 2015 – June 2015",
    "description":"The methodology that we have adopted to solve the said problem of the “MEDICAL SHOP MANAGEMENT SYSTEM” is a database handling system. As a front-end tool we have used Visual Basic to interact with the user and as a back-end tool we used Microsoft Access 8.When user logs on the system at first his/her authentication is validated and then user gets control of the application. Now he/she can add, modify or search the records, but if the user is an unauthorized one then he/she cannot enter the system and hence would not be able to modify the records.As the Visual Basic is an event driven procedure, all the tasks are done in modular approach, which has been supplied with the code sheet. But the application has several functions, procedures to enhance efficacy of the program.",
    "images":""
  }
              ]};

  bio.display= function(){
    var formattedName=HTMLheaderName.replace("%data%",bio.name);
    var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
    var formattedbioPic=HTMLbioPic.replace("%data%",bio.biopic);
    var formattedWM=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('#header').append(formattedbioPic);
    $('#header').append(formattedWM);

    if (bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills);
    $("#skills").append(formattedSkill);
    }

    for(contact in bio.contacts) {
        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
        var formattedEmail = HTMLemail.replace("link","https://www.linkedin.com/in/alhadiessa/").replace("%data%",bio.contacts[contact].email);
        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts[contact].location);
        var formattedLinkdin = HTMLLinkden.replace("link","https://www.linkedin.com/in/alhadiessa/").replace("%data%",bio.contacts[contact].linkdin);
        $("#footerContacts").append(formattedMobile,formattedEmail,formattedLinkdin);
        $("#topContacts").append(formattedMobile,formattedEmail,formattedLinkdin,formattedLocation);
    };
  };

  work.display =function(){
 for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var FormaattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var FormaattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var FormaattedDates= HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var FormaattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var FormaattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var FormaattedEmployerTitle= FormaattedEmployer + FormaattedTitle;
    $(".work-entry:last").append(FormaattedEmployerTitle,FormaattedDates,FormaattedLocation,FormaattedDescription);
    }
$("#workExperience").append(HTMLTraining);
    for (list in work.training){
    $("#workExperience").append(HTMLworkStart);
    var FormaattedName= HTMLTrainingName.replace("%data%", work.training[list].name);
    var FormaattedTrTitle= HTMLTrainingTitle.replace("%data%", work.training[list].title);
    var FormaattedTrDates= HTMLTrainingDates.replace("%data%", work.training[list].dates);
    var FormaattedTrLocation= HTMLTrainingLocation.replace("%data%", work.training[list].location);
    var FormaattedTrDescription= HTMLTrainingDescription.replace("%data%", work.training[list].description);
    $(".work-entry:last").append(FormaattedName + FormaattedTrTitle,FormaattedTrDates,FormaattedTrLocation,FormaattedTrDescription);
        }
    };

    projects.display= function(){
        for (list in projects.project){
    $("#projects").append(HTMLprojectStart);
    var FormaattedTitle= HTMLprojectTitle.replace("%data%", projects.project[list].title);
    var FormaattedDates= HTMLprojectDates.replace("%data%", projects.project[list].dates);
    var FormaattedDescription= HTMLprojectDescription.replace("%data%", projects.project[list].description);
    $(".project-entry:last").append(FormaattedTitle,FormaattedDates,FormaattedDescription);
    }
    };

    education.display=function() {
        for (list in education.schools){
    $("#education").append(HTMLschoolStart);
    var FormaattedName= HTMLschoolName.replace("%data%", education.schools[list].name);
    var FormaattedDegree= HTMLschoolDegree.replace("%data%", education.schools[list].degree);
    var FormaattedDates= HTMLprojectDates.replace("%data%", education.schools[list].dates);
    var FormaattedLocation= HTMLschoolLocation.replace("%data%", education.schools[list].location);
    var FormaattedMajor= HTMLschoolMajor.replace("%data%", education.schools[list].major);
    $(".education-entry:last").append(FormaattedName+FormaattedDegree,FormaattedDates,FormaattedLocation,FormaattedMajor);
        }
        for (list in education.onlineCourses){
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    var FormaattedName= HTMLonlineTitle.replace("%data%", education.onlineCourses[list].tittle);
    var FormaattedDegree= HTMLonlineSchool.replace("%data%", education.onlineCourses[list].school);
    var FormaattedDates= HTMLonlineDates.replace("%data%", education.onlineCourses[list].dates);
    var FormaattedUrl= HTMLonlineURL.replace("%data%", education.onlineCourses[list].url);
    $(".education-entry:last").prepend(FormaattedName+FormaattedDegree,FormaattedDates,FormaattedUrl);
        }
    };


 bio.display();
 work.display();
 projects.display();
 education.display();
 $("#mapDiv").append(googleMap);
