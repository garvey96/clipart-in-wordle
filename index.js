const wordSolves = {
    "00000": row00000,
    "00001": row00001,
    "00002": row00002,
    "00010": row00010,
    "00011": row00011,
    "00012": row00012,
    "00020": row00020,
    "00021": row00021,
    "00022": row00022,
    "00100": row00100,
    "00101": row00101,
    "00102": row00102,
    "00110": row00110,
    "00111": row00111,
    "00112": row00112,
    "00120": row00120,
    "00121": row00121,
    "00122": row00122,
    "00200": row00200,
    "00201": row00201,
    "00202": row00202,
    "00210": row00210,
    "00211": row00211,
    "00212": row00212,
    "00220": row00220,
    "00221": row00221,
    "00222": row00222,
    "01000": row01000,
    "01001": row01001,
    "01002": row01002,
    "01010": row01010,
    "01011": row01011,
    "01012": row01012,
    "01020": row01020,
    "01021": row01021,
    "01022": row01022,
    "01100": row01100,
    "01101": row01101,
    "01102": row01102,
    "01110": row01110,
    "01111": row01111,
    "01112": row01112,
    "01120": row01120,
    "01121": row01121,
    "01122": row01122,
    "01200": row01200,
    "01201": row01201,
    "01202": row01202,
    "01210": row01210,
    "01211": row01211,
    "01212": row01212,
    "01220": row01220,
    "01221": row01221,
    "01222": row01222,
    "02000": row02000,
    "02001": row02001,
    "02002": row02002,
    "02010": row02010,
    "02011": row02011,
    "02012": row02012,
    "02020": row02020,
    "02021": row02021,
    "02022": row02022,
    "02100": row02100,
    "02101": row02101,
    "02102": row02102,
    "02110": row02110,
    "02111": row02111,
    "02112": row02112,
    "02120": row02120,
    "02121": row02121,
    "02122": row02122,
    "02200": row02200,
    "02201": row02201,
    "02202": row02202,
    "02210": row02210,
    "02211": row02211,
    "02212": row02212,
    "02220": row02220,
    "02221": row02221,
    "02222": row02222,
    "10000": row10000,
    "10001": row10001,
    "10002": row10002,
    "10010": row10010,
    "10011": row10011,
    "10012": row10012,
    "10020": row10020,
    "10021": row10021,
    "10022": row10022,
    "10100": row10100,
    "10101": row10101,
    "10102": row10102,
    "10110": row10110,
    "10111": row10111,
    "10112": row10112,
    "10120": row10120,
    "10121": row10121,
    "10122": row10122,
    "10200": row10200,
    "10201": row10201,
    "10202": row10202,
    "10210": row10210,
    "10211": row10211,
    "10212": row10212,
    "10220": row10220,
    "10221": row10221,
    "10222": row10222,
    "11000": row11000,
    "11001": row11001,
    "11002": row11002,
    "11010": row11010,
    "11011": row11011,
    "11012": row11012,
    "11020": row11020,
    "11021": row11021,
    "11022": row11022,
    "11100": row11100,
    "11101": row11101,
    "11102": row11102,
    "11110": row11110,
    "11111": row11111,
    "11112": row11112,
    "11120": row11120,
    "11121": row11121,
    "11122": row11122,
    "11200": row11200,
    "11201": row11201,
    "11202": row11202,
    "11210": row11210,
    "11211": row11211,
    "11212": row11212,
    "11220": row11220,
    "11221": row11221,
    "11222": row11222,
    "12000": row12000,
    "12001": row12001,
    "12002": row12002,
    "12010": row12010,
    "12011": row12011,
    "12012": row12012,
    "12020": row12020,
    "12021": row12021,
    "12022": row12022,
    "12100": row12100,
    "12101": row12101,
    "12102": row12102,
    "12110": row12110,
    "12111": row12111,
    "12112": row12112,
    "12120": row12120,
    "12121": row12121,
    "12122": row12122,
    "12200": row12200,
    "12201": row12201,
    "12202": row12202,
    "12210": row12210,
    "12211": row12211,
    "12212": row12212,
    "12220": row12220,
    "12221": row12221,
    "12222": row12222,
    "20000": row20000,
    "20001": row20001,
    "20002": row20002,
    "20010": row20010,
    "20011": row20011,
    "20012": row20012,
    "20020": row20020,
    "20021": row20021,
    "20022": row20022,
    "20100": row20100,
    "20101": row20101,
    "20102": row20102,
    "20110": row20110,
    "20111": row20111,
    "20112": row20112,
    "20120": row20120,
    "20121": row20121,
    "20122": row20122,
    "20200": row20200,
    "20201": row20201,
    "20202": row20202,
    "20210": row20210,
    "20211": row20211,
    "20212": row20212,
    "20220": row20220,
    "20221": row20221,
    "20222": row20222,
    "21000": row21000,
    "21001": row21001,
    "21002": row21002,
    "21010": row21010,
    "21011": row21011,
    "21012": row21012,
    "21020": row21020,
    "21021": row21021,
    "21022": row21022,
    "21100": row21100,
    "21101": row21101,
    "21102": row21102,
    "21110": row21110,
    "21111": row21111,
    "21112": row21112,
    "21120": row21120,
    "21121": row21121,
    "21122": row21122,
    "21200": row21200,
    "21201": row21201,
    "21202": row21202,
    "21210": row21210,
    "21211": row21211,
    "21212": row21212,
    "21220": row21220,
    "21221": row21221,
    "21222": row21222,
    "22000": row22000,
    "22001": row22001,
    "22002": row22002,
    "22010": row22010,
    "22011": row22011,
    "22012": row22012,
    "22020": row22020,
    "22021": row22021,
    "22022": row22022,
    "22100": row22100,
    "22101": row22101,
    "22102": row22102,
    "22110": row22110,
    "22111": row22111,
    "22112": row22112,
    "22120": row22120,
    "22121": row22121,
    "22122": row22122,
    "22200": row22200,
    "22201": row22201,
    "22202": row22202,
    "22210": row22210,
    "22211": row22211,
    "22212": row22212,
    "22220": row22220,
    "22221": row22221,
    "22222": row22222
}

var currentMap = [
    ["grey", "green", "green", "green", "grey"],
    ["green", "green", "yellow", "yellow", "grey"],
    ["green", "green", "green", "green", "grey"],
    ["grey", "green", "green", "green", "grey"],
    ["grey", "green", "grey", "green", "grey"],
    ["green", "green", "green", "green", "green"]
];

var rowWordsIndex = [
    null,
    null,
    null,
    null,
    null
];
var rowWords = [];

var results = [];
var colorSelection = "grey";

function findWords()
{
    var viableWordList = document.getElementById("word-list");
    var wordLength = document.getElementById("word-length");
    var length = 0;
    let b = currentMap.map(i => i.map(ii => ii == "grey" ? 0 : (ii == "green" ? 1 : 2)));
    b = b.map(i => i.join(""));
    var c = wordSolves[b[0]];
    b.forEach((e, i) => {
        if(i != 0)
        {
            const d = wordSolves[b[i]];
            c = c.filter(i => d.includes(i))
        }
    });
    var a = "";
    c.forEach(i => {
        length++;
        a += `<button onclick="loadWord('${i}')">${i}</button>`;
    });
    wordLength.innerText = length.toString();
    viableWordList.innerHTML = a;
    //location.reload(true);
}

function loadWord(a)
{
    word = a;
    document.getElementById("wordIndex").innerText = wordDaily.indexOf(word);
    document.getElementById("word").value = word;
    currentMap.forEach((e, i) => {
        getBoardRow(i);
        console.log(i)
    });
}

function loadBoard(map)
{
    map.forEach((e, i) => {
        e.forEach((ee, ii) => {
            var key = document.getElementById(`guessRow-${i}-tile-${ii}`);
            key.onclick = function(){if(map[i][ii] != colorSelection){ map[i][ii] = colorSelection; loadBoard(currentMap); if(word){getBoardRow(i);}}}
            key.classList.add("tile");
            key.classList.remove("grey-overlay");
            key.classList.remove("yellow-overlay");
            key.classList.remove("green-overlay");
            if(currentMap[i][ii] == "?")
            {
                key.classList.add(["grey", "yellow", "green"][Math.floor(Math.random() * 3)] + "-overlay");
            }
            else
            {
                key.classList.add(currentMap[i][ii] + "-overlay");
            }
        });
    });
}
var word = "";
function getBoardRow(rowIndex)
{
    result = findRowSolve(word, currentMap[rowIndex].map(ii => ii == "grey" ? 0 : (ii == "green" ? 1 : 2)));
    rowWords[rowIndex] = result;
    if(result.length <= 1)
    {
        document.getElementsByClassName(`button-icon-decrement`)[rowIndex].style.visibility = "hidden";
        document.getElementsByClassName(`button-icon-increment`)[rowIndex].style.visibility = "hidden";
    }
    else
    {
        document.getElementsByClassName(`button-icon-decrement`)[rowIndex].style.visibility = "visible";
        document.getElementsByClassName(`button-icon-increment`)[rowIndex].style.visibility = "visible";
    }
    e = result.length > 0 ? result[Math.floor(Math.random()*result.length)] : "     ";
    console.log(e)
    for (var i = 0; i < e.length; i++) {
        var key = document.getElementById(`guessRow-${rowIndex}-tile-${i}`);
        key.innerText = e[i];
    };
}

function findRowSolve(word, map)
{
    return wordList.filter(i => filterr(word, i, map))
}

function increment(rowIndex, incrementation)
{
    if(rowWordsIndex[rowIndex] == null)
    {
        rowWordsIndex[rowIndex] = 0;
    }
    else
    {
        let a = rowWordsIndex[rowIndex] + incrementation;
        if(a == -1)
        {
            a = rowWords[rowIndex].length -1;
        }
        else if(a == rowWords[rowIndex].length)
        {
            a = 0;
        }
        rowWordsIndex[rowIndex] = a;
        console.log(a, rowWords[rowIndex][a]);
    }
    e = rowWords[rowIndex][rowWordsIndex[rowIndex]];
    for (var i = 0; i < e.length; i++) {
        var key = document.getElementById(`guessRow-${rowIndex}-tile-${i}`);
        key.innerText = e[i];
    };
}

window.onload = function(){
    document.getElementById("word").addEventListener('change', (event) =>{
        let a = document.getElementById("word").value;
        if(a.length == 5)
        {
            word = a;
            document.getElementById("wordIndex").innerText = wordDaily.indexOf(word);
            currentMap.forEach((e, i) => {
                getBoardRow(i);
            });
        }
    });
    loadBoard(currentMap);
    //setInterval(function(){
    //    loadBoard(currentMap);
    //}, 500);
}

function findSolve1(word)
{
    var possibleWord = []
    possibleWord[0] = wordList.filter(i => word.green(i, 1, 4) && word.grey(i, 1, 3));
    possibleWord[1] = wordList.filter(i => word.green(i, 0, 1) && word.yellow(i, 2, 4));
    possibleWord[2] = wordList.filter(i => word.green(i, 0, 4) && word.grey(i, 0, 3));
    possibleWord[3] = wordList.filter(i => word.green(i, 1, 4) && word.grey(i, 1, 3));
    possibleWord[4] = wordList.filter(i => i[1] == word[1] && i[3] == word[3]);
    possibleWord[5] = wordList.filter(i => i == word);
    return(possibleWord)
}

function isMogus(word)
{
    var possibleWord = []
    possibleWord[0] = wordList.filter(i => i[1] == word[1] && i[2] == word[2] && i[3] == word[3] && !word.includes(i[0]) && !word.includes(i[4]));
    possibleWord[1] = wordList.filter(i => i[0] == word[0] && i[1] == word[1] && (word[2] != i[2] && word.includes(i[2])) && (word[3] != i[3] && word.includes(i[3])) && (word[4] != i[4] && word.includes(i[4])));
    possibleWord[2] = wordList.filter(i => i[0] == word[0] && i[1] == word[1] && i[2] == word[2] && i[3] == word[3] && !word.includes(i[4]));
    possibleWord[3] = wordList.filter(i => i[1] == word[1] && i[2] == word[2] && i[3] == word[3] && !word.includes(i[0]) && !word.includes(i[4]));
    possibleWord[4] = wordList.filter(i => i[1] == word[1] && i[3] == word[3] && !word.includes(i[0]) && !word.includes(i[2]) && !word.includes(i[4]));
    possibleWord[5] = wordList.filter(i => i == word);
    return(possibleWord)
}

function filterr(correctWord, word, map)
{
    checkWordle = correctWord
    colors = [0, 0, 0, 0, 0];
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if(letter == correctWord[i])
        {
            colors[i] = 1;
            checkWordle = checkWordle.replace(letter, "");
        }
    }
    for (let i = 0; i < word.length; i++) {
        const letter = word[i]
        if(checkWordle.includes(letter))
        {
            colors[i] = 2;
            checkWordle = checkWordle.replace(letter, "")
        }
    };
    return map.every((i, p) => i == colors[p]);
}

function colorOut(correctWord, word)
{
    checkWordle = correctWord
    colors = [0, 0, 0, 0, 0];
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if(letter == correctWord[i])
        {
            colors[i] = 1;
            checkWordle = checkWordle.replace(letter, "");
        }
    }
    for (let i = 0; i < word.length; i++) {
        const letter = word[i]
        if(checkWordle.includes(letter))
        {
            colors[i] = 2
            checkWordle = checkWordle.replace(letter, "")
        }
    };
    return colors;
}

function findSolve(word, map)
{
    //setTimeout({
    console.log(word)
    var possibleWord = []
    map.forEach((rowMap, index) => {
        possibleWord[index] = wordList.filter(i => filterr(word, i, rowMap))
    });
    // possibleWord[0] = wordList.filter(i => i[1] == word[1] && i[2] == word[2] && i[3] == word[3] && !word.includes(i[0]) && !word.includes(i[4]));
    // possibleWord[1] = wordList.filter(i => i[0] == word[0] && i[1] == word[1] && (word[2] != i[2] && word.includes(i[2])) && (word[3] != i[3] && word.includes(i[3])) && (word[4] != i[4] && word.includes(i[4])));
    // possibleWord[2] = wordList.filter(i => i[0] == word[0] && i[1] == word[1] && i[2] == word[2] && i[3] == word[3] && !word.includes(i[4]));
    // possibleWord[3] = wordList.filter(i => i[1] == word[1] && i[2] == word[2] && i[3] == word[3] && !word.includes(i[0]) && !word.includes(i[4]));
    // possibleWord[4] = wordList.filter(i => i[1] == word[1] && i[3] == word[3] && !word.includes(i[0]) && !word.includes(i[2]) && !word.includes(i[4]));
    // possibleWord[5] = wordList.filter(i => i == word);
    return(possibleWord)
}

function amogusable(word, map)
{
    const a = findSolve(word, map);
    const b = a.every(i => i.length > 0);
    
    if(b)
    {
        console.log(a, wordDaily.indexOf(word));
    }
    return b
}

function amogusable1(word)
{
    const a = findSolve1(word);
    const b = a.every(i => i.length > 0);
    
    if(b)
    {
        console.log(a);
    }
    return b
}

function colorSelect(color)
{
    document.getElementById("grey").style.fontWeight = "normal";
    document.getElementById("yellow").style.fontWeight = "normal";
    document.getElementById("green").style.fontWeight = "normal";
    //document.getElementById("?").style.fontWeight = "normal";

    colorSelection = color;
    document.getElementById(color).style.fontWeight = "bold";
}

String.prototype.yellow = function(p, i, ii)
{
    if(ii)
    {
        p = p.slice(i, ii);
    }
    else
    {
        p = p[i];
    }
    return(this[i] != p && this.includes(p));
}

String.prototype.green = function(p, i, ii)
{
    if(ii)
    {
        p = p.slice(i, ii);
        return(p == this.slice(i, ii));
    }
    else
    {
        p = p[i];
        return(p == this[i]);
    }
}

String.prototype.grey = function(p, i, ii)
{
    if(ii)
    {
        return(p.nSlice(i, ii) != this.nSlice(i, ii));
    }
    else
    {
        return(p.nSlice(i, i) != this.nSlice(i, i));
    }
    
}

String.prototype.nSlice = function(i, ii)
{
    return(Array.prototype.filter.call(this, (e, p) => p < i || p > ii).join(""))
}