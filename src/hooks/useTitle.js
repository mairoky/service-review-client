import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - VISA Consultancy Services`;
    }, [title])
};

export default useTitle;