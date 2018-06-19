/*// input
var arr = new Array (10);
for (var i = 0; i < arr.length; i++){
	arr[i] = new Array(10);
}

//console.log (arr)

for (var i = 0; i < arr.length; i++){
	for (var j = 0; j < arr.length; j++){
		arr[i][j] = 0;
	}
}
console.log(arr);
//document.write = data

for (var i = 0; i < arr.length; i++){
	for (var j = 0; j < arr.length; j++){
			arr[i][j] = i+j;
		document.write(arr[i][j]);
	}
	document.write('<br>');
}*/
function matrixArray(rows,columns){
  var arr = new Array();
  for(var i=0; i<rows; i++){
    arr[i] = new Array();
    for(var j=0; j<columns; j++){
      arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
  }
  return arr;
}
var myMatrix = matrixArray(3,3);

// console.log (arr);

function pascalTriangle(){
    var arr =[];
    var i, j;
    var size=prompt('Введите размер',size);
    //alert('Размер '+size+' штук =)')
 
    for(i = 1; i <= size ; i++)
    {
        arr[i] = 1;
    }
 
    arr[0] = 0;
    for(j = 1; j <= size; j++)
    {
        for(i = j; i >= 1 ; i--)
        {
            document.write (arr[i-1]);
            arr[i] = arr[i-1];
        }
        document.write('<br>');
 
    }
 
}
pascalTriangle();

// Создать многомерный массив
var table = new Array(10);		// В таблице 10 строк

for(var i = 0; i < table.length; i++)
	table[i] = new Array(10);		// В каждой строке 10 столбцов

// Инициализировать массив и вывести на консоль
for(var row = 0, str = ''; row < table.length; row++) {
	for(var col = 0; col < table[row].length; col++) {
		table[row][col] = (row+1)+(col+1);
		str += table[row][col] + '  ';
	}
	console.log(str + '\n');
	str = '';
}

