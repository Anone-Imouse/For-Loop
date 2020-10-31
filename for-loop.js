function key()
//The function is being called from the button press in the HTML file.
{
for (let i=1; i<=50; i++)
//It's setting the variable (i) to 1 so that if it's less than of equal to 50, it will add one. That means it will start at one and keep adding one until it reaches 50. If you do this, don't put minus because it will cause an infinite loop aand could potentially crash your CPU. Luckily, Codepen only shows 100 console results at a time but be careful because this is not something I recommend you to do. Anyways...
{
    console.log("Hello World!");
  //Simple enough, it's just repeating this action the amount of times you make it repeat. In this case it performs the console.log function 50 times. :)
  }
}
