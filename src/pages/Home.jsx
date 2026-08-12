function Home(){
    return(
        <div className="min-h-screen
        bg-slate-950 text-white">

            <section className="max-w-6xl
            mx-auto px-6 py-24 text-center">
<p className="text-blue-500 text-4xl 
font-semibold mb-16">
    Welcome To My Website
</p>
 <h1 className="text-5xl md:text-6xl
  font-bold mb-6 ">
 Build Beautiful
  <span className="text-blue-500">
    React Projects
  </span> </h1>

  <p className="text-gray-400
  text-lg max-w-2xl mx-auto mb-8">
    A simple react router project</p>

<button className="bg-blue-500
hover:bg-blue-600 px-6 py-3 rounded-lg
font-semibold transition">
    Get Started
</button>
<button className="border border-gray-600
hover:bg-gray-400 px-6 py-3 rounded-lg
transition">
    Learn More
</button>


            </section>
        </div>
    );
}
export default Home;