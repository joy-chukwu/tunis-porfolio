import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Joy" },
  { meta: "last name", metaInfo: "Chukwu" },
  // { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Nigerian" },
  { meta: "Availability", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Lagos" },
  { meta: "phone", metaInfo: "+234 810 530 1651" },
  { meta: "Email", metaInfo: "joychukwu649@gmail.com" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "English, Igbo" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
