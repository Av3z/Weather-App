import axios from "axios";

async function getIpClient() {

    const response = await axios.get('https://api.ipify.org/?format=json');
    return response.data
}
  
  
export default getIpClient;