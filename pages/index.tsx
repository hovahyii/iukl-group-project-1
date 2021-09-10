/* This example requires Tailwind CSS v2.0+ */
import {Fragment} from "react"
import {Popover, Transition} from "@headlessui/react"
import {MenuIcon, XIcon} from "@heroicons/react/outline"
import Head from 'next/head'

const navigation = [
	{name: "About Us", href: "/about-iukl"},
	{name: "Programs", href: "/programs"},
	{name: "News", href: "/news"},
	{name: "Contact Us", href: "/contact"},
]

export default function Main() {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<body className="bg-white relative overflow-x-hidden">
				<header>
					<nav className="p-6">
						<div className="flex justify-between items-center">
							<img
								src="https://iukl.edu.my/wp-content/uploads/2020/01/IUKL-Logo.png"
								className="w-32"
							></img>
							<div className="flex justify-between flex-grow">
								<div className="flex ml-6 items-center">
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 mr-4 cursor-pointer text-gray-500"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</span>
									<input
										className="outline-none text-sm flex-grow bg-gray-100"
										type="text"
										placeholder="Search courses…"
									/>
								</div>
								<div className="md:flex space-x-6 hidden">
									<span className="text-gray-500 text-md">About IUKL</span>
									<span className="text-gray-500 text-md">Programs</span>
									<span className="text-gray-500 text-md">Contact Us</span>

									<span className="text-gray-500 text-md">Log in</span>
								</div>
							</div>
						</div>
					</nav>
					<div className="container mx-auto bg-gray-400 h-96 rounded-md flex items-center ">
						<div className="sm:ml-20 text-gray-50 text-center sm:text-left">
							<h1 className="text-5xl font-bold mb-4">
								Welcome to <br />
								IUKL
								<br />
							</h1>
							<p className="text-lg inline-block sm:block">
								The First Infrastructure University Campus in Malaysia
							</p>
							<button className="mt-8 px-4 py-2 bg-red-600 rounded">
								Apply Now
							</button>
						</div>
						<img
							src="https://iukl.edu.my/wp-content/uploads/2018/02/Page-Header-08.jpg"
							className="hidden md:block w-1/2 object-cover h-96 rounded-md right-8 absolute"
						></img>
					</div>
				</header>
				<main className="py-16 container mx-auto px-6 md:px-0">
					<section className="max-w py-4 px-8 bg-white shadow-lg rounded-lg mb-10">
						<h1 className="text-3xl font-bold text-gray-600 mb-10">
							About IUKL
						</h1>
						<p className="text-xl font-bold text-red-600 mb-5">
							The strength of Infrastructure University Kuala Lumpur today stems
							from its rich history. For more than 20 years, IUKL has been
							providing quality education and excellent professional services in
							various fields of infrastructure.
						</p>
						<p className="text-xl font-bold text-gray-600 mb-5">
							IUKL being the first infrastructure university in Malaysia, which
							emphasizes the integration of both hard and soft aspects of
							infrastructure, aspire to produce technopreneurs and skilled
							manpower with outstanding communication, technological and
							managerial skills.
						</p>
						<p className="text-xl font-bold text-gray-600 mb-5">
							Enhanced with up-to-date academic facilities, and tutored by
							highly qualified lecturers among whom are industry practitioners,
							IUKL strives to ensure high quality education in areas of
							Engineering, Business, Communication, Language Studies,
							Architecture, Biotechnology, Information Technology and many more.
						</p>
					</section>
					<section className="max-w py-4 px-8 bg-white  mb-10">
						<h1 className="text-3xl font-bold text-gray-600 mb-10">
							Level Of Study
						</h1>
						<div className="grid md:grid-cols-3 gap-4 grid-cols-2">
							<div>
								<img
									src="https://iukl.edu.my/wp-content/uploads/2018/01/foundation-in-arts.jpg"
									className="object-cover h-44"
								></img>
								<h3 className="text-lg font-semibold text-gray-500 mt-2">
									<span className="text-gray-700">Pre-University</span>
								</h3>
							</div>
							<div>
								<img
									src="https://iukl.edu.my/wp-content/uploads/2018/01/bachelor-of-civil-engineering-hons-400x167.png"
									className="object-cover h-44"
								></img>
								<h3 className="text-lg font-semibold text-gray-500 mt-2">
									<span className="text-gray-700">Undergraduate</span>
								</h3>
							</div>
							<div>
								<img
									src="https://iukl.edu.my/wp-content/uploads/2018/01/doctor-of-philosophy-in-education-400x167.jpg"
									className="object-cover h-44"
								></img>
								<h3 className="text-lg font-semibold text-gray-500 mt-2">
									<span className="text-gray-700">Postgraduate</span>
								</h3>
							</div>
							<div>
								<img
									src="https://iukl.edu.my/wp-content/uploads/2018/01/intensive-english-programme-iep-400x167.png"
									className="object-cover h-44"
								></img>
								<h3 className="text-lg font-semibold text-gray-500 mt-2">
									<span className="text-gray-700">Short Courses</span>
								</h3>
							</div>
						</div>
					</section>

					<section className="max-w  sm:mx-0 mx-auto bg-gray-100 border-2 rounded-md">
						<div className=" mx-auto w-full  sm:px-6 lg:px-8">
							<div className="mt-8 overflow-hidden">
								<div className="grid grid-cols-1 md:grid-cols-2">
									<div className="p-6 mr-2  sm:rounded-lg">
										<h1 className="text-4xl sm:text-5xl text-red-500 font-extrabold tracking-tight">
											Contact Us
										</h1>
										<p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
											Do you have questions about our programmes or intakes?
											Fill in the form and we'll respond as soon as we can. All
											fields are required.
										</p>

										<div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												viewBox="0 0 24 24"
												className="w-8 h-8 text-gray-500"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="1.5"
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="1.5"
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
											<div className="ml-4 text-md tracking-wide font-semibold w-60">
												Unipark Suria, Jalan Ikram-Uniten, 43000 Kajang,
												Selangor Darul Ehsan, Malaysia.
											</div>
										</div>

										<div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												viewBox="0 0 24 24"
												className="w-8 h-8 text-gray-500"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="1.5"
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
											<div className="ml-4 text-md tracking-wide font-semibold w-60">
												+6019 388 3435 (Malaysian)
											</div>
										</div>

										<div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
											<svg
												fill="none"
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="1.5"
												viewBox="0 0 24 24"
												className="w-8 h-8 text-gray-500"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="1.5"
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
											<div className="ml-4 text-md tracking-wide font-semibold w-60">
												inquiry@iukl.edu.my (Malaysian){" "}
											</div>
										</div>
									</div>

									<form className="p-6 flex flex-col justify-center">
										<div className="flex flex-col">
											<label className="hidden">
												Full Name
											</label>
											<input
												type="name"
												name="name"
												id="name"
												placeholder="Full Name"
												className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
											/>
										</div>

										<div className="flex flex-col mt-2">
											<label className="hidden">
												Email
											</label>
											<input
												type="email"
												name="email"
												id="email"
												placeholder="Email"
												className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
											/>
										</div>

										<div className="flex flex-col mt-2">
											<label  className="hidden">
												Number
											</label>
											<input
												type="tel"
												name="tel"
												id="tel"
												placeholder="Telephone Number"
												className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
											/>
										</div>

										<div className="flex flex-col mt-2">
											<label  className="hidden">
												Message
											</label>
											<textarea
												name="tel"
												id="tel"
												placeholder="Message"
												className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
											/>
										</div>

										<button
											type="submit"
											className="md:w-32 bg-red-600 hover:bg-red-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-red-500 transition ease-in-out duration-300"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</section>
				</main>
				<footer className="bg-gray-100 hidden md:block">
					<div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
						<div className="p-5 w-64 ">
							<div className="text-xs uppercase text-gray-500 font-medium">
								QUICK LINKS
							</div>
							<a className="my-3 block" href="/#">
								Why IUKL?
							</a>
							<a className="my-3 block" href="/#">
								Academic Calendar
							</a>
							<a className="my-3 block" href="/#">
								Events &amp; Happenings
							</a>
							<a className="my-3 block" href="/#">
								Events &amp; Happenings
							</a>
							<a className="my-3 block" href="/#">
								Online Application
							</a>
						</div>

						<div className="p-5 w-32 "></div>
						<div className="p-5 w-72 ">
							<div className="text-xs uppercase text-gray-500 font-medium">
								ADDITIONAL INFO
							</div>
							<a className="my-3 block" href="/#">
								Student / Staff Login
							</a>
							<a className="my-3 block" href="/#">
								Parent Login
							</a>
							<a className="my-3 block" href="/#">
								Career Development &amp; Internship
							</a>
							<a className="my-3 block" href="/#">
								Career Opportunities{" "}
							</a>
						</div>

						<div className="p-5 w-32 "></div>

						<div className="p-5 w-72 ">
							<div className="text-xs uppercase text-gray-500 font-medium">
								GET IN TOUCH
							</div>
							<a className="my-3 block" href="/#">
								Infrastructure University Kuala Lumpur
								<br />
								<span className="text-teal-600 text-xs">
									Unipark Suria, Jalan Ikram-Uniten, 43000 Kajang, Selangor
									Darul Ehsan, Malaysia.
								</span>
							</a>
							<a className="my-3 block" href="/#">
								inquiry@iukl.edu.my (Malaysian)
							</a>
						</div>
					</div>

					<div className="bg-gray-100 pt-2 ">
						<div
							className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
						>
							{" "}
							<div className="mt-2">
								Copyright © 2021 Infrastructure University Kuala Lumpur. All
								Rights Reserved.
							</div>
							<div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
								<a href="/#" className="w-6 mx-1"></a>
								<a href="/#" className="w-6 mx-1"></a>
								<a href="/#" className="w-6 mx-1"></a>
								<a href="/#" className="w-6 mx-1"></a>
								<a href="/#" className="w-6 mx-1"></a>
							</div>
						</div>
					</div>
				</footer>
				<nav className="md:hidden p-2 fixed bottom-0 w-full border bg-white flex ">
					<a
						href="."
						className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-200 focus:text-orange-500"
					>
						<i className="fa fa-home fa-2x" aria-hidden="true"></i>
						<span className=" text-sm capitalize">Home</span>
					</a>

					<a
						href="."
						className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-200 text-orange-500"
					>
						<i className="	fa fa-info-circle	fa-2x" aria-hidden="true"></i>

						<span className="text-sm capitalize">About</span>
					</a>

					<a
						href="."
						className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-200 focus:text-orange-500"
					>
						<i className="fa fa-graduation-cap		 fa-2x" aria-hidden="true"></i>

						<span className=" text-sm capitalize">Courses</span>
					</a>

					<a
						href="."
						className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-200 focus:text-orange-500"
					>
						<i
							className="fa fa-envelope	
	fa-2x"
							aria-hidden="true"
						></i>

						<span className=" text-sm capitalize">Contact</span>
					</a>
				</nav>
			</body>
		</>
	)
}
