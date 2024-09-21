import React, { useState } from "react";
import "./WordsAdventure.css";

// Updated list of crossword words with descriptions
const crosswordWords = [
  // Vertical words
  { word: "perseverance", direction: "vertical", row: 0, col: 0, type: "Noun", gender: "neutral", clue: "Persistence in doing something despite difficulty or delay." },
  { word: "ambition", direction: "vertical", row: 0, col: 2, type: "Noun", gender: "neutral", clue: "A strong desire to achieve something." },
  { word: "optimism", direction: "vertical", row: 0, col: 4, type: "Noun", gender: "neutral", clue: "Hopefulness and confidence about the future." },
  { word: "patience", direction: "vertical", row: 0, col: 6, type: "Noun", gender: "neutral", clue: "The capacity to accept or tolerate delay without frustration." },
  { word: "focus", direction: "vertical", row: 0, col: 8, type: "Noun", gender: "neutral", clue: "The center of interest or activity." },
  { word: "determination", direction: "vertical", row: 0, col: 10, type: "Noun", gender: "neutral", clue: "Firmness of purpose." },
  { word: "drive", direction: "vertical", row: 0, col: 12, type: "Noun", gender: "neutral", clue: "Motivated effort or ambition." },
  { word: "resilience", direction: "vertical", row: 0, col: 14, type: "Noun", gender: "neutral", clue: "The ability to recover quickly from difficulties." },
  { word: "adaptability", direction: "vertical", row: 0, col: 16, type: "Noun", gender: "neutral", clue: "The quality of being able to adjust to new conditions." },
  { word: "dedication", direction: "vertical", row: 0, col: 18, type: "Noun", gender: "neutral", clue: "Complete devotion to a task or purpose." },
  { word: "consistency", direction: "vertical", row: 1, col: 1, type: "Noun", gender: "neutral", clue: "Conformity in the application of something." },
  { word: "discipline", direction: "vertical", row: 1, col: 3, type: "Noun", gender: "neutral", clue: "Training to act in accordance with rules." },
  { word: "commitment", direction: "vertical", row: 1, col: 5, type: "Noun", gender: "neutral", clue: "A pledge or promise to do something." },
  { word: "foresight", direction: "vertical", row: 1, col: 7, type: "Noun", gender: "neutral", clue: "The ability to predict or plan for the future." },
  { word: "passion", direction: "vertical", row: 1, col: 9, type: "Noun", gender: "neutral", clue: "A strong feeling of enthusiasm or excitement." },
  { word: "vision", direction: "vertical", row: 1, col: 11, type: "Noun", gender: "neutral", clue: "The ability to think about or plan the future." },
  { word: "confidence", direction: "vertical", row: 1, col: 13, type: "Noun", gender: "neutral", clue: "A belief in one's abilities." },
  { word: "endurance", direction: "vertical", row: 1, col: 15, type: "Noun", gender: "neutral", clue: "The ability to endure difficult situations." },
  { word: "motivation", direction: "vertical", row: 1, col: 17, type: "Noun", gender: "neutral", clue: "The desire to do something." },
  { word: "concentration", direction: "vertical", row: 1, col: 19, type: "Noun", gender: "neutral", clue: "The action or power of focusing one's attention." },

  // Horizontal words
  { word: "creativity", direction: "horizontal", row: 2, col: 0, type: "Noun", gender: "neutral", clue: "The use of imagination or original ideas to create something." },
  { word: "hope", direction: "horizontal", row: 4, col: 0, type: "Noun", gender: "neutral", clue: "A feeling of expectation and desire for a certain thing to happen." },
  { word: "imagination", direction: "horizontal", row: 6, col: 0, type: "Noun", gender: "neutral", clue: "The ability to form ideas and concepts in the mind." },
  { word: "courage", direction: "horizontal", row: 8, col: 0, type: "Noun", gender: "neutral", clue: "The ability to do something that frightens one." },
  { word: "innovation", direction: "horizontal", row: 10, col: 0, type: "Noun", gender: "neutral", clue: "The process of creating new methods or ideas." },
  { word: "inspiration", direction: "horizontal", row: 12, col: 0, type: "Noun", gender: "neutral", clue: "The process of being mentally stimulated to create something." },
  { word: "strategy", direction: "horizontal", row: 14, col: 0, type: "Noun", gender: "neutral", clue: "A plan of action designed to achieve a goal." },
  { word: "resourcefulness", direction: "horizontal", row: 16, col: 0, type: "Noun", gender: "neutral", clue: "The ability to find quick and clever ways to solve problems." },
  { word: "positivity", direction: "horizontal", row: 18, col: 0, type: "Noun", gender: "neutral", clue: "The practice of being or thinking positively." },
  { word: "mindset", direction: "horizontal", row: 20, col: 0, type: "Noun", gender: "neutral", clue: "The established set of attitudes held by someone." },
  { word: "confidence", direction: "horizontal", row: 22, col: 0, type: "Noun", gender: "neutral", clue: "A belief in oneself and one's abilities." },
  { word: "wisdom", direction: "horizontal", row: 24, col: 0, type: "Noun", gender: "neutral", clue: "The quality of having knowledge and good judgment." },
  { word: "clarity", direction: "horizontal", row: 26, col: 0, type: "Noun", gender: "neutral", clue: "The quality of being clear in thought or communication." },
  { word: "aspiration", direction: "horizontal", row: 28, col: 0, type: "Noun", gender: "neutral", clue: "A hope or ambition to achieve something." },
  { word: "tenacity", direction: "horizontal", row: 30, col: 0, type: "Noun", gender: "neutral", clue: "The quality of being determined and persistent." },
  { word: "willpower", direction: "horizontal", row: 32, col: 0, type: "Noun", gender: "neutral", clue: "The ability to control one's actions and impulses." },
  { word: "achievement", direction: "horizontal", row: 34, col: 0, type: "Noun", gender: "neutral", clue: "Something accomplished, especially by effort." },
  { word: "optimism", direction: "horizontal", row: 36, col: 0, type: "Noun", gender: "neutral", clue: "Hopefulness and confidence about the future." },
  { word: "purpose", direction: "horizontal", row: 38, col: 0, type: "Noun", gender: "neutral", clue: "The reason for which something is done or created." },
  { word: "fulfillment", direction: "horizontal", row: 40, col: 0, type: "Noun", gender: "neutral", clue: "The achievement of something desired or promised." }
];

const gridSize = 40;
const generateEmptyGrid = () => Array(gridSize).fill().map(() => Array(gridSize).fill(""));

const WordsAdventure = () => {
  const [grid, setGrid] = useState(generateEmptyGrid());

  // Function to place words in the grid
  const placeWordsInGrid = () => {
    const newGrid = generateEmptyGrid();

    crosswordWords.forEach((wordObj, index) => {
      const { word, direction, row, col } = wordObj;
      for (let i = 0; i < word.length; i++) {
        if (direction === "horizontal") {
          newGrid[row][col + i] = word[i];
        } else if (direction === "vertical") {
          newGrid[row + i][col] = word[i];
        }
      }
    });

    setGrid(newGrid);
  };

  // Call this function when the component mounts
  React.useEffect(() => {
    placeWordsInGrid();
  }, []);

  return (
    <div className="crossword-container">
      <h1>WordsAdventure: Ambition, Perseverance, and Creativity Crossword</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="cell">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="clue-section">
        <h2>Clues</h2>
        {crosswordWords.map((wordObj, index) => (
          <div key={index} className="clue">
            <strong>{index + 1}. {wordObj.direction === "horizontal" ? "Across" : "Down"}:</strong> {wordObj.clue}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordsAdventure;
