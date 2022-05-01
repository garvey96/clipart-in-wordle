# Clipart in Wordle

Draw clipart in the Wordle board.
Tool calculates and displays if clipart can be draw and on what words / days it can be.
Try it out https://garvey96.github.io/clipart-in-wordle


_________________________________________________________________________________
Repo includes processing 4.0 script (precompute.pde) used to precompile the list of words which can be used to display an image and js scripts (00000.js) with the precompile data.
Wordle board is calculated on the spot by js.
index.html contains the site
index.js contains the main code
index.css contains all style except for <div> style in index.html
words.js assigns daily words variable from Wordle and word dictionary variable which has both the word dictionary and daily words list from Wordle, as it separates words into each variable (words are present in daily words which aren’t present in the dictionary).
