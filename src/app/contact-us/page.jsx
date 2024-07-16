"use client"
import ContactPage from "@/components/contactus/Contactus";
import { useEffect } from "react";
function ContactUs() {
    useEffect(() => {
        document.title =
            "Contact Us | KGM Group";
    });
    return (
        // <h1>contact-us</h1>
        <ContactPage />
    )
}
export default ContactUs;