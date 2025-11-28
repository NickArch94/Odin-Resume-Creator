import { useState } from "react";

function Generals({ personalDetails, setPersonalDetails, education, addEducation, experience, addExperience }) {
  // Local state for education and experience forms
  const [eduInput, setEduInput] = useState({
    school: '',
    degree: '',
    field: '',
    type: 'High School',
    start: '',
    end: '',
  });
  const [expInput, setExpInput] = useState({
    position: '',
    company: '',
    start: '',
    end: '',
    description: '',
  });

  // Handle general info change
  const handlePersonalChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  // Handle education form change
  const handleEduChange = (e) => {
    setEduInput({ ...eduInput, [e.target.name]: e.target.value });
  };

  // Handle experience form change
  const handleExpChange = (e) => {
    setExpInput({ ...expInput, [e.target.name]: e.target.value });
  };

  // Submit education
  const handleEduSubmit = (e) => {
    e.preventDefault();
    addEducation(eduInput);
    setEduInput({ school: '', degree: '', field: '', type: 'High School', start: '', end: '' });
  };

  // Submit experience
  const handleExpSubmit = (e) => {
    e.preventDefault();
    addExperience(expInput);
    setExpInput({ position: '', company: '', start: '', end: '', description: '' });
  };

  return (
    <div className="general-information p-6 bg-gray-800 rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-white mb-4">General Information</h2>
      <form className="flex flex-col gap-2 mb-8">
        <input name="firstName" value={personalDetails.firstName} onChange={handlePersonalChange} type="text" placeholder="First Name" className="h-10 px-2" />
        <input name="lastName" value={personalDetails.lastName} onChange={handlePersonalChange} type="text" placeholder="Last Name" className="h-10 px-2" />
        <input name="email" value={personalDetails.email} onChange={handlePersonalChange} type="email" placeholder="Email" className="h-10 px-2" />
        <input name="phone" value={personalDetails.phone} onChange={handlePersonalChange} type="text" placeholder="Phone" className="h-10 px-2" />
        <input name="address" value={personalDetails.address} onChange={handlePersonalChange} type="text" placeholder="Address" className="h-10 px-2" />
        <input name="city" value={personalDetails.city} onChange={handlePersonalChange} type="text" placeholder="City" className="h-10 px-2" />
        <input name="state" value={personalDetails.state} onChange={handlePersonalChange} type="text" placeholder="State" className="h-10 px-2" />
        <input name="zip" value={personalDetails.zip} onChange={handlePersonalChange} type="text" placeholder="Zip Code" className="h-10 px-2" />
        <input name="country" value={personalDetails.country} onChange={handlePersonalChange} type="text" placeholder="Country" className="h-10 px-2" />
        <input name="linkedin" value={personalDetails.linkedin} onChange={handlePersonalChange} type="text" placeholder="LinkedIn" className="h-10 px-2" />
        <input name="github" value={personalDetails.github} onChange={handlePersonalChange} type="text" placeholder="GitHub" className="h-10 px-2" />
      </form>

      <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
      <form className="flex flex-col gap-2 mb-6" onSubmit={handleEduSubmit}>
        <input name="school" value={eduInput.school} onChange={handleEduChange} type="text" placeholder="School Name" className="h-10 px-2" />
        <select name="type" value={eduInput.type} onChange={handleEduChange} className="h-10 px-2">
          <option>High School</option>
          <option>Associate</option>
          <option>Bachelor's</option>
          <option>Master's</option>
          <option>PhD</option>
          <option>Certificate</option>
        </select>
        <input name="degree" value={eduInput.degree} onChange={handleEduChange} type="text" placeholder="Degree (e.g. BSc, BA)" className="h-10 px-2" />
        <input name="field" value={eduInput.field} onChange={handleEduChange} type="text" placeholder="Field of Study" className="h-10 px-2" />
        <input name="start" value={eduInput.start} onChange={handleEduChange} type="text" placeholder="Start Year" className="h-10 px-2" />
        <input name="end" value={eduInput.end} onChange={handleEduChange} type="text" placeholder="End Year" className="h-10 px-2" />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 mt-2">Add Education</button>
      </form>
      <ul className="mb-8">
        {education.map((edu, idx) => (
          <li key={idx} className="text-white">{edu.type}: {edu.degree} in {edu.field} at {edu.school} ({edu.start} - {edu.end})</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-white mb-2">Practical Experience</h2>
      <form className="flex flex-col gap-2 mb-6" onSubmit={handleExpSubmit}>
        <input name="position" value={expInput.position} onChange={handleExpChange} type="text" placeholder="Position/Title" className="h-10 px-2" />
        <input name="company" value={expInput.company} onChange={handleExpChange} type="text" placeholder="Company/Project" className="h-10 px-2" />
        <input name="start" value={expInput.start} onChange={handleExpChange} type="text" placeholder="Start Date" className="h-10 px-2" />
        <input name="end" value={expInput.end} onChange={handleExpChange} type="text" placeholder="End Date" className="h-10 px-2" />
        <textarea name="description" value={expInput.description} onChange={handleExpChange} placeholder="Brief Description of Duties" className="h-20 px-2" />
        <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 mt-2">Add Experience</button>
      </form>
      <ul>
        {experience.map((exp, idx) => (
          <li key={idx} className="text-white">{exp.position} at {exp.company} ({exp.start} - {exp.end}): {exp.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Generals;
