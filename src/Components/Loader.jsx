
import { useRef,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";


const LoadingToast = ({states}) => {
	const toastId = useRef(null)

	useEffect(() => {
		if (states) {
			toastId.current = toast.loading('Please wait...', {
				isLoading: true,
				theme: "black"
			})
		}
		else {
			toast.update(toastId.current, {
				isLoading: false,
				autoClose: 600
			})
		}
	}, [states])

	return (
		<ToastContainer />
	)
}

export default LoadingToast;