"use client"
import ContactPage from "@/components/contactus/Contactus";
import { useEffect } from "react";
import Footer from "@/components/footer/footer";
function ContactUs() {
    useEffect(() => {
        document.title =
            "Contact Us | KGM Group";
    });
    return (
        <>
            <ContactPage />
            <Footer />
        </>
    )
}
export default ContactUs;