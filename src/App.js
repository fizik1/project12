import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/main.css";

function App() {
  const url = "https://dummyjson.com/users";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.users);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="head"></div>
      <div className="items">
        {data.map((item, index) => (
          <div className="item">
            <div className="img">
              <img src={item.image} alt={item.image} />
            </div>
            <div className="col1">
              <p><b>{item.firstName + ' '+ item.lastName}</b> / {item.company.name}</p>
            </div>
            <div className="col2">{item.email}</div>
            <div className="col3">{item.gender}</div>
            <div className="col4">{item.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
