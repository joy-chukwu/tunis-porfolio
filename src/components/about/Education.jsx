import React from "react";

const educationContent = [
  // {
  //   year: "2015",
  //   degree: "ENGINEERING DEGREE",
  //   institute: "OXFORD UNIVERSITY",
  //   details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
  //       adipisicing elit`,
  // },
  {
    year: "2023",
    degree: "BACHELORS DEGREE",
    institute: "NNAMDI AZIKIWE UNIVERSITY",
    details: `B.Sc Applied Biochemistry`,
  },
  {
    year: "2018",
    degree: "WEST AFRICAN EXAMINATION CERTIFICATE",
    institute: "FEDERAL GOVERNMENT GIRLS COLLEGE.",
    // details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
    //     elit, sed do eiusmod tempor duntt`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
