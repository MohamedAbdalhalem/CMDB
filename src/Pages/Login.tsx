import { Button, FloatingLabel,Alert,Spinner   } from "flowbite-react";
import uselogin from "../Hooks/useLogin";

export default function Login() {
    const {register,handleSubmit,handleLogin,isError,isSuccess,islouding,errors} = uselogin()
  return (
    <div className="px-5 pb-5 pt-20">
          <form className="flex max-w-xl mx-auto flex-col gap-4 " onSubmit={handleSubmit(handleLogin)} >
          
            <h2 className="text-gray-800 dark:text-white text-4xl mb-4 text-center font-bold">Login</h2>
    
            {isSuccess && <Alert color="info">
          <span className="font-medium">Welcome</span>
            </Alert>}
    
            {isError && <Alert color="failure">
          <span className="font-medium">Incorrect Email or Password</span>
            </Alert>}
            
              <FloatingLabel
                  {...register('email', {
          required: 'required',
          pattern: {value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , message: 'invalid email'}
        }
          )}
                variant="filled" label="Email" />
            {errors.email && <p className="text-red-600 text-sm">{ errors.email.message }</p>}
    
            <FloatingLabel type="password"
              {...register('password',
            {
              required: 'required',
              minLength: { value: 6, message: 'minLength is 6 char' }
            })}
              className="mt-4" variant="filled" label="Password" />
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
            
              <Button className="cursor-pointer mt-4 font-bold" type="submit" color='alternative'>
              {islouding ? <>
              <Spinner aria-label="Alternate spinner button example" size="sm" />
            <span className="pl-3">Loading...</span></> : 'Submit'}
          </Button>
        </form>
        </div>
  )
}
