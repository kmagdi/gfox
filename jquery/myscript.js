let str=$("h1").text()
console.log(str)
$("h1").text("megváltoztatva a cím")

console.log("eloszoe:"+$(".sarga").css("background-color"))

$(".sarga").css("background-color","red")

console.log("modositva:"+$(".sarga").css("background-color"))

$(".p1").html("az alma <b>egészséges</b>")

//hozzáfűzés:
$("ul").append('<li>sárga</li>')

//törlés:
$(".sarga").remove()

$("li:last-of-type").remove()

//css class változtatás
$("li:last-of-type").toggleClass('sarga')/*ha rajta van leveszi ha meg nincs rajta felteszi, mint egy kapcsoló*/

//kattintás:
$("#add").click(()=>{
    $("ul").append("<li>újabb elem</li>")
})
/*
$("#torles").click(()=>{
    console.log("torles")
    $("li:last-of-type").remove()
})*/
//vagy:
$("#torles").on('click',()=>{
    console.log("torles")
    $("li:last-of-type").remove()
})

let szinek=["red","orange","brown","blue","yellow"]
szinek.forEach(e=>{
    $(".container").append(`<div class='box ${e}'>${e}</div>`) 
    $(".container div:last-of-type").css("background-color",e)
    $(".gombok").append(`<button id='${e}'>kapcsolo-${e}</button>`)
})

szinek.forEach(e=>{
    $(`#${e}`).on('click',()=>{
        $(`.${e}`).fadeToggle(200)
    })
})
//fadeIn -megjeleníti
//fadeOut -eltünteti

$("#add").on("mouseover",()=>{
    $('#add').css('color','red')
})
$("#add").on("mouseleave",()=>{
    $('#add').css('color','black')
})

$('#kapcsolo').on('click',()=>{
    $('#add').toggle()
})

//this :
$('button').on('click',(e)=>{
    let id=e.target.id
    console.log('id='+id)
})
