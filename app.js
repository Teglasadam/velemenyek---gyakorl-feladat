const velemenyek = [
  {
    nev: "Nagy Zsanett",
    munkakor: "Marketing Manager",
    velemeny:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem rerum quasi sequi ea deleniti cumque vero sint alias, quo eveniet pariatur laborum magni impedit dolorum? Earum illo corporis fuga.",
  },
  {
    nev: "Szent Endre",
    munkakor: "PHP Fejlesztő",
    velemeny:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem rerum quasi sequi ea deleniti cumque vero sint alias, quo eveniet pariatur laborum magni impedit dolorum? Earum illo corporis fuga.",
  },
  {
    nev: "Török Bálint",
    munkakor: "Automata Tesztelő",
    velemeny:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem rerum quasi sequi ea deleniti cumque vero sint alias, quo eveniet pariatur laborum magni impedit dolorum? Earum illo corporis fuga.",
  },
];

const velemenydoboz = document.getElementById("velemenydoboz");
const back = document.querySelector(".back");
const next = document.querySelector(".next");
let id = 0;

let felhasznalo = () => {
  let output = "";

  output += `<div class="order">
        <p><strong>${velemenyek[id].nev}</strong></p>
        <p><strong>${velemenyek[id].munkakor}</strong></p>
        <p><strong>${velemenyek[id].velemeny}</strong></p>
        </div>`;

  velemenydoboz.innerHTML = output;
};

window.addEventListener("load", felhasznalo(0));

next.addEventListener("click", function () {
  if (id < velemenyek.length - 1) {
    id++;
    felhasznalo();
  } else {
    id = 0;
    felhasznalo();
  }
});
back.addEventListener("click", function () {
  if (id > 0) {
    id--;
    felhasznalo();
  } else {
    id = velemenyek.length - 1;
    felhasznalo();
  }
});
