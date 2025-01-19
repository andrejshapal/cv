// Andrejs Šapals as24193
window.addEventListener("DOMContentLoaded", (event) => {
  const about = document.getElementById("about");
  const aboutButton = document.getElementById("about-button");
  const aboutButtonDiv = document.getElementById("about-button-div");

  aboutButton.addEventListener("click", () => {
    about.classList = "";
    aboutButtonDiv.classList = "about-hidden";
  });

  const jobs = document.getElementById("jobs");
  experience.map((job) => {
    const jobDiv = document.createElement("div");
    jobDiv.classList = "job";

    const jobTitle = document.createElement("div");
    jobTitle.classList = "job-position";
    jobTitle.textContent = job.title;
    jobDiv.appendChild(jobTitle);

    const jobCompany = document.createElement("div");
    jobCompany.textContent = job.company;
    jobDiv.appendChild(jobCompany);

    const jobPeriod = document.createElement("div");
    jobPeriod.textContent = job.period;
    jobDiv.appendChild(jobPeriod);

    jobs.appendChild(jobDiv);
  });

  const edu = document.getElementById("edu");
  education.map((org) => {
    const eduDiv = document.createElement("div");
    eduDiv.classList = "job";

    const eduTitle = document.createElement("div");
    eduTitle.classList = "job-position";
    eduTitle.textContent = org.title;
    eduDiv.appendChild(eduTitle);

    const eduDegree = document.createElement("div");
    eduDegree.textContent = org.degree;
    eduDiv.appendChild(eduDegree);

    const eduPeriod = document.createElement("div");
    eduPeriod.textContent = org.period;
    eduDiv.appendChild(eduPeriod);

    edu.appendChild(eduDiv);
  });

  const skillsButtons = document.getElementById("skills-buttons");
  const skillsTitle = document.getElementById("skills-title");
  const skillsList = document.getElementById("skills-list");
  let clicked;
  skills.map((skill) => {
    const button = document.createElement("button");
    button.classList = "skills-button";
    button.type = "button";
    button.id = skill.name;
    const span = document.createElement("span");
    span.classList = skill.icon;
    button.appendChild(span);
    skillsButtons.appendChild(button);
    button.addEventListener("click", () => {
      skillsTitle.textContent = skill.name;
      skillsList.textContent = "";
      skill.items.map((item) => {
        const el = document.createElement("li");
        const name = document.createElement("b");
        const dash = document.createElement("span");
        const description = document.createElement("span");
        name.textContent = item.name;
        dash.textContent = " - ";
        description.textContent = item.description;
        el.appendChild(name);
        el.appendChild(dash);
        el.appendChild(description);
        skillsList.appendChild(el);
        if (clicked) clicked.classList = "skills-button";
        button.classList = "skills-button button-pressed";
        clicked = button;
      });
    });
    if (skill.default) button.click();
  });

  const form = document.getElementById("human-form");
  const error = document.getElementById("not-human");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const hcheck = document.getElementById("hcheck");
    if (hcheck.value.toLowerCase() != atob("aGFycnk=")) {
      error.classList = "";
    } else {
      error.classList = "about-hidden";
      hcheck.value = "";
      phone.classList = "white-link";
      email.classList = "white-link";
      phone.href = `tel:${atob("KzM3MTI1MjYzMTY5")}`;
      phone.textContent = atob("KzM3MTI1MjYzMTY5");
      email.href = `mailto:${atob("bmp1aGFhbmRyZWpAZ21haWwuY29t")}`;
      email.textContent = atob("bmp1aGFhbmRyZWpAZ21haWwuY29t");
      phone.scrollIntoView();
    }
  });
});
