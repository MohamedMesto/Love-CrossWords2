// src/components/WordsAdventure.js



// WordsAdventure.js

document.addEventListener('DOMContentLoaded', function () {
    // Grid size
    const gridSize = 40;

    // Create the crossword grid in HTML
    function createCrossword() {
        const crosswordDiv = document.getElementById('crossword');
        crosswordDiv.innerHTML = ''; // Clear the crossword first

        for (let i = 0; i < gridSize; i++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');

            for (let j = 0; j < gridSize; j++) {
                const cellDiv = document.createElement('div');
                cellDiv.classList.add('cell');
                rowDiv.appendChild(cellDiv);
            }

            crosswordDiv.appendChild(rowDiv);
        }
    }

    // Create crossword on page load
    createCrossword();
});





















// import React, { useState, useEffect } from 'react';
 

// import './WordsAdventure.css';
// import { Link } from 'react-router-dom';


// const WordsAdventure = () => {
//     return (
//       <div className="about-me">
//         <div className="profile-section">
//            <div className="bio-text">
//             <h2>Ambition Grid: The Words Adventuree</h2>
//             <p>
//                University.
//             </p>
 
//             <p className='Berlin-font'>
//               Berlin -  Mohamed Mesto  
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default WordsAdventure;