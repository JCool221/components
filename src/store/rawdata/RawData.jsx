import { useSelector } from "react-redux";

function RawData() {
  const data = useSelector((state) => state.query.data.products);

  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default RawData;