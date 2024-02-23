// all information from the JSObjectNotationResume
const res = new XMLHttpRequest();
res.open("GET", "./resume.json");
res.send();
res.onload = () => {
  const resume = JSON.parse(res.response);
    console.log(resume);

    
// for iterate  
    for (let i = 0; i < resume.skills.length; i++) {
      console.log(resume.skills[i]);
    }

//for...in iterate   
    for (let key in resume.contact) {
      console.log(`${key}: ${resume.contact[key]}`);
    }

//for...of itearate    
    for (let experience of resume.experience) {
      console.log(
        `${experience.title} at ${experience.company}, ${experience.location}`
      );
    }

//forEach iterate    
    resume.education.forEach(function (education) {
      console.log(
        `${education.degree} from ${education.institution}, ${education.location}`
      );
    });
};