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
            <h2>Resume Header</h2>
            <form className={""}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Zip Code" />
                <input type="text" placeholder="Country" />
                <input type="url" placeholder="LinkedIn URL" />
                <input type="url" placeholder="GitHub URL" />
            </form>
        </div>
    )
}

export default generalInformation;