import React from "react";

const experienceContent = [
  {
    year: "  Sept 2024 - Present",
    position: " IT Officer",
    compnayName: "Fountain healthcare limited",
    detail1: `🎯 Managed internal healthcare software, troubleshooting in real-time to streamline operations and cut down manual workload.`,
    detail2: `🎯 Onboarded and trained 30+ hospital providers on digital tools, reducing paperwork and boosting operational efficiency`,
    detail3: '🎯 Provided tech support across teams, ensuring smooth adoption and minimal downtime during software use.',
    detail4: '🎯 Acted as digital liaison between the company and healthcare providers, simplifying complex systems into easy workflows.',
    detail5: '🎯 Handled social media strategy and content creation, maintaining an engaging online presence and boosting brand visibility by 20%.',
  },
  {
    year: "2023 - 2024",
    position: " Front-end developer",
    compnayName: "Karama creative",
    detail1: `🎯 Collaborated closely with senior developers and UI/UX designers to implement dynamic user interfaces, one of which was a payroll system for employee management and payments. `,
detail2: `🎯 Contributed ideas and feedback during team stand-ups and design reviews, showing initiative and ownership.`,
detail3: `🎯 Held meetings with clients to gather project requirements and understand their goals for more tailored web solutions.`,
detail4: `🎯 Maintained and updated the company’s websites, ensuring content accuracy, performance, and mobile responsiveness.`,
detail5: `🎯 Debugged frontend code, resolved UI bugs, and participated in regular code reviews to maintain clean, efficient codebases.`,
  

},
  // {
  //   year: "2005 - 2013",
  //   position: "Consultant",
  //   compnayName: "Videohive",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.detail1}</p>
          <p className="open-sans-font">{val.detail2}</p>
          <p className="open-sans-font">{val.detail3}</p>
          <p className="open-sans-font">{val.detail5}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
