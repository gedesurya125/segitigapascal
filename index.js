//Function to print text
const print = (anyText) => {
  let div = document.createElement("div");
  let textNode = document.createTextNode(anyText);
  div.appendChild(textNode);
  document.getElementById("root").appendChild(div);
}

//testing the function
//print("I Gede Surya Adi Pranata");
//print("I Gede Surya Adi Pranata");

let pascalRow = [];

const pascal_function = (n) => {
  let arrToPrint = [];
  if(n === 0){
    pascalRow = ["1"];
  }else{
    pascalRow = ["1", "1 1"];
    
    for(let i = 1; i < n; i++ ){
      let newArr = [1];
      let prevStr = pascalRow[i]; //get previous string of pascalRow
      let prevArr = prevStr.split(" "); //create an array of previousString
      console.log(`prevArr : ${prevArr}`);
      
      for(let a = 0 ; a < prevArr.length-1 ; a++){
        let sum = parseInt(prevArr[a]) + parseInt(prevArr[a+1]);
        newArr.push(sum);
        console.log(`newArr : ${newArr}`);
      }
      newArr.push(1);
      let newStr = newArr.toString();
      newStr = newStr.replaceAll(",", " ");
      pascalRow.push(newStr);
      
    }
  }
  

  
  console.log(pascalRow);
  for(let i = 0 ; i < pascalRow.length ; i++){
    print(pascalRow[i]);
  }
}
//===============Run The pascal_function ==================
//you can change the parameter to any value bro :D
pascal_function(4);