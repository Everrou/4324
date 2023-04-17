let n1='Ivan'
let n2='Max'

const names = []

console.log(names.length)
console.log(names)
console.log(names[2])

$('#add').click(f1)
$('#search').click(f2)
$('#del').click(f3)
$('#dell').click(f4)
$('#delll').click(f5)

function f1(){
    let name=$('#in1').val()
    names.push(name)//добовляет в конец списка
    //.unsgift //добовляет в начала списка
    $('#out').text(names)
}

function f2(){
    let name=$('#in1').val()
    let index=names.indexOf(name) //находит номер элемента
    //.unsgift
    if (index===-1){ // элем не найден
        $('#out').text('не найден')
    }
    else {
        $('#out').text(name + 'под номером' + index)
    }
    }



function f3(){
    let name=$('#in1').val()
    let index=names.indexOf(name)
    if (index===-1){
    $('#out').text('не найден')
}
   else{
       names.splice(index,1)
$('#out').text(names)
    }
}

function f4()  {
    let name=$('#in1').val()
    let index=names.shift(name)
    if (index===1){
    $('#out').text('не найден')
}
   else{
       names.splice(1)
$('#out').text(names)
    }
}














