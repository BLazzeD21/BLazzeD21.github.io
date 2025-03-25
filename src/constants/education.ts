import { EducationType, Locale } from "@/types";

export const higherEducation: Locale<EducationType> = {
	en: [
		{
			imageUrl: "icons/education/college.svg",
			name: "The St. Petersburg University of Management Technologies and Economics (UMTE)",
			location: "Secondary professional education | St. Petersburg (2020-2023)",
			body: "Specialty: 09.02.05 Applied Informatics (by industry).<br />Qualified as a technician-programmer.",
		},
		{
			imageUrl: "icons/education/university.svg",
			name: "The St. Petersburg University of Management Technologies and Economics (UMTE)",
			location: "Higher education | St. Petersburg (2023-2027)",
			body: "Specialty: 09.03.03 Applied Informatics in Economics.<br />Qualified as a technician-programmer.",
		},
	],
	ru: [
		{
			imageUrl: "icons/education/college.svg",
			name: "Санкт-Петербургский университет технологий управления и экономики (UMTE)",
			location: "Среднее профессиональное образование | Санкт-Петербург (2020-2023)",
			body: "Специальность: 09.02.05 Прикладная информатика (по отраслям).<br />Квалификация: техник-программист.",
		},
		{
			imageUrl: "icons/education/university.svg",
			name: "Санкт-Петербургский университет технологий управления и экономики (UMTE)",
			location: "Высшее образование | Санкт-Петербург (2023-2027)",
			body: "Специальность: 09.03.03 Прикладная информатика в экономике.<br />Квалификация: техник-программист.",
		},
	],
	de: [
		{
			imageUrl: "icons/education/college.svg",
			name: "Sankt Petersburger Universität für Managementtechnologien und Wirtschaft (UMTE)",
			location: "Berufsausbildung | Sankt Petersburg (2020-2023)",
			body: "Fachrichtung: 09.02.05 Angewandte Informatik (branchenspezifisch).<br />Abschluss: Programmiertechniker.",
		},
		{
			imageUrl: "icons/education/university.svg",
			name: "Sankt Petersburger Universität für Managementtechnologien und Wirtschaft (UMTE)",
			location: "Hochschulbildung | Sankt Petersburg (2023-2027)",
			body: "Fachrichtung: 09.03.03 Angewandte Informatik in der Wirtschaft.<br />Abschluss: Programmiertechniker.",
		},
	],
	fi: [
		{
			imageUrl: "icons/education/college.svg",
			name: "Pietarin johtamisteknologioiden ja taloustieteen yliopisto (UMTE)",
			location: "Ammatillinen koulutus | Pietari (2020-2023)",
			body: "Erikoistuminen: 09.02.05 Sovellettu informatiikka (alakohtainen).<br />Pätevyys: ohjelmoija-teknikko.",
		},
		{
			imageUrl: "icons/education/university.svg",
			name: "Pietarin johtamisteknologioiden ja taloustieteen yliopisto (UMTE)",
			location: "Korkeakoulututkinto | Pietari (2023-2027)",
			body: "Erikoistuminen: 09.03.03 Sovellettu informatiikka taloustieteessä.<br />Pätevyys: ohjelmoija-teknikko.",
		},
	],
};

export const additionalEducation: {
	en: EducationType[];
	ru: EducationType[];
	de: EducationType[];
	fi: EducationType[];
} = {
	en: [
		{
			imageUrl: "icons/education/courses.svg",
			name: "Center for Continuing Education",
			location: "Diploma of additional education | St. Petersburg (2015-2020)",
			body: "Successfully completed training in the direction: information and communication technologies (ICT), Fundamentals of Object-Oriented Programming, Algorithmization and programming technologies, Basics of building databases based on MS SQL Server, ADO.NET, Developing Windows Applications in C#, Website layout and web design technologies.",
		},
		{
			imageUrl: "icons/education/project.svg",
			name: "Tomsk State University (TSU)",
			location: "Diploma of Digital Departments | Tomsk (2024-2025)",
			body: "Acquired project management skills, including the use of Agile methodologies: Scrum, Kanban in the context of the digital economy and to support IT projects in companies.",
		},
	],
	ru: [
		{
			imageUrl: "icons/education/courses.svg",
			name: "Центр дополнительного образования",
			location: "Диплом о дополнительном образовании | Санкт-Петербург (2015-2020)",
			body: "Успешно завершил обучение по направлению: информационно-коммуникационные технологии (ИКТ), Основы объектно-ориентированного программирования, Алгоритмизация и технологии программирования, Основы построения баз данных на основе MS SQL Server, ADO.NET, Разработка Windows-приложений на C#, Верстка сайтов и технологии веб-дизайна.",
		},
		{
			imageUrl: "icons/education/project.svg",
			name: "Томский государственный университет (TSU)",
			location: "Диплом цифровых кафедр | Томск (2024-2025)",
			body: "Приобретены навыки проектного управления, в том числе с использованием методологий Agile: Scrum, Kanban в условиях цифровой экономики и для сопровождения IT проектов в компаниях.",
		},
	],
	de: [
		{
			imageUrl: "icons/education/courses.svg",
			name: "Zentrum für Weiterbildung",
			location: "Zusatzausbildungsdiplom | Sankt Petersburg (2015-2020)",
			body: "Erfolgreich abgeschlossene Ausbildung in den Bereichen: Informations- und Kommunikationstechnologien (IKT), Grundlagen der objektorientierten Programmierung, Algorithmisierung und Programmiertechnologien, Grundlagen des Datenbankaufbaus mit MS SQL Server, ADO.NET, Entwicklung von Windows-Anwendungen in C#, Website-Layout und Webdesign-Technologien.",
		},
		{
			imageUrl: "icons/education/project.svg",
			name: "Staatliche Universität Tomsk (TSU)",
			location: "Diplom der Digitalen Abteilungen | Tomsk (2024-2025)",
			body: "Erworbene Projektmanagementfähigkeiten, einschließlich der Anwendung von Agile-Methodologien: Scrum, Kanban im Kontext der digitalen Wirtschaft und zur Unterstützung von IT-Projekten in Unternehmen.",
		},
	],
	fi: [
		{
			imageUrl: "icons/education/courses.svg",
			name: "Jatkokoulutuskeskus",
			location: "Lisäkoulutuksen diplomi | Pietari (2015-2020)",
			body: "Suoritettu onnistuneesti koulutus seuraavissa aiheissa: tieto- ja viestintätekniikka (ICT), olio-ohjelmoinnin perusteet, algoritmointi ja ohjelmointitekniikat, tietokantojen perusteet MS SQL Serverillä, ADO.NET, Windows-sovellusten kehittäminen C#:lla, verkkosivujen ulkoasu ja web-suunnittelun tekniikat.",
		},
		{
			imageUrl: "icons/education/project.svg",
			name: "Tomskin valtionyliopisto (TSU)",
			location: "Digitaalisten osastojen diplomi | Tomsk (2024-2025)",
			body: "Hankitut projektinhallinnan taidot, mukaan lukien Agile-menetelmien käyttö: Scrum, Kanban digitaalisen talouden kontekstissa ja IT-projektien tukemisessa yrityksissä.",
		},
	],
};
