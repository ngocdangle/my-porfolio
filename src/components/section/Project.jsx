export const Project = () => {
  return (
    <section id="project" className="min-h-screen flex items-center justify-centerpy-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[59,130,246,0.2] transition">
            <h3 className="text-xl font-bold mb-2">Todo Liste</h3>
            <p className="mb-4 text-gray-400">A simple todo list for users to keep track of things they need to complete. Task can be added, marked as completed, or removed as needed     
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["92% JavaScript", "6.8% HTML", "1.1% CSS"].map((tech,key) => (
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[59,130,246,0.1] transition-all" key={key}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://github.com/ngocdangle/todo-list-app" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View more →</a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[59,130,246,0.2] transition">
            <h3 className="text-xl font-bold mb-2">Profile Card</h3>
            <p className="mb-4 text-gray-400">A flip over card of my art work   
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["61% CSS", "40% HTML"].map((tech,key) => (
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[59,130,246,0.1] transition-all " key={key}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center ">
              <a href="https://github.com/ngocdangle/todo-list-app" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View more →</a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[59,130,246,0.2] transition">
            <h3 className="text-xl font-bold mb-2">Porfolio</h3>
            <p className="mb-4 text-gray-400">It features projects I have built using YouTube tutorials and my own creativity. I am passionate about coding, always eager to improve, and aspire to become a Full-Stack Developer.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["94% JavaScript","3.2% CSS", "2.8% HTML"].map((tech,key) => (
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[59,130,246,0.1] transition-all" key={key}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://github.com/ngocdangle/todo-list-app" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View more →</a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[59,130,246,0.2] transition">
            <h3 className="text-xl font-bold mb-2">Unknow</h3>
            <p className="mb-4 text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In quia minima a error architecto consequuntur quos, esse voluptatibus expedita necessitatibus voluptatem ex nam dignissimos. Adipisci esse alias id odit illo?
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["61% CSS", "40% HTML"].map((tech,key) => (
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[59,130,246,0.1] transition-all" key={key}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://github.com/ngocdangle/todo-list-app" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View more →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}