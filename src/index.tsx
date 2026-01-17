import { render } from "preact";
import "./style.css";

export function App() {
  return (
    <div className="w-screen h-screen p-4 bg-black text-neutral-200 flex flex-col gap-6">
      <div
        className="h-14 px-4 flex items-center justify-between
                   border border-neutral-800 rounded-xl
                   bg-black/70 backdrop-blur-md
                   shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
      >
        <div className="flex items-center gap-3">
          <span className="text-neutral-500 space text-lg"> - </span>
          <h1 className="space text-xl tracking-tight">
            torben<span className="text-neutral-500">.sh</span>
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs space text-neutral-500">
          <span className="px-2 py-0.5 border border-neutral-800 rounded-md">
            ~/home
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-auto">
        <div className="flex-1 flex flex-col gap-6">
          <section
            className="p-6 flex flex-col gap-y-3 border border-dashed border-neutral-800 rounded-xl
                       bg-black/50 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <h1 className="space text-2xl font-semibold">
              Torben Conto <span className="text-emerald-500">@</span>{" "}
              University of North Georgia
            </h1>
            <p className="plex text-neutral-300">
              I am a{" "}
              <span className="text-emerald-500">student programmer</span>{" "}
              dual-enrolled at the University of North Georgia. I enjoy building
              tools that solve real-world problems, whether at the{" "}
              <span className="text-emerald-500">system level</span> or using{" "}
              <span className="text-emerald-500">
                statistics-oriented machine learning
              </span>
              . I’m passionate about writing clean, functional, and efficient
              code, and I’m always exploring and learning new technologies and
              methodologies to expand my skill set.
            </p>
          </section>

          <section
            className="p-6 border border-dashed border-neutral-800 rounded-xl
                       bg-black/50 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <h2 className="space text-xl font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-3 text-sm text-neutral-300">
              {[
                "Go",
                "Python",
                "C++",
                "Machine Learning*",
                "Systems Programming",
                "Project Management",
                "Linux",
                "Git",
                "Feature Development",
                "React/Preact",
              ].map((x) => (
                <span className="px-3 py-1 border border-neutral-700 rounded-lg bg-neutral-800">
                  {x}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-neutral-500">* current focus</p>
          </section>

          <section
            className="p-6 border border-dashed border-neutral-800 rounded-xl
                       bg-black/50 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <h2 className="space text-xl font-semibold mb-4">Education</h2>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="space text-lg font-medium">
                  Student{" "}
                  <span className="text-emerald-500">
                    @ North Hall High School
                  </span>
                </h3>
                <span className="text-sm text-neutral-500">2023 – Present</span>
                <p className="text-neutral-300 mt-1 plex">
                  Heavily involved in TSA (Technology Student Association),
                  currently holding the position of Treasurer. Competed and
                  placed in several state-wide competitions. Taken 5 AP classes,
                  currently in 1.
                </p>
                <p className="text-neutral-300 mt-1 plex">
                  <strong>GPA:</strong>{" "}
                  <span className="text-emerald-500 font-semibold">
                    4.0 / 4.55
                  </span>
                </p>
              </div>

              <div>
                <h3 className="space text-lg font-medium">
                  Dual Enrollment Student{" "}
                  <span className="text-emerald-500">
                    @ University of North Georgia (UNG)
                  </span>
                </h3>
                <span className="text-sm text-neutral-500">2024 – Present</span>
                <p className="text-neutral-300 mt-1 plex">
                  Enrolled in college-level courses while in high school.
                  Maintaining strong academic performance across all courses.
                </p>
                <p className="text-neutral-300 mt-1 plex">
                  <strong>GPA:</strong>{" "}
                  <span className="text-emerald-500 font-semibold">4.0</span>
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="w-1/3 flex flex-col gap-6">
          <section
            className="p-6 border border-dashed border-neutral-800 rounded-xl
                       bg-black/50 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
          >
            <h2 className="space text-xl font-semibold mb-4">
              Competitions & Awards
            </h2>
            <ul className="list-disc list-inside text-neutral-300 plex space-y-1">
              <li>6th Place – State TSA Software Development 2025</li>
              <li>Competed – State TSA Robotics 2024/2025</li>
              <li>Treasurer – TSA Chapter at North Hall High</li>
            </ul>
          </section>

          <section
            className="p-6 border border-dashed border-neutral-800 rounded-xl
                       bg-black/50 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)] flex flex-col gap-4"
          >
            <h2 className="space text-xl font-semibold mb-4">Projects</h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  name: "Bambu Labs Printer Local API",
                  desc: "Developed an interface for communicating with Bambu Labs 3D printers in Golang. This was the first library of its kind made in Golang and has recieved lots of support and contributions from the open-source community.",
                },
                {
                  name: "Realtime Speech Emotion Recognition for the Deaf and Hearing-Impaired",
                  desc: "Created a model and edge application that performs realtime SER on computer audio. Made primarily in Python and submitted to TSA state competiton in 2026 where it recieved [pending] place.",
                },
              ].map((project) => (
                <div
                  className="p-4 border border-dashed border-neutral-700 rounded-xl
                             bg-black/50 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
                             hover:bg-black/60 transition-colors duration-200 cursor-default"
                >
                  <h3 className="space font-medium text-neutral-200 text-lg">
                    {project.name}
                  </h3>
                  <p className="plex text-neutral-300 text-sm mt-1">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <footer
        className="p-4 mt-auto border border-neutral-800 rounded-xl
                   bg-black/50 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03)] flex justify-between items-center"
      >
        <span className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Torben Conto
        </span>
        <div className="flex gap-4 text-neutral-500 text-sm">
          <a href="mailto:torbenmconto@gmail.com">Email</a>
          <a href="https://github.com/torbenconto" target="_blank">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

render(<App />, document.getElementById("app"));
