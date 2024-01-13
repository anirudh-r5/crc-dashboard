import Image from 'next/image'

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4 font-sans space-y-5">
		<div className='grid grid-rows-4 justify-center text-center'>
				<div className='text-2xl font-bold'>ANIRUDH RAMAKRISHNAN</div>
				<div>phone number | email</div>
				<div>address</div>
				<div><a href="#">LinkedIn</a>&nbsp;|&nbsp;<a href="#">GitHub</a></div>
			</div>
			<div>
				<h2 className='text-xl font-bold'>EDUCATION</h2>
				<hr />
				<p><h3 className='text-lg font-bold'>California State University, Fullerton, California</h3></p>
				<p><span>Master of Science, Computer Science</span> <span className="float-right">Expected Graduation: May 2025</span></p>
				<p>Relevant Coursework: Software Verification & Validation, Modern Software Management</p>
	
				<h3 className='text-lg font-bold'>Nitte Meenakshi Institute of Technology, Bangalore, India</h3>
				<p><span>Bachelor of Engineering, Computer Science & Engineering</span> <span className="float-right">2017 - 2021</span></p>
				<p>Created a real-time object detection, tracking, and alert system for video surveillance to automatically detect suspicious activities and crimes in crowded areas</p>
			</div>
			<div>
				<h2 className='text-xl font-bold'>TECHNICAL SKILLS</h2>
				<hr />
				<ul className='list-disc'>
					<li>Programming Languages: Java | JavaScript/TypeScript | SQL | Go | Python</li>
					<li>Databases: PostgreSQL, Snowflake, MSSQL 2019, MySQL, MongoDB</li>
					<li>Full-Stack Development: React, Java Spring Boot, NodeJS, API development, Postman, Selenium, HTML, CSS</li>
					<li>Data Engineering: Snowflake experience, Data Modelling, Data Warehousing, Database Design, ETL/ELT pipelines, SQL scripting, Data Testing, CI/CD for data warehouses</li>
					<li>DevOps: Git, Jenkins, Docker, Kubernetes, AWS & Azure deployments</li>
					<li>Tools: Jira, VS Code, IntelliJ, Microsoft Office Suite</li>
				</ul>
			</div>
			<div>
				<h2 className='text-xl font-bold'>PROJECTS</h2>
				<hr />
				<p><span><h3 className='inline-block text-lg font-bold'>Data Warehouse Platform on Snowflake</h3>&nbsp;<i>(Brillio Technologies Project)</i></span><span className="float-right">October 2022 - July 2023</span></p>
				<ul className='list-disc'>
					<li>Collaborated with a team of 20 and implemented a data warehouse solution on Snowflake with automated ELT pipelines, custom views linked to PowerBI and data analysis tools, and fine-grained user access control</li>
					<li>Analyzed client requirements to perform data modeling and schema design for 20+ database tables while following optimal data warehousing practices to handle 5+ TBs of data & near real-time data access</li>
					<li>Implemented auditing framework for code changes and optimized existing SQL queries & stored procedures, leading to a query time improvement of 50 - 70%</li>
					<li>Documented and maintained versioning of data models & SQL scripts using Erwin Data Modeler and MS Excel</li>
				</ul>
			</div>
			<div>
				<h2 className='text-xl font-bold'>EXPERIENCE</h2>
				<hr />
				<p><h3 className='inline-block text-lg font-bold'>Brillio Technologies</h3><span className="float-right">Bangalore, India</span></p>
				<p><i>Data Engineer</i><span className="float-right">August 2021 - July 2023</span></p>
				<ul className='list-disc'>
					<li>Collaborated with 25+ people across 2 data engineering projects in AWS, Azure and Snowflake cloud environments</li>
					<li>Prototyped dimensional data models for a Snowflake data warehouse and converted approved models into SQL objects for implementation</li>
					<li>Created & rebuilt SQL views and stored procedures to utilize dimension-modeled schema with a query time of under 3 seconds for 500 GB of data</li>
					<li>Designed a RESTful API leveraging Java Spring Boot and Hibernate and integrated it with Snowflake to store and fetch data</li>
					<li>Developed Python scripts for automated ingestion & formatting of JSON files with AWS Lambda and for data transformation and loading into Amazon Aurora with AWS Glue</li>
					<li>Deployed automated tests using Jenkins to check data integrity after ETL operations and code changes</li>
					<li>Proposed code quality & syntax rules for SQL scripts and documentation procedures to improve codebase maintainability and streamline code changes</li>
					<li>Mentored new team members on project architecture and held code discussions with the QA team to develop test plans</li>
				</ul>
			</div>
			<div>
				<h2 className='text-xl font-bold'>CERTIFICATIONS</h2>
				<hr />
				<ul className='list-disc'>
					<li><b>AWS Certified Cloud Practitioner</b> - April 2022 - Amazon Web Services (AWS)</li>
					<li><b>Certified SAFe® 5 Practitioner (SP)</b> - Nov 2022 - Scaled Agile, Inc.</li>
					<li><b>Microsoft Certified: Azure Data Fundamentals</b> - Jan 2022 - Microsoft</li>
				</ul>
			</div>
		<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            Built using {' '}
            <Image
              src="/next.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
        </div>
    </main>
  )
}
