const velemenyek = [
	{
		id: 0,
		nev: "Nagy Zsanett",
		munkakor: "Marketing Manager",
		velemeny:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem rerum quasi sequi ea deleniti cumque vero sint alias, quo eveniet pariatur laborum magni impedit dolorum? Earum illo corporis fuga.",
	},
	{
		id: 1,
		nev: "Szent Endre",
		munkakor: "PHP Fejlesztő",
		velemeny:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem rerum quasi sequi ea deleniti cumque vero sint alias, quo eveniet pariatur laborum magni impedit dolorum? Earum illo corporis fuga.",
	},
	{
		id: 2,
		nev: "Török Bálint",
		munkakor: "Automata Tesztelő",
		velemeny:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatem rerum quasi sequi ea deleniti cumque vero sint alias, quo eveniet pariatur laborum magni impedit dolorum? Earum illo corporis fuga.",
	},
];

const velemenydoboz = document.getElementById("velemenydoboz");

let id = 0;



let felhasznalok = () => {
	let output = "";

	output += `<div class="order">
        <p><strong>${velemenyek[id].id}</strong></p>
        <p><strong>${velemenyek[id].nev}</strong></p>
        <p><strong>${velemenyek[id].munkakor}</strong></p>
        <p><strong>${velemenyek[id].velemeny}</strong></p>
        </div>`;

	velemenydoboz.innerHTML = output;
};

felhasznalok();
