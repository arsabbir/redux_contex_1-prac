import React, { useContext } from "react";
import StudentContext from "../../context/StudentContext";
import UtilityContext from "../../context/UtilityContex";

const HSC = () => {
    const {title,ageCal,subtitle}=useContext(UtilityContext);
    const [student,setStudent]=useContext(StudentContext)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            
            <hr />
            <h1>HSC PAGE </h1>
            <h1>{title}</h1>
            <h1>{ageCal(2000)}</h1>
            <h1>{subtitle}</h1>
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

export default HSC;
