 var bio = {
     "name": "Essa Al-hadi",
     "role": "Technical Consultant",
     "contacts": {
         "mobile": "+966-58285-2282",
         "email": "alhadi.essa@gmail.com",
         "github": "alhadi-essa",
         "linkdin": "alhadiessa",
         "location": "Riyadh"
     },
     "welcomeMessage": "I'm loving with world",
     "skills": ["JS", "HTML", "ITIL", "CSS", "ITSM", "Photographer"],
     "biopic": "images/Me.jpg"
 };

 var work = {
     "jobs": [{
         "employer": "Unikomm",
         "title": "Technical Consultant",
         "dates": "Feb/2016 - Present",
         "location": "Riyadh",
         "description": "Responsible for the successful design and delivery of ServiceNow solution and ITIL best practices, in a client-consulting environment.including Application UI Configuration, Workflow Configuration, Development of client specific reporting, Development of integration components (SSO, LDAP, etc.), Day-to-day System Administration, Reporting and Performance Analysis, Surveys, Email Notifications, Knowledge Management, Incident Change Management, Service Catalog, and AD integration."
     }],
     "training": [{
             "name": "Saudi Aramco",
             "title": "DataBase Adminstrator",
             "dates": "06/13-07/13",
             "location": "AL Dhahran",
             "description": "I get training for 2 months as DB Administrator in COD/DMD/Database Administration Group in Saudi Aramco,during this time i attended many workshops such as Security in IT, Patrol Monitoring System, (Course) Introduction to UNIX Operating System and Oracle RAC High Availability Solution."
         },
         {
             "name": "Summer Training in Japan",
             "title": "Computer Science",
             "dates": "June/2014 - July/2014",
             "location": "Tokyo",
             "description": "Study and training in best unversities in japan.Study performed in Osaka Unversity,Nagoya Unversity,MIE Unversity,University of Tokyo and Tokyo Unversity of Technology.Training performed in Kyocera Corporation,Panasonic Center and NEC Corporation"
         },
         {
             "name": "ServiceNow Implementation Bootcamp",
             "title": "Implementation Specialist",
             "dates": "March/2017",
             "location": "London",
             "description": "Covers common technical aspects of an implementation as well as processes to effectively manage an implementation. This mix allows to learn tactical skills and responsibilities required based on their role as well as develop a holistic view of all team roles and responsibilities."
         }
     ]
 };

 var education = {
     "schools": [{
         "name": "Jazan University",
         "degree": "BA",
         "majors": ["Computer Science"],
         "dates": "2010 - 2015",
         "location": "Gizan"
     }],
     "onlineCourses": [{
         "title": "Front-End Nanodegree",
         "school": "Udacity",
         "dates": "Aug-Sep",
         "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
     }]
 };

 var projects = {
    "projects": [{
     "title": "Sanabel Alsalam-ITSM SNOW Project",
     "dates": "Feb 2017 – Mar 2017",
     "description": "Drive Innovation by implementing ITSM process using world class Service management tool, with an objective to standardize the service delivery process within Sanabel Alsalam.To implement:Incident Management,Service Level Management,Reports and Dashboards,Integration,Active Directory for user authentication,Exchange for email notifications,Asset Management (CI to be loaded from SCCM),and Arabization of Incident management for the end user interface",
     "images": [""]
 }, {
     "title": "Computrized Medical Shop Managment",
     "dates": "Feb 2015 – June 2015",
     "description": "The methodology that we have adopted to solve the said problem of the “MEDICAL SHOP MANAGEMENT SYSTEM” is a database handling system. As a front-end tool we have used Visual Basic to interact with the user and as a back-end tool we used Microsoft Access 8.When user logs on the system at first his/her authentication is validated and then user gets control of the application. Now he/she can add, modify or search the records, but if the user is an unauthorized one then he/she cannot enter the system and hence would not be able to modify the records.As the Visual Basic is an event driven procedure, all the tasks are done in modular approach, which has been supplied with the code sheet. But the application has several functions, procedures to enhance efficacy of the program.",
     "images": ["images/GP-PEntry.jpg", "images/GP-SEntry.jpg", "images/GP-Sales.jpg", "images/GP-Bill.jpg"]
 }]
};

 bio.display = function() {
     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
     var formattedWM = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     $('#header').prepend(formattedRole);
     $('#header').prepend(formattedName);
     $('#header').append(formattedbioPic);
     $('#header').append(formattedWM);
     var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     var formattedLinkdin = HTMLLinkden.replace("%data%", bio.contacts.linkdin);
     $("#footerContacts").append(formattedMobile, formattedEmail, formattedLinkdin);
     $("#topContacts").append(formattedMobile, formattedEmail, formattedLinkdin, formattedLocation);
     $("#header").append(HTMLskillsStart);
     bio.skills.forEach(function(skill) {
         var formattedSkill = HTMLskills.replace("%data%", skill);
         $("#skills").append(formattedSkill);
     });
 };

 work.display = function() {
     work.jobs.forEach(function(job) {
         $("#workExperience").append(HTMLworkStart);
         var FormaattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
         var FormaattedTitle = HTMLworkTitle.replace("%data%", job.title);
         var FormaattedDates = HTMLworkDates.replace("%data%", job.dates);
         var FormaattedLocation = HTMLworkLocation.replace("%data%", job.location);
         var FormaattedDescription = HTMLworkDescription.replace("%data%", job.description);
         var FormaattedEmployerTitle = FormaattedEmployer + FormaattedTitle;
         $(".work-entry:last").append(FormaattedEmployerTitle, FormaattedDates, FormaattedLocation, FormaattedDescription);
     });
     $("#workExperience").append(HTMLTraining);
     for (var list in work.training) {
         if (work.training) {
             $("#workExperience").append(HTMLworkStart);
             var FormaattedName = HTMLTrainingName.replace("%data%", work.training[list].name);
             var FormaattedTrTitle = HTMLTrainingTitle.replace("%data%", work.training[list].title);
             var FormaattedTrDates = HTMLTrainingDates.replace("%data%", work.training[list].dates);
             var FormaattedTrLocation = HTMLTrainingLocation.replace("%data%", work.training[list].location);
             var FormaattedTrDescription = HTMLTrainingDescription.replace("%data%", work.training[list].description);
             $(".work-entry:last").append(FormaattedName + FormaattedTrTitle, FormaattedTrDates, FormaattedTrLocation, FormaattedTrDescription);
         }
     }
 };

 projects.display = function() {
     projects.projects.forEach(function(item) {
         $("#projects").append(HTMLprojectStart);
         var FormaattedTitle = HTMLprojectTitle.replace("%data%", item.title);
         var FormaattedDates = HTMLprojectDates.replace("%data%", item.dates);
         var FormaattedDescription = HTMLprojectDescription.replace("%data%", item.description);
         $(".project-entry:last").append(FormaattedTitle, FormaattedDates, FormaattedDescription);
         item.images.forEach(function(image) {
             var projectImage = HTMLprojectImage.replace("%data%", image);
             $(".project-entry:last").append(projectImage);
         });
     });
 };

 education.display = function() {
     education.schools.forEach(function(school) {
         $("#education").append(HTMLschoolStart);
         var FormaattedName = HTMLschoolName.replace("%data%", school.name);
         var FormaattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
         var FormaattedDates = HTMLprojectDates.replace("%data%", school.dates);
         var FormaattedLocation = HTMLschoolLocation.replace("%data%", school.location);
         var formatedMajors = HTMLschoolMajor.replace("%data%", school.majors);
         $(".education-entry:last").append(FormaattedName + FormaattedDegree, FormaattedDates, FormaattedLocation, formatedMajors);
     });
     $("#education").append(HTMLonlineClasses);
     education.onlineCourses.forEach(function(lists) {
         var FormaattedNameC = HTMLonlineTitle.replace("%data%", lists.title);
         var FormaattedDegreeC = HTMLonlineSchool.replace("%data%", lists.school);
         var FormaattedDatesC = HTMLonlineDates.replace("%data%", lists.dates);
         var FormaattedUrl = HTMLonlineURL.replace("%data%", lists.url);
         $("#education").append(HTMLschoolStart);
         $(".education-entry:last").prepend(FormaattedNameC + FormaattedDegreeC, FormaattedDatesC, FormaattedUrl);
     });
 };


 bio.display();
 work.display();
 projects.display();
 education.display();
 $("#mapDiv").append(googleMap);