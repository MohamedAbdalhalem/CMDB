import { Button, FloatingLabel,Alert,Spinner   } from "flowbite-react";
import useRegister from "../Hooks/useRegister";

export default function Register() {
  const {handleRegister,handleSubmit,isError,isSuccess,islouding,register,errors} = useRegister()
  return (
    <div className="px-5 pb-5 pt-20">
      <form className="flex max-w-xl mx-auto flex-col gap-4 " onSubmit={handleSubmit(handleRegister)}>
      
        <h2 className="text-gray-800 dark:text-white text-4xl mb-4 text-center font-bold">Register</h2>

        {isSuccess && <Alert color="info">
      <span className="font-medium">Account Created Succsessfully</span>
        </Alert>}

        {isError && <Alert color="failure">
      <span className="font-medium">Email is Already in use</span>
        </Alert>}
        
        <FloatingLabel
          {...register('email', {
          required: 'required',
          pattern: {value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , message: 'invalid email'}
        }
          )}  variant="filled" label="Email" />
        {errors.email && <p className="text-red-600">{ errors.email.message }</p>}

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
