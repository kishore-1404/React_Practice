function List(props){
    const category = props.category;
    const items = props.items;

    const listItems = items.map((item) => 
            <li key={item.id}>
                {item.name} - {item.calories} calories
            </li>
        );
    return(
        <>
        <h2 className="list-category">{category}</h2>
        <ol className="list-items">
            {listItems}
        </ol>
        </>
    );
}
export default List; 