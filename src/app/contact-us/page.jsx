"use client"
import ContactPage from "@/components/contactus/Contactus";
import { useEffect } from "react";
function ContactUs() {
    useEffect(() => {
        document.title =
            "Contact Us | KGM Group";
    });
    return (
        <>
            <ContactPage />
        </>
    )
}
export default ContactUs;