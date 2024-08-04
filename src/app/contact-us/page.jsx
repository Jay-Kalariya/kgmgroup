"use client";
import ContactPage from "@/components/contactus/Contactus";
import { useEffect } from "react";
import ThreedContactus from "@/components/threedcontactus/page";
import "./contactus.css";
function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us | KGM Group";
  });
  return (
    <>
      <div className="MainContactPage">
        <ThreedContactus />
        <ContactPage />
      </div>
    </>
  );
}
// https://prod.spline.design/YWzTYcQYgn6LVLuR/scene.splinecode
export default ContactUs;
