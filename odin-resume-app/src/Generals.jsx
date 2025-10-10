import { useState } from "react";

function generalInformation() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        linkedin: "",
        github: "",
    })
    return (
        <div className="general-information">
            <h2 className="text-5xl font-bold md-4 pb-12 -pt-4 text-white text-center justify-center">Resume Header</h2>
            <form id="contact-info-form" className="flex flex-col gap-4">
                <label className="text-xl flex flex-center font-semibold text-white">First Name</label>
                <input type="text" placeholder="First Name" className="h-10" />
                <input type="text" placeholder="Last Name" className="h-10" />
                <input type="email" placeholder="Email" className="h-10" />
                <input type="tel" placeholder="Phone" className="h-10" />
                <input type="text" placeholder="Address" className="h-10" />
                <input type="text" placeholder="City" className="h-10" />
                <input type="text" placeholder="State" className="h-10" />
                <input type="text" placeholder="Zip Code" className="h-10" />
                <input type="text" placeholder="Country" className="h-10" />
                <input type="url" placeholder="LinkedIn URL" className="h-10" />
                <input type="url" placeholder="GitHub URL" className="h-10" />
            </form>
        </div>
    )
}

export default generalInformation;