let fotok =[
 {  
    photo: 'asset/1.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
  {  
    photo: 'asset/2.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
  {  
    photo: 'asset/3.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
  {  
    photo: 'asset/4.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
  {  
    photo: 'asset/5.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
  {  
    photo: 'asset/6.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
  {  
    photo: 'asset/7.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
  {  
    photo: 'asset/8.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
  {  
    photo: 'asset/9.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
  {  
    photo: 'asset/10.jpg',
    title: 'Chamonix - Mont Blanc',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum earum eaque dolorum quis vel magnam laboriosam mollitia odio est explicabo adipisci veniam nam tenetur porro, optio animi consequatur illo dolorem.'
  },
];

showPhoto(0)
fotok.forEach((obj,index)=>{
    $('.thumb').append(
        `<img id='${index}' src='${obj.photo}' alt=''>`
    )
})

$(()=>{
    $('.next').on('click',()=>{
        let src= $('#photo').attr('src')
        if(getIndex(src)<fotok.length-1)
            showPhoto(getIndex(src)+1)
    })
    $('.back').on('click',()=>{
        let src= $('#photo').attr('src')
        if(getIndex(src)>0)
            showPhoto(getIndex(src)-1)
    })

}) 

const getIndex=(photoName)=>{
    let photo=fotok.find( ({ photo }) => photo == photoName );
    return fotok.indexOf(photo)
}
function showPhoto(i){
    $('#photo').attr('src',`${fotok[i].photo}`)
    $('#title').text(`${fotok[i].title}`)
    $('#descr').text(`${fotok[i].description}`)
    return
}