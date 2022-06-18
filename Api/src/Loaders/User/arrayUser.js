const Chance = require("chance"); //genera datos aleatoriamente, para llenar los campos de la BD
const chance = new Chance();

const fakeUserData = [
  [
    "t0mshaster5@gmail.com",
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["HTML", "CSS3", "Java"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["HTML", "JavaScript"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Java", "C#"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["JavaScript"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["MySQL", "Java", "Python"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["SQLite", "JavaScript", "C"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Java", "C#", "Oracle"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["PostgreSQL", "MongoDB", "Java"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["HTML", "CSS3", "C#", "MySQL"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Java"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["C", "C#"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["JavaScript", "MongoDB"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Python", "Oracle"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["C", "C#", "Oracle"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["JavaScript", "C#", "Oracle"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["JavaScript", "MongoDB", "Java"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Python", "MongoDB"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["C", "C#", "Java"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["JavaScript", "MongoDB", "Java", "CSS3"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["HTML", "CSS3", "Java", "C"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["HTML", "JavaScript", "SQLite", "Oracle"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Java", "Python", "C"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["JavaScript", "MySQL", "MariaDB"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["MySQL", "Java", "Python"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["SQLite", "MongoDB", "PostgreSQL", "Java"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Java", "MongoDB", "JavaScript", "Oracle"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["PostgreSQL", "Java"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["HTML", "C#", "MySQL"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Python"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Oracle", "MySQL"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["JavaScript"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Python", "Oracle", "SQLite"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["C", "C#"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "empleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["C#"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["JavaScript", "Java", "SQLite", "MySQL", "MariaDB", "PostgreSQL"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],

  [
    chance.email(),
    chance.name(),
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Python", "MariaDB"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["C", "C#", "Java", "SQLite"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["JavaScript", "Python", "C#", "HTML"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["SQLite", "MongoDB", "Oracle", "MySQL"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    chance.email(),
    chance.name(),
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["SQLite", "MongoDB", "Oracle", "MySQL"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    "usuarioMartinez@gmail.com",
    "Juan Pablo Martinez",
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["SQLite", "MongoDB", "Oracle", "MySQL"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    "usuarioHernandez@gmail.com",
    "Ana Maria Hernandez",
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["SQLite", "MongoDB", "MySQL"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    "usuarioCastiblanco@gmail.com",
    "Dario Nicolas Castiblanco",
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Python", "MariaDB"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    "usuarioZamudio@gmail.com",
    "Diego Esteban Zamudio",
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Python", "MariaDB"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    "usuarioTriana@gmail.com",
    "Angie tatiana Triana",
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["C", "C#", "Java", "SQLite"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
  [
    "usuarioRios@gmail.com",
    "Karen Eleana Rios",
    "desempleado",
    chance.age(),
    chance.url({ extensions: ["jpg", "png"] }),
    chance.sentence(),
    ["Java", "SQLite"],
    chance.country({ full: true }),
    chance.domain(),
    chance.url({ extensions: ["pdf"] }),
    1,
  ],
];

module.exports = {
  fakeUserData,
};
