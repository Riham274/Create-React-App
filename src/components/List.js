
function List () {
    const arr = [{id: 1, name:'html'},{id: 2, name:'css'}, {id: 3, name:'js'}];
    const li = arr.map((el, index) => {
        return <li key={el.id}>{el.name}</li>
    })
    console.log(li);

    return(
        <ul>
            {li}
        </ul>
    );
}

export default List;