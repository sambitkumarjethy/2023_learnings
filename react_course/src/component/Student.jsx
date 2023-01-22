import React from "react";
import Subject from "./Subject";
import propTypes from "prop-types";

// const Student = (props) => {
const Student = ({ name, age }) => {
  const subject = "Java Script";
  return (
    <div>
      <h1>
        {/*{props.name} for Student having age {props.age}*/}
        Student : {name} ===== AGE: {age}
      </h1>
      <Subject subject={subject} />
    </div>
  );
};
Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
};
Student.defaultProps = {
  name: "Name",
  age: 0,
};

export default Student;
