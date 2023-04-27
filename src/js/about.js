window.onload = function(){
      const startYear = 2013;
      const startMonth = 8; // Note: JavaScript counts months starting from 0
      const startDate = new Date(startYear, startMonth, 1); // Set the start date to September 1, 2013
      const currentDate = new Date();
      const diffInMs = currentDate - startDate;
      const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.2425)); // Account for leap years and round down
      document.getElementById("schoolAge").innerHTML = diffInYears;
};