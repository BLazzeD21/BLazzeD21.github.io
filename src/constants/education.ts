import { EducationType, Locate } from "@/types";

export const higherEducation: Locate<EducationType> = {
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
			name: "Санкт-Петербургский университет технологий управления и экономики (СПБУТУиЭ)",
			location: "Среднее профессиональное образование | Санкт-Петербург (2020-2023)",
			body: "Специальность: 09.02.05 Прикладная информатика (по отраслям).<br />Квалификация: техник-программист.",
		},
		{
			imageUrl: "icons/education/university.svg",
			name: "Санкт-Петербургский университет технологий управления и экономики (СПБУТУиЭ)",
			location: "Высшее образование | Санкт-Петербург (2023-2027)",
			body: "Специальность: 09.03.03 Прикладная информатика в экономике.<br />Квалификация: техник-программист.",
		},
	],
};

export const additionalEducation: { en: EducationType[]; ru: EducationType[] } = {
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
			name: "Томский государственный университет (ТГУ)",
			location: "Диплом цифровых кафедр | Томск (2024-2025)",
			body: "Приобретены навыки проектного управления, в том числе с использованием методологий Agile: Scrum, Kanban в условиях цифровой экономики и для сопровождения IT проектов в компаниях.",
		},
	],
};
