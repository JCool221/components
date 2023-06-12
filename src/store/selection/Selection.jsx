import { useSelector } from "react-redux";
import './selection.css'


function Selection() {
    const data = useSelector((state) => state.selection)

    if (!data.selection) {
        return <div>Loading...</div>
    }
    
    return (
        <div className='item'>
            <h1>this item is {data.selection.title}</h1>
            <img src={data.selection.thumbnail} />
            
            <h1>${data.selection.price}</h1>
            <h2 className="desc">{data.selection.description    }</h2>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}

export default Selection;
