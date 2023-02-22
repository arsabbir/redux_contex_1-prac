import React, { useContext } from "react";
import StudentContext from "../../context/StudentContext";

const Teacher = () => {
  const [student, setStudent] = useContext(StudentContext);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <hr />
            <h1>Teacher PAGE </h1>

            {student.map(({ name, age, clas }, index) => {
              return <><h1>{name}</h1></>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
