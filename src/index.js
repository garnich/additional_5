module.exports = function check(str, bracketsConfig) {
  var text = str.split(''); // превращаем строку str в массив

   var i, l=text.length,  char,  last, stack=[];
//  console.log(l);

var keys = Object.keys(bracketsConfig); // индексы элементов массива bracketsConfig
var value = (Object.keys(bracketsConfig).map(key=>bracketsConfig[key])); //массив из массивов элементов массива bracketsConfig
//console.log(keys);
//console.log(value);

for(i=0; i<l; i++){
   char=text[i];
for(var j = 0; j < value.length; j++) {
   if(char==value[j][0] ){
       stack.push(char); //если скобка открывающая то ее добавляем в массив stack
       last=char;
             console.log(last);
   }else if(char == value[j][1]){
       if(last){
           if((char == value[j][1] && last == value[j][0]) || (char == value[j][1] && last == value[j][0]))
           {
               stack.pop();
               last = stack.length > 0 ? stack[stack.length - 1] : undefined;
           }
       }else{
              return false;
             // console.log(value[j][0]);
            }}}}



  return true;
  // your solution
}
