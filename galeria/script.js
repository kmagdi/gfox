let fotok =[
 {  
    photo: 'asset/1.jpg',
    title: 'Chamonix - Mont Blanc1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {  
    photo: 'asset/2.jpg',
    title: 'Chamonix - Mont Blanc2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {  
    photo: 'asset/3.jpg',
    title: 'Chamonix - Mont Blanc3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {  
    photo: 'asset/4.jpg',
    title: 'Chamonix - Mont Blanc4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {  
    photo: 'asset/5.jpg',
    title: 'Chamonix - Mont Blanc5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {  
    photo: 'asset/6.jpg',
    title: 'Chamonix - Mont Blanc6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {  
    photo: 'asset/7.jpg',
    title: 'Chamonix - Mont Blanc7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {  
    photo: 'asset/8.jpg',
    title: 'Chamonix - Mont Blanc8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {  
    photo: 'asset/9.jpg',
    title: 'Chamonix - Mont Blanc9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {  
    photo: 'asset/10.jpg',
    title: 'Chamonix - Mont Blanc10',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
];

showPhoto(0)
fotok.forEach((obj,index)=>{
    $('.thumb').append(
        `<div class='thumbnail'><img id='${index}' src='${obj.photo}'><div class='title'>${obj.title}</div></div>`
    )

   

    $(`#${index}`).on('click',()=>{
     showPhoto(index)
     removeBorders()
     $(`#${index}`).css('border','3px solid #6b22f3')
    })
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
const removeBorders=()=>{
  fotok.forEach((o,i)=>{
    $(`#${i}`).css('border','1px solid #b088f9')
  })
}