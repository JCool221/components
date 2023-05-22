import { useSelector } from "react-redux";


function Selection() {
    const data = useSelector((state) => {
        return state.selection
    })
    return (
        <div>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
}

export default Selection;
