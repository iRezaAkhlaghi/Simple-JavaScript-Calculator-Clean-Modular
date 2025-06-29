let Buttons = document.querySelectorAll(".button"); 
let Display = document.querySelector(".display");


// currentContent stores the current expression as a string
// resetNext determines if the next input should start fresh

let currentContent = "0";
let resetNext = false;


// Update calc Display

function UpdateDisplay() {
    Display.textContent = currentContent
}

//check if  a character is an operator
function isOperator(char) {

    return ["*", "-", "+", "/", "%"].includes(char)
       
}

// Use regEx to replace symbols with js operators
function Sanitization(str) {
    return str.replace(/×/g, "*").replace(/÷/g, "/")
}


// Evaluate the expression
function CalculateExpr(expr) {
    try {
        const Result = Function(`"use strict"; return (${expr})`)();
        return Result;
    }
    catch {
        return "Error"
    }
}

// Get All Btns & handle them
Buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent.trim(); // Get button text

    // Number input
    if (!isNaN(val)) {
      if (resetNext) {
        currentContent = val;
        resetNext = false;
      } else if (currentContent === "0") {
        currentContent = val;
      } else {
        currentContent += val;
      }
    }

   // Decimal point
    else if (val === ".") {
      const parts = currentContent.split(/[\+\-\×\÷]/);
      const last  = parts[parts.length - 1];
      if (!last.includes(".")) currentContent += ".";  // Only allow one decimal per number
    }

  
    else if (["+", "-", "÷", "×", "%"].includes(val)) {
      if (isOperator(Sanitization(currentContent).slice(-1))) {
        currentContent = currentContent.slice(0, -1) + val;   // Replace last operator if it's already there
      } else {
        currentContent += val;                               
      }
      resetNext = false;
    }

    // Plus/Minus toggle
    else if (val === "+/-") {
      const parts = currentContent.match(/([^\+\-\×\÷]+)$/);
      if (parts) {
        const lastNum = parts[0];
        const index   = currentContent.lastIndexOf(lastNum);
        const newVal  = parseFloat(lastNum) * -1;
        currentContent = currentContent.substring(0, index) + newVal;
      }
    }

    // All Clear
    else if (val === "AC") {
      currentContent = "0";
      resetNext = false;
    }

   
    else if (val === "=") {
      const result = CalculateExpr(Sanitization(currentContent));
      currentContent = String(result);
      resetNext = true; // Prepare for next new input
    }

    // Update the display
    UpdateDisplay();
  });
});



