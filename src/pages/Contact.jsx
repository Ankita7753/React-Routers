function Contact() {
  return (
         
 <div className="min-h-screen
 bg-slate-950 text-white px-6 py-20">
<div className="max-w -4xl mx-auto">
<h1 className="text-4xl font-bolde mb-6">
  Contact Us
</h1>
 <p className="text-gray-400 text-center
 mb-10">Have a question ?  Send us a 
 message.</p>
<form className="bg-slate-900
p-8 rounded-2xl shadow-xl">
  <label className="block mb-2">Name
      </label>
      <input type="text"
      placeholder="enter your name"
      className="w-full
      bg-slate-800 border border-slate-700
      rounded-lg px-4 py-3 mb-6 outline-none
      focus:border-blue-500"/>

      <label className="block mb-2">Email
      </label>
      <input type="text"
      placeholder="enter your email"
      className="w-full
      bg-slate-800 border border-slate-700
      rounded-lg px-4 py-3 mb-6 outline-none
      focus:border-blue-500"/>

<label className="block mb-2">Message
      </label>
      <textarea
      rows="6"
      placeholder="write your message...."
      className="w-full
      bg-slate-800 border border-slate-700
      rounded-lg px-4 py-3 mb-6 outline-none
      focus:border-blue-500"/>
      <button 
      type="submit"
      className="w-full
      bg-blue-500 hover:bg-blue-600 py-3
      rounded-lg font-semibold transition">
        send message
      </button>

</form>

</div>
    </div>
  );
}

export default Contact;