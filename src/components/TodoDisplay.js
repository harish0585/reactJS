export const TodoDisplay = ({title, id, status, handleToggle, handleDelete}) => {
    return (
        <>
        <div>{title}</div>
        <div>{`${status}`}</div>
        <br/>
        <button onClick={() => handleToggle(id)}>Toggle</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
        </>
    )
}