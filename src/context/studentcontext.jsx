import React from "react";

export const Studentlistcontext = React.createContext({
    form: {},
    setform:() => false,
    studentlist:[],
    setstudentlist:() => false
});
