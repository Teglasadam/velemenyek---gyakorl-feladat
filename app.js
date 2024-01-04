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

let felhasznalok = () => {
	let output = "";

	output += `<div class="order">
        <p><strong>${velemenyek[id].nev}</strong></p>
        <p><strong>${velemenyek[id].munkakor}</strong></p>
        <p><strong>${velemenyek[id].velemeny}</strong></p>
        </div>`;

	velemenydoboz.innerHTML = output;
};

let id = 0;

next.addEventListener("click", function () {
	if (id < velemenyek.length-1) {
		id++;
		felhasznalok();
	} else {
		id = 0;
		felhasznalok();
	}
});
