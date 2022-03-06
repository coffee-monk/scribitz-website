import { useEffect } from "react"

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && e.path[0] !== ref.current) {
      callback()
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  })
}

export default useOutsideClick
