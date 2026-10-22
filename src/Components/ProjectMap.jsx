import "./ProjectMap.css";

export default function ProjectMap({ project }) {
  const lat = Number(project?.lat);
  const lng = Number(project?.lng);

  const hasCoordinates =
    project?.lat !== null &&
    project?.lat !== undefined &&
    project?.lng !== null &&
    project?.lng !== undefined &&
    project?.lat !== "" &&
    project?.lng !== "" &&
    Number.isFinite(lat) &&
    Number.isFinite(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180;

  if (!hasCoordinates) return null;

  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <section className="project-map">
      <div className="project-map-heading">
        <div>
          <span className="project-map-eyebrow">FIND THE LOCATION</span>
          <h3>Project Location</h3>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-map-directions"
        >
          Get Directions ↗
        </a>
      </div>

      <div className="project-map-frame">
        <iframe
          title={`Map showing ${project.title}`}
          src={mapUrl}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <p className="project-map-coordinates">
        {lat.toFixed(6)}, {lng.toFixed(6)}
      </p>
    </section>
  );
}