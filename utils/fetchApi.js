import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async(url) => {
const {data} = await axios.get((url),  {


    headers: {
            'X-RapidAPI-Key': 'e6ae211d12mshdbca6e58dab60b2p10b36ajsnae7a60af0a2b',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }


}      
)



}