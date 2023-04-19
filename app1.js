
import express from 'express';

  const app = express();
  const arr = ["Bassant", "Ahmed", "Mohmed"];
  const fun = (req , res) => {
  let result= "<ul>";

    for(let i=0 ; i<arr.length ; i++){
 
        const x = arr[i];
        result += "<li><h1>" + x + "</h1></li>";

   }
  result += "</ul>";
  res.send(result);

};
  app.get('/students',fun);
  app.listen(7000); 
