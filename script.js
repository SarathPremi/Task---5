const res = new XMLHttpRequest();
res.open("GET", "./resume.json");
res.send();
res.onload = () => {
  const resume = JSON.parse(res.response);
  console.log(resume);
};