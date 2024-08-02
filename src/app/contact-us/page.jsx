"use client"
import ContactPage from "@/components/contactus/Contactus";
import { useEffect } from "react";
import ThreedContactus from "@/components/threedcontactus/page";
function ContactUs() {
    useEffect(() => {
        document.title =
            "Contact Us | KGM Group";
    });
    return (
        <>
            <ThreedContactus />
            <ContactPage />
        </>
    )
}
// https://prod.spline.design/YWzTYcQYgn6LVLuR/scene.splinecode
export default ContactUs;