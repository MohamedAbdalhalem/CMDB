import { useDispatch } from "react-redux"
import { removeToken } from "../lib/authSlice"

export default function useLogout() : () => void  {
  const dispatch = useDispatch()
  function handleLogout() {
    localStorage.removeItem('tkn')
    dispatch(removeToken())
    }
    return handleLogout
}
