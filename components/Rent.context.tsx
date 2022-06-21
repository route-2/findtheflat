import { useContext,createContext,Context,useState,useEffect } from "react";
import axios from 'axios'
import { CHECK_PHONE, SEND_OTP_URL } from '../pages/constants.js'
import { LOGIN_OTP } from '../pages/constants.js'
import { REGISTER_LOG } from '../pages/constants.js'

interface AppContextInterface{
    phoneNo : string | null
    setPhoneNo : Function
    sendOtp : Function
    Log : Function,
    sessionid : string | null,
    otp : string | null

}

const RentalContext: Context<AppContextInterface | null>= createContext<AppContextInterface|null>(null);

interface Props{
    children : any;
}

export const RentalProvider = ({children}:Props)=>{
    const[otp,setOtp]=useState<string | null>(null);
    const[sessionid,setSessionid]=useState<string | null>(null);
    const[accesstkn,setAccesstkn]=useState<string | null>(null);
    const[phoneNo,setPhoneNo]=useState<string | null>(null);
    const[email,setEmail]=useState<string | null>(null);
    const[name,setName]=useState<string | null>(null);

    const sendOtp = async (phone) => {
        try {
          const body = {
            phone: `+917003366576`,
          }
          setPhoneNo(phone)
          const res = await axios.post(SEND_OTP_URL, body)
      
          if (res) {
            return res.data
          }
        } catch (error) {
          console.log(error)
        }
    }

    const Log = async(phone,sessionId,otp) => {
    
        try {
            let totp = otp.toString();
            let tsession = sessionId.toString();
            let tphone = phone.toString();
            setSessionid(tsession);
            setOtp(totp);
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

    return(
        <RentalContext.Provider value={{
            phoneNo,
            setPhoneNo,
            sendOtp,
            Log,
            sessionid,
            otp,
        }} >
            {children}
        </RentalContext.Provider>
    )
}

export function useRental(){
    const rentalContext= useContext(RentalContext)
    return rentalContext;
}