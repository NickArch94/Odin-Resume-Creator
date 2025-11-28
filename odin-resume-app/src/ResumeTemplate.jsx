function ResumeTemplate({ personalDetails, education, experience }) {
  return (
    <div className="resume-template bg-white text-black p-8 rounded-lg shadow-lg mt-8 max-w-2xl mx-auto">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold">{personalDetails.firstName} {personalDetails.lastName}</h1>
        <p>{personalDetails.email} | {personalDetails.phone}</p>
        <p>{personalDetails.address}, {personalDetails.city}, {personalDetails.state} {personalDetails.zip}, {personalDetails.country}</p>
        <p>LinkedIn: {personalDetails.linkedin} | GitHub: {personalDetails.github}</p>
      </header>
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
        <ul>
          {education.map((edu, idx) => (
            <li key={idx} className="mb-2">
              <strong>{edu.school}</strong> ({edu.type})<br />
              {edu.degree} in {edu.field}<br />
              {edu.start} - {edu.end}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>
        <ul>
          {experience.map((exp, idx) => (
            <li key={idx} className="mb-2">
              <strong>{exp.position}</strong> at <strong>{exp.company}</strong><br />
              {exp.start} - {exp.end}<br />
              <span>{exp.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ResumeTemplate;

