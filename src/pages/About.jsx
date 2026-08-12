function About() {
  return (
    <div className="min-h-screen
        bg-slate-950 text-white px-6 py-20">
<div className="max-w -4xl mx-auto">
<h1 className="text-4xl font-bolde mb-6">
  About Us
</h1>
<p className="text-gray-400
  text-lg max-w-2xl mx-auto mb-10">
    This project is created using
     React and React Router.</p>
<div className="grid
md:grid-cols-3 gap-6">

  <div className="bg-slate-900
  p-6 rounded-xl border border-slate-800">
    <h2 className=" text-xl font-bold mb-3 
    text-blue-400">React</h2>
    <p className="text-gray-400">
Component based frontend development.</p>
</div>
<div classname="bg-slate-900 p-6
rounded-xl border border-slate-800">
  <h2 className=" text-xl font-bold mb-3 
    text-blue-400">Router</h2>
    <p className="text-gray-400">
Navigate between different pages.</p>
</div>


</div>
</div>
   </div>
  );
}

export default About;