const image = document.querySelector(".mainimg");
const name = document.querySelector(".name");
const role = document.querySelector(".role");
const description = document.querySelector(".testimonial-description");

const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

let people = [
  {
    image: "/img/person1.jpg",
    name: "Ethan Stone",
    role: "Marketing Manager",
    description:
      "Ethan is an experienced Marketing Manager with a proven track record of developing and executing successful marketing campaigns. He has a deep understanding of market trends and consumer behavior, and uses this knowledge to create effective marketing strategies that drive business growth. John is highly skilled in digital marketing, SEO, social media, and email marketing, and is always looking for innovative ways to reach and engage with target audiences.",
  },
  {
    image: "/img/person2.jpg",
    name: "Michael Cole",
    role: "Financial Analyst",
    description:
      "Michael is a highly analytical and detail-oriented Financial Analyst with expertise in financial modeling, forecasting, and budgeting. He has a strong background in data analysis and is able to extract insights and trends from complex financial data. Michael is skilled in creating financial reports and presentations for senior management, and is always looking for ways to improve financial performance and optimize business operations.",
  },
  {
    image: "/img/person3.jpg",
    name: "Leo Mitchell",
    role: "Software Engineer",
    description:
      "Leo is a talented Software Engineer with a passion for developing innovative software solutions, a strong technical background in programming languages such as Java, Python, and C++, and experience in full-stack web development, problem-solving, and constantly striving to improve the user experience and functionality of software applications. Leo is also proficient in database management and cloud computing, making him a well-rounded and valuable member of any development team.",
  },
  {
    image: "/img/person4.jpg",
    name: "Owen Harris",
    role: "Human Resources Specialist",
    description:
      "David is a highly skilled Human Resources Specialist with expertise in employee relations, talent acquisition, and performance management. He is experienced in designing and implementing HR policies and procedures that align with business goals and values. David has strong communication skills and is able to build positive relationships with employees at all levels of the organization. He is committed to promoting a positive and inclusive work environment.",
  },
  {
    image: "/img/person5.jpg",
    name: "Xavier Lee",
    role: "Sales Representative",
    description:
      "Xavier is a charismatic and persuasive Sales Representative who excels at building strong relationships with clients. With his excellent communication skills and ability to understand customer needs, he consistently exceeds sales targets. Michael has a passion for networking and is always looking for new ways to expand his client base. He is an expert in the sales process and is always ready to go the extra mile to ensure customer satisfaction.",
  },
];

i = 0;

display(Math.floor(Math.random(1) * 5));

setInterval(() => {
  display(Math.floor(Math.random(1) * 5));
}, 10000);

function display(i) {
  image.src = people[i].image;
  name.textContent = people[i].name;
  role.textContent = people[i].role;
  description.textContent = people[i].description;
}

function next() {
  i++;
  if (i >= people.length) {
    i = 0;
  }
  display(i);
}

function previous() {
  i--;
  if (i < 0) {
    i = people.length - 1;
  }
  display(i);
}

nextBtn.addEventListener("click", next);
previousBtn.addEventListener("click", previous);

//numbers

function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.innerHTML = value.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const counters = document.querySelectorAll(".count");
counters.forEach((counter) => {
  const end = parseInt(counter.innerText);
  animateValue(counter, 0, end, 2000);
});
