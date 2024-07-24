import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./contactus.css";
import { motion } from "framer-motion";
import { translate } from "../../components/headers/anim"; // Import animations


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  company: yup.string().required("Company/Organization is required"),
  project: yup.string().required("Project description is required"),
});

const Contactus = () => {
  const getChars = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={char + index}
        custom={[index * 0.02, (text.length - index) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {char}
      </motion.span>
    ));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="MainContactForm">
      <div className="contact-form-container">
        <div className="HeaderMain">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true }}
      >
        <p className="HeaderTextTitle">
          {getChars("Let's work together.")}
        </p>
      </motion.div>
          {/* <p className="HeaderTextTitle">Let{"'"}s work together.</p> */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          > <p className="HeaderTextTitleInner">
          Interested in working together? Fill out some info and we will be in
          touch shortly! We cant wait to hear from you!
        </p></motion.div>
         
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="FlexContainer">
            <div className="form-group">
              <label>Name*</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Your name"
              />
              <p>{errors.name?.message}</p>
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input
                type="text"
                {...register("email")}
                placeholder="Your email address"
              />
              <p>{errors.email?.message}</p>
            </div>
          </div>
          <div className="FlexContainer">
            <div className="form-group">
              <label>Phone*</label>
              <input
                type="text"
                {...register("phone")}
                placeholder="Your phone number"
              />
              <p>{errors.phone?.message}</p>
            </div>
            <div className="form-group">
              <label>Company/Organization*</label>
              <input
                type="text"
                {...register("company")}
                placeholder="Ex. KGM Group"
              />
              <p>{errors.company?.message}</p>
            </div>
          </div>
          <div className="form-group">
            <label>Tell us about your project*</label>
            <textarea
              rows={4}
              cols={4}
              {...register("project")}
              placeholder="Ex. Hello, KGM Group. We need help to make this project unique."
            />
            <p>{errors.project?.message}</p>
          </div>
          <div className="ButtonOuter">
            <div className="ButtonSubmit">
              <button type="submit" className="ButtonInner">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactus;
