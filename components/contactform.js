import React, { useState } from "react";

export default function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation
    const [errors, setErrors] = useState({});

    //   Setting button text
    const [buttonText, setButtonText] = useState("Sturen");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
            if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
            if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
            if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    //   const [form, setForm] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
        setButtonText("Aan het versturen...");
        const res = await fetch("/api/sendmail", {
            body: JSON.stringify({
                email: email,
                fullname: fullname,
                subject: subject,
                message: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText("Sturen");

            // Reset form fields
            setFullname("");
            setEmail("");
            setMessage("");
            setSubject("");
            return;
        }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Sturen");
        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        }
        console.log(fullname, email, subject, message);
  };
  return (

        <form onSubmit={handleSubmit}>
            <h3 className={"h6"}>Stuur een bericht</h3>

            <div class="form-field">
                <input
                    type="text"
                    placeholder="Je naam"
                    value={fullname}
                    onChange={(e) => {
                    setFullname(e.target.value);
                    }}
                    name="fullname"
                    className={"full-width"}
                />
            </div>
            {errors?.fullname && (
                <p className="text-red-500">Zonder je naam kunnen we je niet beleefd antwoorden</p>
            )}

            <div class="form-field">
                <input
                    type="email"
                    placeholder="Je emailadres"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className={"full-width"}
                />
                {errors?.email && (
                    <p className="text-red-500">We hebben je emailadres nodig om je te kunnen beantwoorden</p>
                )}
            </div>

            <div class="form-field">
                <input
                    type="text"
                    placeholder="Onderwerp"
                    name="subject"
                    value={subject}
                    onChange={(e) => {
                        setSubject(e.target.value);
                    }}
                    className={"full-width"}
                />
                {errors?.subject && (
                    <p className="text-red-500">Waar gaat je bericht over?</p>
                )}
            </div>

            <div class="form-field">
                <textarea
                    name="message"
                    placeholder="Je bericht"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    className={"full-width"}
                ></textarea>
                {errors?.message && (
                    <p className="text-red-500">Message body cannot be empty.</p>
                )}
            </div>

            <div class="form-field">
                <button
                    type="submit"
                    className={`${"full-width"} ${"btn--primary"}`}
                >
                    {buttonText}
                </button>
            </div>
            
            {showSuccessMessage && (
            <div className={"message-success"}>
                Je bericht is verstuurd en zal snel worden beantwoord
            </div>
            )}
            {showFailureMessage && (
            <div className={"message-failure"}>
                Er ging iets mis met versturen. Wil je misschien even bellen?
            </div>
            )}

        </form>

  );
}