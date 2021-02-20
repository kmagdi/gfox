const addTodoItem=()=>{
    let todo=$('#todo').val()
    if(todo.length>0){
        $('ul').append(`<div class='todo-item'>
                            <div><li>${todo}</li></div>
                            <div class='btns'>
                                <div class='del'></div>
                                <div class='ok'></div>
                            </div>
                        </div>`)
    }
    $('#todo').val('')
 }

const deleteTodoItem=(item)=>{
    //console.log('törlés')
    $(item).fadeOut('slow',()=>{
        $(item).parent().parent().remove()
    })
}

const okTodoItem=(e)=>{
    console.log('athuzás')
    $(e.target).parent().siblings().toggleClass("strike")
    $(e.target).toggleClass("change")
  
}
//felíratkozás az eseményekre:
$(()=>{
    $('#add').on('click',(e)=>{
        e.preventDefault()
        addTodoItem()
    })

    //delegálás:
    $('#todo-list').on('click','.del',(e)=>{
        deleteTodoItem(e.target)
    })

    $(document).on('click','.ok',(e)=>{
        okTodoItem(e)
    })


})