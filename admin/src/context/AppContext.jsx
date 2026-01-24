import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currency = "$"
    const calculateAge = (dob) =>{
       const today = new Date();
       const birthDate = new Date(dob);

       let age = today.getFullYear() -birthDate.getFullYear()
       return age
      
    }

      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 const slotDateFormat = (slotDate) => {
  if (!slotDate) return "";

  let day, month, year;

  // ✅ Case 1: "21_01_2026"
  if (typeof slotDate === "string" && slotDate.includes("_")) {
    [day, month, year] = slotDate.split("_");
  } 
  // ✅ Case 2: Date object किंवा ISO string
  else {
    const dateObj = new Date(slotDate);
    if (isNaN(dateObj)) return "";

    day = dateObj.getDate();
    month = dateObj.getMonth() + 1;
    year = dateObj.getFullYear();
  }

  return `${day} ${months[Number(month) - 1]} ${year}`;
};



     const value = {
           calculateAge
           ,slotDateFormat,
           currency
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider