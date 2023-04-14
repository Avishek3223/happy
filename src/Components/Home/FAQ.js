import React from "react";
import Faq from "react-faq-component";
import Container from "react-bootstrap/esm/Container";
import "./FAQ.css";

const data = {
  rows: [
    {
      title: "How do I connect with your website development team?",
      content: `Connecting with our website development team is easy! Simply fill out the form on our website and pay the first month's fee. Our team will get to work on developing a prototype of your website within 15 days of receiving your completed form. Once the prototype is approved, we will work to have your website fully developed and ready to launch within a month.`,
    },
    {
      title: "What if I want changes made to my website after it has launched?",
      content: `We offer ongoing website maintenance and support services to our clients. If you need changes made to your website after it has launched, simply contact our team and we will work with you to make the necessary updates.`,
    },
    {
      title: "Do you offer website hosting services?",
      content: `Yes, we offer website hosting services to our clients. Our hosting services include website backups, security updates, and ongoing support to ensure that your website is always up and running smoothly.`,
    },
    {
      title: "How can I join as an Instructor?",
      content: `We are looking certified Zumba instructors and we also pay for Zumba certifications to deserving candidates. Please <a href="/careers" style="color: #1b7571;"><u>Click here</u></a> and fill the form to apply.`,
    },
    {
      title: "What if I have questions or concerns during the website development process?",
      content: ` We pride ourselves on providing excellent customer service and support to our clients. If you have any questions or concerns during the website development process, simply reach out to our team and we will be happy to assist you.`,
    },
  ],
};

const styles = {
  bgColor: "#ffffff",
  rowTitleColor: "#151618",
  rowContentColor: "#555555",
  arrowColor: "#151618",
};

const config = {
  animate: true,
  //arrowIcon: "V",
  tabFocus: true,
};

export default function FAQ() {
  return (
    
      <div className="home-faq flex flex-col  items-center justify-center gap-[5rem] max800:py-[20rem]">
      <div className="home-faq">
        <div className="head">
          <div className="head-text flex items-center justify-center">Got any Queries ?</div>
          <div className="head-text1 flex items-center justify-center">
            Frequently Asked Questions
          </div>
        </div>

        <Faq data={data} styles={styles} config={config} />
      </div>
      </div>
    
  );
}
