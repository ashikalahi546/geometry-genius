function rectangle (){
      const rectangleBaseInput = document.getElementById('rectangle-base');
      const rectangleBase = rectangleBaseInput.value;
      const based = parseFloat(rectangleBase);
      // console.log(based) 
      

      const rectangleAreaInput  = document.getElementById('rectangle-area');
      const rectangleArea = rectangleAreaInput.value;
      const areas = parseFloat(rectangleArea);
      // console.log(areas)

      const rectangles = based * areas
     console.log(rectangles)
      const rectangleAreaSpan = document.getElementById('rectangle-span');
      rectangleAreaSpan.innerText = rectangles
}