

export default function Home() {
  const projects = [
    {
      name: "MovieDB",
      url: "https://movies.thekrew.app",
      router: "/moviedb",
    },
    {
      name: "Portfolio",
      url: "https://thekrew.app",
      router: "/portfolio",
    }
  ]
  
  return (
    <main>
        <h1> Projects </h1>
        {
          projects.map((project) => (
            <div key={project.name}>
              <a href={project.router}>{project.name}</a>
            </div>
          ))
        }
    </main>
  );
}
