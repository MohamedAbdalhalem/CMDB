import { useEffect, useState } from "react"

export default function useDarkMood() {
    const [isDark, setIsDark] = useState('Light-mood')
    function handleDarkMood() {
        if (localStorage.getItem('theme') === 'light-mood') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark-mood')
            setIsDark('Dark-mood')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light-mood')
            setIsDark('Light-mood')
        }
    }
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark-mood') {
            document.documentElement.classList.add('dark')
            setIsDark('Dark-mood')
        } else {
            document.documentElement.classList.remove('dark')
            setIsDark('Light-mood')
        }
    }, [])
    return {isDark, handleDarkMood}
}
