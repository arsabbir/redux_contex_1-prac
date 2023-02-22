import React, { useContext } from "react";
import StudentContext from "../../context/StudentContext";

const Sheet = () => {
  const [student, setStudent] = useContext(StudentContext);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <hr />
            <h1>Sheet PAGE </h1>
            {student.map(({ name, age,clas }, index) => {
              return (
                <>
                  <h1>{name}</h1>
                  <h3>{age}</h3>
                  <h3>{clas}</h3>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sheet;
