import axios from 'axios'
import { SEND_OTP_URL } from './constants'
import { LOGIN_OTP } from './constants'
import { REGISTER_LOG } from './constants'

export const sendOtp = async (phone) => {
  try {
    const body = {
      phone: `+91${phone}`,
    }

    const res = await axios.post(SEND_OTP_URL, body)

    if (res) {
      return res.data
    }
  } catch (error) {
    console.log(error)
  }
}
export const Log = async(phone,sessionId,otp) => {
    
    try {
        
        const body = {
          phone: `+91${phone}`,
          sessionId,otp
        }
       
        
      
    
        const res = await axios.post(LOGIN_OTP,body)
    
        if (res) 
        {
          return res.data
        }
      } 
      catch (error) {
        console.log(error)
      }
    
}

export const Register = async(phone,sessionId,otp,fullName,email) => {
    try{

 const body ={
    phone: `+91${phone}`,
    sessionId,otp,fullName,email
 }
 const res = await axios.post(REGISTER_LOG,body)


if(res)
{
    return res.data
}}
catch(error)
{
    console.log(error)

}



    }
