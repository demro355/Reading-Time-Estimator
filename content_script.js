function calculateReadingTime() {
    const wordsPerMinute = 250; //Based on the average user reading time Nowak (2022).
    const text = document.body.innerText;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  }
  
  function showReadingTime(readingTime) {
    const element = document.createElement('div');
    element.style.position = 'fixed';
    element.style.bottom = '10px';
    element.style.right = '10px';
    element.style.backgroundColor = '#000';
    element.style.color = '#fff';
    element.style.padding = '10px';
    element.style.fontFamily = "Arial, sans-serif";
    element.style.borderRadius = '5px';
    element.innerText = `Estimated reading time: ${readingTime} min`;
    document.body.appendChild(element);
  }
  //reading time displayed with a good contrast between text and background
  //for greater readability. 
  //Sticking with Ariel format as recommended for dyslexic readers (BDA 2023).
  //tucked away at the bottom left to inform but not distract (Pham n.d.).  



  const readingTime = calculateReadingTime();
  showReadingTime(readingTime);
  

