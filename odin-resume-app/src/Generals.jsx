import { useState } from "react";

function generalInformation(
    handleSubmit,
    personalDetails,
    setPersonalDetails,
) {
    const [namePlace, setNamePlace] = useState('')
    const [lastNamePlace, setLastNamePlace] = useState('')
    const [emailPlace, setEmailPlace] = useState('')
    const [phonePlace, setPhonePlace] = useState('')
    const [addressPlace, setAddressPlace] = useState('')
    const [cityPlace, setCityPlace] = useState('')
    const [statePlace, setStatePlace] = useState('')
    const [zipPlace, setZipPlace] = useState('')
    const [countryPlace, setCountryPlace] = useState('')
    const [linkedinPlace, setLinkedinPlace] = useState('')
    const [githubPlace, setGithubPlace] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)

    function clearPlaceholders() {
        setNamePlace('')
        setLastNamePlace('')
        setEmailPlace('')
        setPhonePlace('')
        setAddressPlace('')
        setCityPlace('')
        setStatePlace('')
        setZipPlace('')
        setCountryPlace('')
        setLinkedinPlace('')
        setGithubPlace('')
    }

    function onSubmit(e) {
        let personalDetails = e.target.value
        setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value })
    }

    


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