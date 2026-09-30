function Todo({ title, paragrah, onTodoDelete }) {
    
    return (
    
        <div className="todo">
        <h2>{ title }</h2>
        <p>{ paragrah }</p>
        <button onClick={onTodoDelete}>Delete</button> 
    </div>
    
    
    
        );
    }
    export default Todo;