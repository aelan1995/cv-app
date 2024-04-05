function Tagline() {
    return (
        <section className="bg-transparent 2xl:pt-24">
            <div className="2xl:grid 2xl:grid-cols-2">
                <div className="self-center">
                    <img
                        className="2xl:h-96 2xl:w-96 2xl:mx-auto xsm:h-56 xsm:w-56 xsm:mx-auto xsm:mb-4 rounded-full object-cover object-center"
                        src="pic2x2.jpg"
                        alt="myprofile"
                        />
                </div>
                <div className="text-center">
                    <div>
                        <h1 className="mb-4 text-6xl xsm:text-3xl font-extrabold tracking-tight leading-none text-white">I'm Allan Boi E. Punzalan</h1>
                        <p className="text-4xl xsm:text-lg font-bold text-gray-300 lg:text-xl">I'm a Fullstack developer.I have more than <b>5 years</b> experience.  </p>
                        <p className="text-2xl xsm:text-lg font-normal text-gray-300 lg:text-xl">I have handled companies with interests on digitalizing their current process.
                        I'm well verse in Python, PHP, and JavaScript and had a work experience in using their frameworks such as Django, Laravel, and Next.js. Most of my projects
                        are related to finance, inventory, and as well as CMS.</p>
                    </div>
                    <div className="pt-4">
                        <p className="text-2xl xsm:text-lg font-normal text-gray-300 lg:text-xl">My current focus right I'm currently studying the advance concepts of React.js </p>
                        <p className="text-2xl xsm:text-lg font-normal text-gray-300 lg:text-xl">And also developing applications in TDD approach and as well as Docker.Right now I'm on my most confident ability that I can perform well and contribute to your growing company. </p>
                    </div>
                </div>

            </div>
        </section>

    )
}
export default Tagline
