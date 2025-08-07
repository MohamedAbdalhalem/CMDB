import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form"
import { useState } from "react";
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setToken } from '../lib/authSlice';
import { registerData } from '../Types/RegisterFormData.type';

export default function useRegister() {
 const { register, handleSubmit, formState : {errors} } = useForm<registerData>()
  const [isSuccess , setIsSuccess] = useState(false)
  const [isError , setIsError] = useState(false)
  const [islouding, setIslouding] = useState(false)
  const navigateToHome = useNavigate()
  const dispatch = useDispatch()
  async function handleRegister(data: registerData) {
      setIslouding(true)
        try {
          const res = await createUserWithEmailAndPassword(auth, data.email, data.password)
          setIsSuccess(true)
          setIslouding(false)
          localStorage.setItem('tkn', (await res.user.getIdTokenResult()).token)
          setTimeout(() => {
            setIsSuccess(false)
            navigateToHome('/')
          }, 2000);
          dispatch(setToken((await res.user.getIdTokenResult()).token))
            console.log((await res.user.getIdTokenResult()).token)
        } catch (error) {
          setIsError(true)
          setIslouding(false)
          setTimeout(() => {
            setIsError(false)
          }, 2000);
            console.log(error)
        }
    }
    return {register,handleSubmit,isSuccess,isError,islouding,handleRegister,errors}
}
