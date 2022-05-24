/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function Grafica1() {
  return (
    <div>
      <h1 className="items-justify-center">Grafica1</h1>
      <iframe
        className="w-full h-full"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROTxB__Qy90_0nFS0MGAu4gWpp386rv0yPLNoNckj8oXPuiPeyXRDA_aw0tGqiSgXnWzVMYbXGQ0Yg/pubchart?oid=15190151"
        format="interactive"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default Grafica1;
