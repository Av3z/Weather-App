import React, {useState} from "react";
import Card from "./components/Card.jsx";
import fetchData from "./services/api";
import initialData from "./helpers/initialData";
import getIp from "./services/getIp"

function App() {

  const [data, setData] = useState(initialData);
  const [ip, setIp] = useState("142.250.78.238");

  getIp().then((data) =>{
    setIp(data.ip)
  })

  fetchData(ip).then((response) =>{
      setData(response);
  })

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <Card data={data}/>
    </div>
    );

}

export default App;
