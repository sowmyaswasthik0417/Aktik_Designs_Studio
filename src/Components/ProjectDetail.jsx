
// import { useEffect, useState } from "react";
// import {
//   X,
//   MapPin,
//   ChevronLeft,
//   ChevronRight,
//   Calendar,
//   Ruler,
//   User,
//   CheckCircle2,
// } from "lucide-react";
// import "./Project.css";

// // Popup with project details, single-image gallery, and location links.
// export default function ProjectDetail({ project, onClose }) {
//   const [active, setActive] = useState(0);

//   const images = project.images?.length
//     ? project.images
//     : project.img
//       ? [project.img]
//       : [];
// const instagramUrl = project.instagramUrl;

//   useEffect(() => {
//     setActive(0);

//     const onKey = (e) => {
//       if (e.key === "Escape") onClose();

//       if (images.length > 1 && e.key === "ArrowRight") {
//         setActive((a) => (a + 1) % images.length);
//       }

//       if (images.length > 1 && e.key === "ArrowLeft") {
//         setActive((a) => (a - 1 + images.length) % images.length);
//       }
//     };

//     document.addEventListener("keydown", onKey);
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [project, images.length, onClose]);

//   const locationQuery = project.address?.trim()
//     ? `${project.address.trim()}, ${project.location}, India`
//     : `${project.location}, India`;

//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     locationQuery
//   )}`;

//   const fields = [
//     { icon: Calendar, label: "Year", value: project.year },
//     { icon: Ruler, label: "Area", value: project.area },
//     // { icon: User, label: "Client", value: project.client },
//     // { icon: CheckCircle2, label: "Status", value: project.status },
//   ].filter((field) => field.value);

//   return (
//     <div
//       className="pp-modal"
//       onClick={onClose}
//       role="dialog"
//       aria-modal="true"
//       aria-label={project.title}
//     >
//       <div
//         className="pp-modal-box"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           className="pp-modal-close"
//           onClick={onClose}
//           aria-label="Close"
//         >
//           <X size={18} />
//         </button>

//         {/* Image gallery: only the active image appears in the main frame */}
//         <div className="pp-gallery">
//           {/* <div className="pp-gallery-main">
//             {images.length > 0 ? (
//               <img
//                 key={images[active]}
//                 src={images[active]}
//                 alt={`${project.title} - Image ${active + 1}`}
//                 className="is-active"
//               />
//             ) : (
//               <div className="pp-gallery-empty">
//                 No project image available
//               </div>
//             )}

//             {images.length > 1 && (
//               <>
//                 <button
//                   type="button"
//                   className="pp-nav is-prev"
//                   onClick={() =>
//                     setActive((a) => (a - 1 + images.length) % images.length)
//                   }
//                   aria-label="Previous image"
//                 >
//                   <ChevronLeft size={22} />
//                 </button>

//                 <button
//                   type="button"
//                   className="pp-nav is-next"
//                   onClick={() =>
//                     setActive((a) => (a + 1) % images.length)
//                   }
//                   aria-label="Next image"
//                 >
//                   <ChevronRight size={22} />
//                 </button>

//                 <span className="pp-counter">
//                   {String(active + 1).padStart(2, "0")} /{" "}
//                   {String(images.length).padStart(2, "0")}
//                 </span>
//               </>
//             )}
//           </div> */}

// <div className="pp-gallery-main">
//   {images.length > 0 && (
//     <>
//       {/* Same image as a soft background */}
//       <img
//   src={images[active]}
//   alt=""
//   aria-hidden="true"
//   className="pp-gallery-bg"
// />

// <img
//   src={images[active]}
//   alt={`${project.title} - Image ${active + 1}`}
//   className="is-active pp-gallery-foreground"
// />
//     </>
//   )}

//   {images.length === 0 && (
//     <div className="pp-gallery-empty">
//       No project image available
//     </div>
//   )}

//   {images.length > 1 && (
//     <>
//       <button
//         type="button"
//         className="pp-nav is-prev"
//         onClick={() =>
//           setActive((a) => (a - 1 + images.length) % images.length)
//         }
//         aria-label="Previous image"
//       >
//         <ChevronLeft size={22} />
//       </button>

//       <button
//         type="button"
//         className="pp-nav is-next"
//         onClick={() =>
//           setActive((a) => (a + 1) % images.length)
//         }
//         aria-label="Next image"
//       >
//         <ChevronRight size={22} />
//       </button>

//       <span className="pp-counter">
//         {String(active + 1).padStart(2, "0")} /{" "}
//         {String(images.length).padStart(2, "0")}
//       </span>
//     </>
//   )}
// </div>

//           {/* Small clickable thumbnails */}
//           {images.length > 1 && (
//             <div className="pp-thumbs">
//               {images.map((src, index) => (
//                 <button
//                   type="button"
//                   key={`${src}-${index}`}
//                   className={`pp-thumb ${
//                     index === active ? "is-active" : ""
//                   }`}
//                   onClick={() => setActive(index)}
//                   aria-label={`Show image ${index + 1}`}
//                   aria-pressed={index === active}
//                 >
//                   <img
//                     src={src}
//                     alt={`${project.title} thumbnail ${index + 1}`}
//                   />
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Project information */}
//         <div className="pp-info">
//           <p className="pp-eyebrow">
//             <span />
//             {project.group?.toUpperCase()}
//           </p>

//           <h2 className="pp-info-title">
//             {project.title}
//             <span className="pp-dot">.</span>
//           </h2>

//           <p className="pp-info-loc">
//             <MapPin size={13} />
//             {project.address || project.location}
//           </p>

//           {project.description && (
//             <p className="pp-info-desc">{project.description}</p>
//           )}

//           <dl className="pp-fields">
//             {fields.map(({ icon: Icon, label, value }) => (
//               <div key={label} className="pp-field">
//                 <dt>
//                   <Icon size={12} /> {label}
//                 </dt>
//                 <dd>{value}</dd>
//               </div>
//             ))}
//           </dl>

//           {/* Project location and Instagram links */}
//         {/* Project location and Instagram links */}
// <section className="project-map-section">
//   <h3>Explore This Project</h3>

//   <div className="project-action-links">
//     <a
//       href={googleMapsUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="project-map-link"
//     >
//       <MapPin size={18} />
//       View on Map ↗
//     </a>

//     {instagramUrl && (
//       <a
//         href={instagramUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="project-instagram-link"
//       >
//         <svg
//           width="18"
//           height="18"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           aria-hidden="true"
//         >
//           <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//           <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//           <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//         </svg>
//         View on Instagram ↗
//       </a>
//     )}
//   </div>
// </section>

//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import {
  X,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Ruler,
  ArrowUpRight,
} from "lucide-react";
import "./Project.css";

// Popup with project details, image gallery, and location links.
export default function ProjectDetail({ project, onClose }) {
  const [active, setActive] = useState(0);

  const images = project.images?.length
    ? project.images
    : project.img
      ? [project.img]
      : [];

  const instagramUrl = project.instagramUrl;

  const goPrev = () =>
    setActive((a) => (a - 1 + images.length) % images.length);
  const goNext = () => setActive((a) => (a + 1) % images.length);

  useEffect(() => {
    setActive(0);

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (images.length > 1 && e.key === "ArrowRight") goNext();
      if (images.length > 1 && e.key === "ArrowLeft") goPrev();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, images.length, onClose]);

  const locationQuery = project.address?.trim()
    ? `${project.address.trim()}, ${project.location}, India`
    : `${project.location}, India`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locationQuery
  )}`;

  const fields = [
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Ruler, label: "Area", value: project.area },
  ].filter((field) => field.value);

  return (
    <div
      className="pp-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="pp-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="pp-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {/* ---------- Gallery ---------- */}
        <div className="pp-gallery">
          <div className="pp-gallery-main">
            {images.length > 0 ? (
              <>
                <img
                  src={images[active]}
                  alt=""
                  aria-hidden="true"
                  className="pp-gallery-bg"
                />
                <img
                  key={images[active]}
                  src={images[active]}
                  alt={`${project.title} - Image ${active + 1}`}
                  className="is-active pp-gallery-foreground"
                />
              </>
            ) : (
              <div className="pp-gallery-empty">No project image available</div>
            )}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="pp-nav is-prev"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  type="button"
                  className="pp-nav is-next"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>

                <span className="pp-counter">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </span>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="pp-thumbs">
              {images.map((src, index) => (
                <button
                  type="button"
                  key={`${src}-${index}`}
                  className={`pp-thumb ${index === active ? "is-active" : ""}`}
                  onClick={() => setActive(index)}
                  aria-label={`Show image ${index + 1}`}
                  aria-pressed={index === active}
                >
                  <img src={src} alt={`${project.title} thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ---------- Info ---------- */}
        <div className="pp-info">
          {project.group && (
            <p className="pp-eyebrow">
              <span />
              {project.group.toUpperCase()}
            </p>
          )}

          <h2 className="pp-info-title">
            {project.title}
            <span className="pp-dot">.</span>
          </h2>

          <p className="pp-info-loc">
            <MapPin size={13} />
            {project.address || project.location}
          </p>

          {project.description && (
            <p className="pp-info-desc">{project.description}</p>
          )}

          {fields.length > 0 && (
            <dl className="pp-fields">
              {fields.map(({ icon: Icon, label, value }) => (
                <div key={label} className="pp-field">
                  <dt>
                    <Icon size={12} /> {label}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {/* ---------- Explore links ---------- */}
          <section className="project-map-section">
            <h3 className="project-explore-title">Explore This Project</h3>

            <div className="project-action-links">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-card project-map-link"
              >
                <span className="project-action-icon">
                  <MapPin size={18} />
                </span>
                <span className="project-action-text">
                  <strong>View on Map</strong>
                  <small>Open in Google Maps</small>
                </span>
                <ArrowUpRight size={16} className="project-action-arrow" />
              </a>

              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-card project-instagram-link"
                >
                  <span className="project-action-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </span>
                  <span className="project-action-text">
                    <strong>View on Instagram</strong>
                    <small>See more photos</small>
                  </span>
                  <ArrowUpRight size={16} className="project-action-arrow" />
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
