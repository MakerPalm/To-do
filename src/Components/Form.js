import React from 'react'

const Form = ({setStatus,setinputText,setTodos,todos,inputText}) => {
    const textHandler = (e)=>{
       
        setinputText(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random()*1000},
        ])
        setinputText('')
    }
    const statushandler = (e)=>{
        setStatus(e.target.value)
    }
    return (
        
        <form>
            <input value={inputText} type="text" className="todo-input" id="" onChange={textHandler} />
            <button onClick={submitHandler} type="submit" className="todo-button" > <i className="fas fa-plus-square" ></i> </button>
            <div className="select">
                <select onChange={statushandler} name="todos" className="filter-todo">
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>

            </div>
        </form>
    )
}

export default Form
