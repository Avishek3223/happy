import React from "react";
import Faq from "react-faq-component";
import Container from "react-bootstrap/esm/Container";
import "./FAQ.css";

const data = {
  rows: [
    {
      title: "What is Happyprancer?",
      content: `Online Instructor led dance fitness community`,
    },
    {
      title: "What is our mission?",
      content: `HappyPrancer's mission is to bring dance as fitness activity and performance to people. And through dance, to create healthier people and more integrated communities.`,
    },
    {
      title: "Do I have to pay any subscription charges ?",
      content: `Currently there is no subscription charges to join and participate in Zumba classes.`,
    },
    {
      title: "How can I join as an Instructor?",
      content: `We are looking certified Zumba instructors and we also pay for Zumba certifications to deserving candidates. Please <a href="/careers" style="color: #1b7571;"><u>Click here</u></a> and fill the form to apply.`,
    },
    {
      title: "I am a GYM owner. How can I connect?",
      content: `Please <a href="/gym-affiliation" style="color: #1b7571;"><u>Click here</u></a> and fill the form to be affiliated.`,
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
          <div className="head-text flex items-center justify-center">
            Got any Queries ?
          </div>
          <div className="head-text1 flex items-center justify-center">
            Frequently Asked Questions
          </div>
        </div>

        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}
