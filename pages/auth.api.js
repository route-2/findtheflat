import axios from 'axios'
import { CHECK_PHONE, SEND_OTP_URL } from './constants'
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
        let totp = otp.toString();
        let tsession = sessionId.toString();
        let tphone = phone.toString();
        console.log(totp);
        const body = {
          phone: tphone,
          sessionId: tsession,
          otp : totp
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
    export const CheckPhone = async(phone) =>
    {
        try {
            const res = await axios.get(`${CHECK_PHONE}/+91${phone}`)
            if(res)
            {
              return res.data
            }
        }
        catch(error)
        {
            console.log(error)
        }
       

    }
   
