// import { projects } from "./projectsdata";

// // Two rows of project images sliding in opposite directions (like the Santai template).
// export default function ProjectMarquee({ onOpen }) {
//   const half = Math.ceil(projects.length / 2);
//   const rows = [projects.slice(0, half), projects.slice(half)];

//   return (
//     <section className="pp-marquee" aria-label="Project gallery">
//       {rows.map((row, i) => (
//         <div key={i} className={`pp-marquee-row ${i % 2 ? "is-reverse" : ""}`}>
//           {/* list is duplicated so the loop is seamless */}
//           <div className="pp-marquee-track">
//             {[...row, ...row, ...row, ...row].map((p, idx) => (
//               <button
//                 key={`${p.id}-${idx}`}
//                 className="pp-marquee-item"
//                 onClick={() => onOpen?.(p)}
//                 aria-hidden={idx >= row.length}
//                 tabIndex={idx >= row.length ? -1 : 0}
//               >
//                 <img src={p.img} alt={p.title} loading="lazy" />
//                 <span>{p.title}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

import { projects } from "./projectsdata";

// Two rows of actual project images moving in opposite directions.
export default function ProjectMarquee({ onOpen }) {
  if (!projects.length) return null;

  const half = Math.ceil(projects.length / 2);

  const rows = [
    projects.slice(0, half),
    projects.slice(half),
  ].filter((row) => row.length > 0);

  return (
    <section
      className="pp-marquee"
      aria-label="Completed interior design projects"
    >
      {rows.map((row, i) => (
        <div
          key={i}
          className={`pp-marquee-row ${i % 2 ? "is-reverse" : ""}`}
        >
          <div className="pp-marquee-track">
            {[...row, ...row, ...row, ...row].map((project, idx) => (
              <button
                key={`${project.id}-${idx}`}
                type="button"
                className="pp-marquee-item"
                onClick={() => onOpen?.(project)}
                aria-hidden={idx >= row.length}
                tabIndex={idx >= row.length ? -1 : 0}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                />

                <span>{project.title}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
