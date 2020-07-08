// eslint-disable-next-line no-sparse-arrays
// @ts-check
import  axios from "axios";

function axiosTest () {
  let strr = [];
     axios.get("https://sneakers-api-backend.herokuapp.com/")
    .then(function(response){
          const result1 = response.data[0]
          const result2 = response.data[1]
          const result3 = response.data[2]
          const result4 = response.data[3]
         strr.push(result1,result2,result3,result4)
     })


     .catch(function(error){
            console.log(error);
        });
     return strr;
};  
      
  
const SHOP_DATA = axiosTest()

export default SHOP_DATA;
