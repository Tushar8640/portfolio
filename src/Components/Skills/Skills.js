import React from "react";

const Skills = () => {
  return (
    <container >
      <div>
        <div>
          <p>
            <strong>My Skills</strong>
          </p>
          <strong>Junior Web Developer</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            ipsum dolorem expedita eaque. Voluptatum, rerum?
          </p>
        </div>
        <div item xs={12} sx={{ display: "flex", flexWrap: "wrap" }} md={8}>
          <div style={{ marginLeft: "20%", marginTop: "10px" }}>
            {" "}
            <img
              width="80px"
              src="https://i.ibb.co/tsLvWy9/65687-html-logo-html5-5-five-icon.png"
              alt="skill"
            />
          </div>
          <div style={{ marginLeft: "20%" }}>
            {" "}
            <img
              width="80px"
              src=" https://i.ibb.co/5GZQ2LB/294692-css3-icon.png"
              alt="skill"
            />
          </div>
          <div style={{ marginLeft: "20%", marginTop: "10px" }}>
            {" "}
            <img
              width="80px"
              src="https://i.ibb.co/6mZfVzT/308441-front-end-javascript-js-long-shadow-markup-language-icon.png"
              alt="skill"
            />
          </div>
          <div style={{ marginLeft: "20%", marginTop: "10px" }}>
            {" "}
            <img
              width="80px"
              src="https://i.ibb.co/5RbcqcV/7423887-react-react-native-icon.png"
              alt="skill"
            />
          </div>
          <div style={{ marginLeft: "20%", marginTop: "10px" }}>
            {" "}
            <img
              width="80px"
              src="https://i.ibb.co/41QmP3G/1012818-code-development-logo-nodejs-icon.png"
              alt="skill"
            />
          </div>
          <div style={{ marginLeft: "20%", marginTop: "10px" }}>
            {" "}
            <img
              width="80px"
              src="https://i.ibb.co/V3ncGCn/express-js.png"
              alt="skill"
            />
          </div>
          <div style={{ marginLeft: "20%", marginTop: "10px" }}>
            {" "}
            <img
              width="80px"
              src="https://i.ibb.co/w60c4qb/1012822-code-development-logo-mongodb-programming-icon.png"
              alt="skill"
            />
          </div>
          <div style={{ marginLeft: "20%", marginTop: "10px" }}>
            {" "}
            <img
              width="80px"
              src="https://i.ibb.co/n02m1ZG/1175532-developer-firebase-google-coding-programming-icon.png"
              alt="skill"
            />
          </div>
        </div>
      </div>
    </container>
  );
};

export default Skills;
