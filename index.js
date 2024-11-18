function calcWordFrequencies(words) {
   // Split the input string into an array of words
   const wordArray = words.split(" ");

   // Create a map to store word frequencies
   const frequencyMap = new Map();

   // Iterate over each word in the array
   for (const word of wordArray) {
      // Update the frequency in the map
      frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
   }

   // Output the words and their frequencies
   frequencyMap.forEach((frequency, word) => {
      console.log(`${word} ${frequency}`);
   });
}

// Testing the function
console.log("Testing calcWordFrequencies()...");
calcWordFrequencies("hey hi Mark hi mark");

// Do NOT remove the following line:
export default calcWordFrequencies;

