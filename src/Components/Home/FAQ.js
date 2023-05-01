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
      <div className=" flex flex-col p-[5rem] max800:px-[5rem] ">
      <div className="rounded-6xl box-border w-[18.88rem] h-[3.06rem] shrink-0 overflow-hidden flex flex-row  items-center justify-center border-[1px] border-solid border-black">
        <div className="flex flex-row p-[0.53rem] items-center justify-center">
          <div className="relative text-[1rem] font-bold">
            Frequently Ask Questions
          </div>
        </div>
      </div>
    </div>

        <Faq data={data} styles={styles} config={config} />
      </div>
    
  );
}
