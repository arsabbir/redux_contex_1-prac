import { useContext, useState } from "react";
import "./App.css";
import Result from "./components/Result/Result";
import Teacher from "./components/Teacher/Teacher";
import StudentContext from "./context/StudentContext";
import UtilityContext from "./context/UtilityContex";

function App() {
  const [student, setStudent] = useState([
    { name: " AR Sabbir", clas: "Ten", age: 10 },
    { name: "Nasrin Khatun", clas: "Ten", age: 7 },
  ]);

  return (
    <>
      <UtilityContext.Provider
        value={{
          title: "we love redux",
          subtitle: "I am the Boss",
          ageCal: (year) => {
            return 2023 - year;
          },
        }}
      >
        <StudentContext.Provider value={[student, setStudent]}>
          <Result />
          <Teacher />
        </StudentContext.Provider>
      </UtilityContext.Provider>
    </>
  );
}

export default App;
