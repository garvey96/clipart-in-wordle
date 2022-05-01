JSONArray wordDaily1;
JSONArray wordList1;
String[] wordDaily;
String[] wordList;
int[] a = {1, 2};
String[] wordDaily2;
String[] wordList2;
void setup()
{
   wordDaily1 = loadJSONArray("wordDaily.json");
   wordList1 = loadJSONArray("wordList.json");
   wordDaily = new String[2309];
   wordList = new String[12972];
   for(int i = 0; i < wordDaily.length; i++)
   {
     wordDaily[i] = wordDaily1.getString(i);
   }
   for(int i = 0; i < wordList.length; i++)
   {
     wordList[i] = wordList1.getString(i);
   }
   
   for(int i0 = 0; i0 < 3; i0++)
   {
       map[0] = i0;
       for(int i1 = 0; i1 < 3; i1++)
       {
           map[1] = i1;
           for(int i2 = 0; i2 < 3; i2++)
           {
               map[2] = i2;
               for(int i3 = 0; i3 < 3; i3++)
               {
                   map[3] = i3;
                   for(int i4 = 0; i4 < 3; i4++)
                   {
                       map[4] = i4;
                       main();
                   }
               }
           }
       }
   }
}

void main()
{
  
  long startTime = System.nanoTime();
   wordDaily2 = new String[wordDaily.length];
   int ii = 0;
   for(int i = 0; i < wordDaily.length; i++)
   {
       if(current_filter(wordDaily[i]))
       {
         //print(ii, wordDaily[i]);
           wordDaily2[ii] = wordDaily[i];
           ii++;
         //wordDaily.filter(i => current_filter(i, [0, 1, 1, 1, 0]))
       }
   }
   String[] output = new String[ii];
   for(int i = 0; i < ii; i++)
   {
       output[i] = wordDaily2[i];
   }
   long endTime = System.nanoTime();

    long duration = (endTime - startTime);  //divide by 1000000 to get milliseconds.
    String q = join(output, "', '");
    println(q);
    String[] qq = {"const row" + join(nf(map, 1), "") + " = ['" + q + "'];"};
    saveStrings(join(nf(map, 1), "") + ".js", qq);
    print(duration / 1000000);
}

int[] map = {0, 1, 1, 1, 0};
boolean current_filter(String iii)
{
    wordList2 = new String[wordList.length];
    for(int i = 0; i < wordList.length; i++)
    {
        boolean bool = false;
        int[] a = colorOut(iii, wordList[i]);
        for(int ii = 0; ii < 5; ii++)
        {
            if(a[ii] != map[ii])
            {
                ii = 5;
                bool = true;
            }
        }
        if(bool)
        {
            continue;
        }
        return(true);
    }
    //if(wordList.filter(ii => colorOut(iii, ii).every((i, p) => i == map[p])).length > 0)

    return(false);
}
String checkWordle;
int[] colorOut(String correctWord, String word)
{
    checkWordle = correctWord;
    int[] colors = {0, 0, 0, 0, 0};
    int wordLength = word.length();
    for(int i = 0; i < wordLength; i++)
    {
        char letter = word.charAt(i);
        if(letter == correctWord.charAt(i))
        {
            colors[i] = 1;
            checkWordle = checkWordle.replaceFirst(str(letter), "");
        }
    }
    for(int i = 0; i < wordLength; i++)
    {
        String letter = str(word.charAt(i));
        if(checkWordle.contains(letter))
        {
            colors[i] = 2;
            checkWordle = checkWordle.replace(letter, "");
        }
    }
    return(colors);
}
