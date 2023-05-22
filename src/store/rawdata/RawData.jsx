import { useSelector } from "react-redux";

function RawData() {
  const data = useSelector((state) => {
    if (state.query.data && state.query.data.length > 0) {
        return state.query.data.products
    } else {
        return JSON.parse(localStorage.getItem('data')).products
    }
})
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default RawData;