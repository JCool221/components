import { useSelector } from "react-redux";
import GetSome from "../getsomebtn/GetSome";


function RawData() {
  const data = useSelector((state) => {
    if (state.query.data && state.query.data.length > 0) {
      return state.query.data.products
    } else {
      const localData = localStorage.getItem('data')
      if (localData && localData.length> 0){
        return JSON.parse(localData).products
      } else {
        return [];
      }
    }
  })

  if (data.length === 0) {
    return (
      <div>
        <p>No data available</p>
        <GetSome />
      </div>
    )
  } else
    return (
      <div>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    )
}

export default RawData;