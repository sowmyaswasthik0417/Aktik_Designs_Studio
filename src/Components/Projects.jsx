// import { useState, useEffect } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { ArrowLeft, MapPin, Search } from "lucide-react";
// import { locations, categories, projects } from "./projectsdata";
// import ProjectDetail from "./ProjectDetail";
// import ProjectMarquee from "./ProjectMarquee";
// import "./Project.css";


// export default function ProjectsPage() {

// export default function ProjectsPage() {
//   const [params, setParams] = useSearchParams();
//   const [selected, setSelected] = useState(null);
//   const [showAllProjects, setShowAllProjects] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Read filters BEFORE using them in effects
//   const location = params.get("location") || "";
//   const category = params.get("category") || "All";
//   const q = params.get("q") || "";

//   // Detect mobile screen size
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => {
//       window.removeEventListener("resize", checkMobile);
//     };
//   }, []);

//   // Collapse projects when filters change
//   useEffect(() => {
//     setShowAllProjects(false);
//   }, [location, category, q]);

//   const updateFilters = (changes) => {
//     const next = new URLSearchParams(params);

//     Object.entries(changes).forEach(([key, value]) => {
//       if (!value || value === "All") {
//         next.delete(key);
//       } else {
//         next.set(key, value);
//       }
//     });

//     setParams(next, { replace: true });
//   };

//   const selectLocation = (name) => {
//     updateFilters({
//       location: name,
//       category: "All",
//     });
//   };

//   const known =
//     locations.some(
//       (item) => item.name.toLowerCase() === location.toLowerCase()
//     ) || !location;

//   const term = q.trim().toLowerCase();


// //   const visible = projects.filter((project) => {
// //     const matchesLocation =
// //       !location ||
// //       project.location.toLowerCase() === location.toLowerCase();

// //     const matchesCategory =
// //       category === "All" || project.group === category;

// //     const matchesSearch =
// //       !term ||
// //       `${project.title} ${project.location} ${project.group}`
// //         .toLowerCase()
// //         .includes(term);

// //     return matchesLocation && matchesCategory && matchesSearch;
// //   });


// const visible = projects.filter((project) => {
//   const matchesLocation =
//     !location ||
//     project.location.toLowerCase() === location.toLowerCase();

//   const matchesCategory =
//     category === "All" || project.group === category;

//   const matchesSearch =
//     !term ||
//     [
//       project.title,
//       project.location,
//       project.group,
//       project.description,
//       project.client,
//       project.area,
//       project.year,
//     ]
//       .filter(Boolean)
//       .join(" ")
//       .toLowerCase()
//       .includes(term);

//   return matchesLocation && matchesCategory && matchesSearch;
// });
 
// const groups = ["All", ...categories.map((item) => item.group)];

//   return (
//     <main className="projects-page">
//       <Link to="/" className="pp-link">
//         <ArrowLeft size={15} />
//         Back
//       </Link>

//       <p className="pp-eyebrow">
//         <span />
//         {location ? "PROJECTS IN" : "ALL LOCATIONS"}
//       </p>

//       <h1 className="pp-heading">
//         {location || "All projects"}
//         <span className="pp-dot">.</span>
//       </h1>

//       {/* Two moving rows of project images */}
//       {/* <ProjectMarquee onOpen={setSelected} /> */}

//       {/* Location filters */}
//       <div className="pp-chips">
//         <button
//           className={`pp-chip ${!location ? "is-active" : ""}`}
//           onClick={() =>
//             updateFilters({
//               location: "",
//               category: "All",
//             })
//           }
//         >
//           All locations
//         </button>

//         {locations.map((item) => (
//           <button
//             key={item.name}
//             className={`pp-chip ${
//               location.toLowerCase() === item.name.toLowerCase()
//                 ? "is-active"
//                 : ""
//             }`}
//             onClick={() => selectLocation(item.name)}
//           >
//             <MapPin size={12} />
//             {item.name}
//           </button>
//         ))}
//       </div>

//       {/* Category and search filters */}
//       <div className="pp-filter-bar">
//         <div className="pp-filter-list">
//           {groups.map((group) => (
//             <button
//               key={group}
//               className={`pp-filter ${
//                 category === group ? "is-active" : ""
//               }`}
//               onClick={() =>
//                 updateFilters({ category: group })
//               }
//             >
//               {group === "All" ? "All spaces" : group}
//             </button>
//           ))}
//         </div>

//         <label className="pp-search">
//           <Search size={14} />

//           <input
//             value={q}
//             onChange={(event) =>
//               updateFilters({ q: event.target.value })
//             }
//             placeholder="Search projects or locations"
//           />
//         </label>
//       </div>

//       <p className="pp-count">
//         {String(known ? visible.length : 0).padStart(2, "0")} projects
//       </p>

//       {!known ? (
//         <Empty
//           title="No location found"
//           text={`We don't have projects in "${location}" yet.`}
//           onReset={() => setParams({}, { replace: true })}
//         />
//       ) : visible.length === 0 ? (
//         <Empty
//           title="No projects found"
//           text="Try another category, location or search."
//           onReset={() =>
//             updateFilters({
//               category: "All",
//               q: "",
//             })
//           }
//         />
//       ) : (
//         <div className="pp-grid">
//   {displayedProjects.map((project, i) => (
//             <article
//               key={project.id}
//               className="pp-card"
//               style={{ animationDelay: `${i * 80}ms` }}
//               onClick={() => setSelected(project)}
//               onKeyDown={(e) => e.key === "Enter" && setSelected(project)}
//               tabIndex={0}
//               role="button"
//               aria-label={`View ${project.title}`}
//             > 
//               <img
//                 src={project.img}
//                 alt={project.title}
//                 loading="lazy"
//               />

//               <div className="pp-shade" />

//               <span className="pp-index">
//                 {project.group.toUpperCase()}
//               </span>

//               <div className="pp-caption">
//                 <p>
//                   <MapPin size={10} />
//                   {project.location.toUpperCase()}
//                 </p>

//                 <h2>{project.title}</h2>

//                 <div className="pp-more">
//                   <span>{[project.year, project.area].filter(Boolean).join(" · ") || project.kicker}</span>
//                   <span className="pp-view">View project →</span>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
      
//       )}
//   {isMobile && visible.length > 3 && (
//   <div className="pp-view-more-wrap">
//     <button
//       type="button"
//       className="pp-view-more-btn"
//       onClick={() => setShowAllProjects((prev) => !prev)}
//     >
//       {showAllProjects ? "View Less ↑" : "View More ↓"}
//     </button>
//   </div>
// )}
//       {selected && (
//         <ProjectDetail project={selected} onClose={() => setSelected(null)} />
//       )}
//     </main>
//   );
// }

// function Empty({ title, text, onReset }) {
//   return (
//     <div className="pp-empty">
//       <MapPin size={36} strokeWidth={1.2} />

//       <h2>{title}</h2>
//       <p>{text}</p>

//       <button
//         className="pp-filter is-active"
//         onClick={onReset}
//       >
//         Show all locations
//       </button>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, MapPin, Search } from "lucide-react";
import { locations, categories, projects } from "./projectsdata";
import ProjectDetail from "./ProjectDetail";
import ProjectMarquee from "./ProjectMarquee";
import "./Project.css";
import AutoScrollRow from "./AutoScrollRow";

export default function ProjectsPage() {
  const [params, setParams] = useSearchParams();
  const [selected, setSelected] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Read the current filters
  const location = params.get("location") || "";
  const category = params.get("category") || "All";
  const q = params.get("q") || "";

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Reset View More when filters change
  useEffect(() => {
    setShowAllProjects(false);
  }, [location, category, q]);

  // Update URL filters
  const updateFilters = (changes) => {
    const next = new URLSearchParams(params);

    Object.entries(changes).forEach(([key, value]) => {
      if (!value || value === "All") {
        next.delete(key);
      } else {
        next.set(key, value);
      }
    });

    setParams(next, { replace: true });
  };

  // Select a location
  const selectLocation = (name) => {
    updateFilters({
      location: name,
      category: "All",
    });
  };

  // Check whether the selected location exists
  const known =
    locations.some(
      (item) => item.name.toLowerCase() === location.toLowerCase()
    ) || !location;

  const term = q.trim().toLowerCase();

  // Filter projects by location, category, and search
  const visible = projects.filter((project) => {
    const matchesLocation =
      !location ||
      project.location.toLowerCase() === location.toLowerCase();

    const matchesCategory =
      category === "All" || project.group === category;

    const matchesSearch =
      !term ||
      [
        project.title,
        project.location,
        project.group,
        project.description,
        project.client,
        project.area,
        project.year,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(term);

    return matchesLocation && matchesCategory && matchesSearch;
  });

  // Show only 3 projects initially on mobile
  const displayedProjects =
    isMobile && !showAllProjects
      ? visible.slice(0, 3)
      : visible;

  const groups = ["All", ...categories.map((item) => item.group)];

  return (
    <main className="projects-page">
      <Link to="/" className="pp-link">
        <ArrowLeft size={15} />
        Back
      </Link>

      <p className="pp-eyebrow">
        <span />
        {location ? "PROJECTS IN" : "ALL LOCATIONS"}
      </p>

      <h1 className="pp-heading">
        {location || "All projects"}
        <span className="pp-dot">.</span>
      </h1>

      {/* Moving project images, if needed */}
      {/* <ProjectMarquee onOpen={setSelected} /> */}

      {/* Location filters */}
      {/* <div className="pp-chips"> */}
      <MobileMarquee enabled={isMobile} speed={20} className="pp-chips">
        <button
          className={`pp-chip ${!location ? "is-active" : ""}`}
          onClick={() =>
            updateFilters({
              location: "",
              category: "All",
            })
          }
        >
          All locations
        </button>

        {locations.map((item) => (
          <button
            key={item.name}
            className={`pp-chip ${
              location.toLowerCase() === item.name.toLowerCase()
                ? "is-active"
                : ""
            }`}
            onClick={() => selectLocation(item.name)}
          >
            <MapPin size={12} />
            {item.name}
          </button>
        ))}
      {/* </div> */}
</MobileMarquee>
      {/* Category and search filters */}
      <div className="pp-filter-bar">
        <MobileMarquee enabled={isMobile} speed={18} className="pp-filter-list">
        {/* <div className="pp-filter-list"> */}
          {groups.map((group) => (
            <button
              key={group}
              className={`pp-filter ${
                category === group ? "is-active" : ""
              }`}
              onClick={() => updateFilters({ category: group })}
            >
              {group === "All" ? "All spaces" : group}
            </button>
          ))}
        {/* </div> */}
</MobileMarquee>
        <label className="pp-search">
          <Search size={14} />

          <input
            value={q}
            onChange={(event) =>
              updateFilters({ q: event.target.value })
            }
            placeholder="Search projects or locations"
          />
        </label>
      </div>

      {/* Total matching projects */}
      <p className="pp-count">
        {String(known ? visible.length : 0).padStart(2, "0")} projects
      </p>

      {!known ? (
        <Empty
          title="No location found"
          text={`We don't have projects in "${location}" yet.`}
          onReset={() => setParams({}, { replace: true })}
        />
      ) : visible.length === 0 ? (
        <Empty
          title="No projects found"
          text="Try another category, location or search."
          onReset={() =>
            updateFilters({
              category: "All",
              q: "",
            })
          }
        />
      ) : (
        <>
          {/* Project grid */}
          
          <div className="pp-grid">
            {displayedProjects.map((project, i) => (
              <article
                key={project.id}
                className="pp-card"
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View ${project.title}`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="pp-shade" />

                <span className="pp-index">
                  {project.group.toUpperCase()}
                </span>

                <div className="pp-caption">
                  <p>
                    <MapPin size={10} />
                    {project.location.toUpperCase()}
                  </p>

                  <h2>{project.title}</h2>

                  <div className="pp-more">
                    <span>
                      {[project.year, project.area]
                        .filter(Boolean)
                        .join(" · ") || project.kicker}
                    </span>

                    <span className="pp-view">
                      View project →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View More / View Less: mobile only */}
          {isMobile && visible.length > 3 && (
            <div className="pp-view-more-wrap">
              <button
                type="button"
                className="pp-view-more-btn"
                onClick={() =>
                  setShowAllProjects((prev) => !prev)
                }
                aria-expanded={showAllProjects}
              >
                {showAllProjects ? "View Less ↑" : "View More ↓"}
              </button>
            </div>
          )}
        </>
      )}

      {/* Project details popup */}
      {selected && (
        <ProjectDetail
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  );
}

function Empty({ title, text, onReset }) {
  return (
    <div className="pp-empty">
      <MapPin size={36} strokeWidth={1.2} />

      <h2>{title}</h2>
      <p>{text}</p>

      <button
        className="pp-filter is-active"
        onClick={onReset}
      >
        Show all locations
      </button>
    </div>
  );
}
function MobileMarquee({ enabled, speed = 25, className = "", children }) {
  if (!enabled) return <div className={className}>{children}</div>;
  return (
    <div className="mq">
      <div className={`mq-track ${className}`} style={{ animationDuration: `${speed}s` }}>
        {children}
        <div className="mq-copy" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
