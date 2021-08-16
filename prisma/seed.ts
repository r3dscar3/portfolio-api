import prisma from "../src/db";

async function seed() {
	const home = await prisma.page.upsert({
		where: {id: 1},
		update: {},
		create: {
			name: "Home",
			slug: "",
			description: "",
			emoji: "👓",
		}
	});

	const about = await prisma.page.upsert({
		where: {id: 2},
		update: {},
		create: {
			name: "About",
			slug: "about",
			description: "",
			emoji: "💀",
		}
	});

	const contact = await prisma.page.upsert({
		where: {id: 3},
		update: {},
		create: {
			name: "Contact",
			slug: "contact",
			description: "",
			emoji: "📱",
		}
	});

	const homeSection1 = await prisma.section.upsert({
		where: {id: 1},
		update: {},
		create: {
			pageId: 1,
			title: "Hello world!",
			description: "I\"m Nolan Thompson, a web developer, husband, & dad\nThis is a little site about me. Hope you enjoy it.",
			sortOrder: 1,
		}
	});

	const homeSection2 = await prisma.section.upsert({
		where: {id: 2},
		update: {},
		create: {
			pageId: 1,
			title: "Current projects",
			description: "",
			sortOrder: 2,
		}
	});

	const homeSection3 = await prisma.section.upsert({
		where: {id: 3},
		update: {},
		create: {
			pageId: 1,
			title: "Other projects",
			description: "",
			sortOrder: 3,
		}
	});

	const aboutSection1 = await prisma.section.upsert({
		where: {id: 4},
		update: {},
		create: {
			pageId: 2,
			title: "Nolan Thompson",
			description: "Designer and Software Engineer",
			sortOrder: 1,
		}
	});

	const aboutSection2 = await prisma.section.upsert({
		where: {id: 5},
		update: {},
		create: {
			pageId: 2,
			title: "About me",
			description: "I am a web and application developer living in AZ.\n \nCurently I work as a staff software engineer and tech lead for Walmart InHome.\n\nPrevious companies I have worked for -\n  2017-19: The NHL\n  2013-17: Comcast SportsEngine (previously TeamUnify)\n\nI am a father of two awesome boys and love spending time traveling with my wife and kids in our 1962 GMC tour bus.\n\nI have always been \"sort of\" building websites but previously I was a graphic designer and always love being in a role where I need to make some UI adjustments or open illustrator to optimize an svg.\n\nThings I have done -\n  html\n  css\n  javaScript\n  React\n  TypeScript\n  GraphQL\n  Graphic design\n  General problem solving",
			sortOrder: 2,
		}
	});

	const aboutSection3 = await prisma.section.upsert({
		where: {id: 6},
		update: {},
		create: {
			pageId: 2,
			title: "Things I like",
			description: "",
			sortOrder: 3,
		}
	});

	const aboutSection4 = await prisma.section.upsert({
		where: {id: 7},
		update: {},
		create: {
			pageId: 2,
			title: "Developer stuff",
			description: "",
			sortOrder: 4,
		}
	});

	const contactSection1 = await prisma.section.upsert({
		where: {id: 8},
		update: {},
		create: {
			pageId: 3,
			title: "My info",
			description: "",
			sortOrder: 1,
		}
	})

	const homeSection2Item1 = await prisma.sectionItem.upsert({
		where: {id: 1},
		update: {},
		create: {
			sectionId: 2,
			title: "Walmart InHome",
			description: "InHome e-commerce site to sign up new customers and help existing customers modify thier account. Built with Next.js and StyledComponents using a REST backend.",
			sortOrder: 1,
			src: "/home/inHome.jpg",
			years: 0,
		}
	});

	const homeSection2Item2 = await prisma.sectionItem.upsert({
		where: {id: 2},
		update: {},
		create: {
			sectionId: 2,
			title: "Walmart InHome Admin Tool",
			description: "An app for field ops to support InHome deliveries and schedules. Built with React and Webpack with a GraphQL and TypeScript backend. An app for field ops to support InHome deliveries and schedules. Built with React and Webpack with a GraphQL and TypeScript backend.",
			sortOrder: 2,
			src: "",
			years: 0,
		}
	});

	const homeSection3Item1 = await prisma.sectionItem.upsert({
		where: {id: 3},
		update: {},
		create: {
			sectionId: 3,
			title: "NHL Records",
			description: "",
			sortOrder: 1,
			src: "/home/nhlRecords.jpg",
			years: 0,
		}
	});	

	const homeSection3Item2 = await prisma.sectionItem.upsert({
		where: {id: 4},
		update: {},
		create: {
			sectionId: 3,
			title: "NHL Media",
			description: "",
			sortOrder: 2,
			src: "/home/nhlMedia.jpg",
			years: 0,
		}
	});	

	const aboutSection3Item1 = await prisma.sectionItem.upsert({
		where: {id: 5},
		update: {},
		create: {
			sectionId: 6,
			title: "Bass",
			description: "Bass and playing in bands is a huge part of my life outside of work.",
			sortOrder: 1,
			src: "",
			years: 3,
		}
	});

	const aboutSection3Item2 = await prisma.sectionItem.upsert({
		where: {id: 6},
		update: {},
		create: {
			sectionId: 6,
			title: "Golf",
			description: "Golf is such a challenging game but a great way to enjoy a couple of beers!",
			sortOrder: 2,
			src: "",
			years: 3,
		}
	});

	const aboutSection3Item3 = await prisma.sectionItem.upsert({
		where: {id: 7},
		update: {},
		create: {
			sectionId: 6,
			title: "Hockey",
			description: "Go Coyotes! Ice hockey, street hockey I love it all.",
			sortOrder: 3,
			src: "",
			years: 3,
		}
	});

	const aboutSection4Item1 = await prisma.sectionItem.upsert({
		where: {id: 8},
		update: {},
		create: {
			sectionId: 7,
			title: "HTML",
			description: "/about/html5.png",
			sortOrder: 1,
			src: "",
			years: 15,
		}
	});

	const aboutSection4Item2 = await prisma.sectionItem.upsert({
		where: {id: 9},
		update: {},
		create: {
			sectionId: 7,
			title: "CSS",
			description: "",
			sortOrder: 2,
			src: "/about/css3.png",
			years: 15,
		}
	});

	const aboutSection4Item3 = await prisma.sectionItem.upsert({
		where: {id: 10},
		update: {},
		create: {
			sectionId: 7,
			title: "javaScript",
			description: "",
			sortOrder: 3,
			src: "/about/javascript.png",
			years: 10,
		}
	});

	const aboutSection4Item4 = await prisma.sectionItem.upsert({
		where: {id: 11},
		update: {},
		create: {
			sectionId: 7,
			title: "Illustrator",
			description: "",
			sortOrder: 4,
			src: "/about/illustrator.svg",
			years: 20,
		}
	});

	const aboutSection4Item5 = await prisma.sectionItem.upsert({
		where: {id: 12},
		update: {},
		create: {
			sectionId: 7,
			title: "Photoshop",
			description: "",
			sortOrder: 5,
			src: "/about/photoshop.svg",
			years: 20,
		}
	});

	const aboutSection4Item6 = await prisma.sectionItem.upsert({
		where: {id: 13},
		update: {},
		create: {
			sectionId: 7,
			title: "React",
			description: "",
			sortOrder: 6,
			src: "/about/react.svg",
			years: 6,
		}
	});

	const aboutSection4Item7 = await prisma.sectionItem.upsert({
		where: {id: 14},
		update: {},
		create: {
			sectionId: 7,
			title: "node.js",
			description: "",
			sortOrder: 7,
			src: "/about/node.png",
			years: 6,
		}
	});

	const aboutSection4Item8 = await prisma.sectionItem.upsert({
		where: {id: 15},
		update: {},
		create: {
			sectionId: 7,
			title: "GraphQL",
			description: "",
			sortOrder: 8,
			src: "/about/graphql.svg",
			years: 3,
		}
	});

	const aboutSection4Item9 = await prisma.sectionItem.upsert({
		where: {id: 16},
		update: {},
		create: {
			sectionId: 7,
			title: "StyledComponents",
			description: "",
			sortOrder: 9,
			src: "/about/styled-components.png",
			years: 3,
		}
	});

	const aboutSection4Item10 = await prisma.sectionItem.upsert({
		where: {id: 17},
		update: {},
		create: {
			sectionId: 7,
			title: "TypeScript",
			description: "",
			sortOrder: 10,
			src: "/about/typeScript.svg",
			years: 3,
		}
	});

	const contactSection1Item1 = await prisma.sectionItem.upsert({
		where: {id: 18},
		update: {},
		create: {
			sectionId: 8,
			title: "",
			description: "(480) 221-4836",
			sortOrder: 1,
			src: "",
			years: 0,
			emoji: "📱",
		}
	});

	const contactSection1Item2 = await prisma.sectionItem.upsert({
		where: {id: 19},
		update: {},
		create: {
			sectionId: 8,
			title: "",
			description: "nolan@pgdbend.com",
			sortOrder: 2,
			src: "",
			years: 0,
			emoji: "📧",
		}
	});

	console.log({home, about, contact, homeSection1, homeSection2, homeSection3, aboutSection1, aboutSection2, aboutSection3,  aboutSection4, contactSection1, homeSection2Item1, homeSection2Item2, homeSection3Item1, homeSection3Item2, aboutSection3Item1, aboutSection3Item2, aboutSection3Item3, aboutSection4Item1, aboutSection4Item2, aboutSection4Item3, aboutSection4Item4, aboutSection4Item5, aboutSection4Item6, aboutSection4Item7, aboutSection4Item8, aboutSection4Item9, aboutSection4Item10, contactSection1Item1, contactSection1Item2});

	return;
}

export default seed;
