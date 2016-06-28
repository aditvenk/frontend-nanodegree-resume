/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
 * var awesome_thoughts = "I am Aditya and I'm AWESOME!";
 * var fun_thoughts = awesome_thoughts.replace("AWESOME", "FUN");
 * $("#main").append(fun_thoughts);
*/

var skills = [" Microarchitecture", "Operating Systems", "Programming", "Parallel Software"];
var bio = {
    "name" : "Aditya Venkataraman",
    // "age"  : 25,
    "role" : "Computer Architect",
    "contacts" : {
        "email": "aditya DOT venky AT gmail DOT com",
        "mobile": "12345678910",
        "twitter": "@aditvenk",
        "location" : "Madison",
    },
    "github" : "https://github.com/aditvenk",
    "blog" : "http://theelectronicdialogue.blogspot.com",
    "picture" : "images/av.jpg",
    "welcome" : "Welcome to my Resume!",
    "skills" : skills
};


var formatted_name = HTMLheaderName.replace("%data%", bio.name);
var formatted_role = HTMLheaderRole.replace("%data%", bio.role);
//$("#header").prepend(HTMLskills.replace("%data%", bio.skills));
//$("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcome));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.picture));
$("#header").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").prepend(HTMLblog.replace("%data%", bio.blog));
$("#header").prepend(HTMLgithub.replace("%data%", bio.github));
$("#header").prepend(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#header").prepend(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").prepend(formatted_role);
$("#header").prepend(formatted_name);


var work = {
    "jobs" : [
        {
            "position" : "Graduate Research Assistant",
            "employer" : "Dept. of Computer Sciences",
            "years" : "2014-2016",
            "location" : "Madison",
            "description" : "Studied emerging parallel programming paradigms such as event-driven systems."
        },
        {
            "position" : "CPU Architecture Intern",
            "employer" : "NVIDIA Inc.",
            "years" : "Summer 2015",
            "location" : "Beaverton",
            "description" : "Developed C++ models for Front-End CPU pipeline stages."
        },
        {
            "position" : "System Architect",
            "employer" : "NVIDIA Inc.",
            "years" : "2012-2014",
            "location" : "Bangalore",
            "description" : "Developed dynamic power management techniques. Created simulation models for multimedia accelerators"
        }
    ]
};

var education = {
    "schools" : [
        {
            "school" : "University of Wisconsin - Madison",
            "years" : "2014-2016",
            "degree" : "Masters",
            "major" : "Computer Sciences",
            "location" : "Madison"
        },
        {   "school" : "National Institute of Technology - Tiruchirappalli",
            "years" : "2008-2012",
            "degree" : "Bachelors",
            "major" : "Electronics and Communication Engineering",
            "location" : "Tiruchirappalli"
        }
    ]
};

//$("#main").append(work.position);
//$("#main").append(education["school"]);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for ( s in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[s]));
    }
}
function displayWork () {
    for ( i in work.jobs) {
        //console.log(work.jobs[i].position);
        $("#workExperience").append(HTMLworkStart);
        var emp = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[i].position);
        $(".work-entry:last").append(emp+" "+title);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].years) + " " + HTMLworkLocation.replace("%data%",work.jobs[i].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
        $(".work-entry:last").append("<br>");
    }
}
displayWork();

function displayEducation () {
    for ( i in education.schools) {
        //console.log(work.jobs[i].position);
        $("#education").append(HTMLschoolStart);
        var sc = HTMLschoolName.replace("%data%", education.schools[i].school);
        var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(sc+" "+degree);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].years) + " " + HTMLschoolLocation.replace("%data%",education.schools[i].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
        $(".education-entry:last").append("<br>");
    }
}
displayEducation();
/*
$(document).click( function(loc) { 
    logClicks(loc.pageX, loc.pageY);
});
*/
/*
$("#main").append(internationalizeButton);
function inName( name) {
    var ns = name.split(" ");
    var name1 = ns[0];
    var name2 = ns[1];
    name2 = name2.toUpperCase();
    name1 = name1.toLowerCase();
    name1 = (name1.slice(0, 1)).toUpperCase() + name1.slice(1);
    return name1+ " " + name2 ;   
}
*/

$("#mapDiv").append(googleMap);


