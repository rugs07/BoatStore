import { useEffect,useState } from "react";

import {fetchdatafromAPI} from "../utils/api";

const useFetch = (endpoint) => {
    const [data,setData] = useState();

    useEffect(() => {
        makeapicall();
    },[endpoint])

    const makeapicall = async () => {
        const res = await fetchdatafromAPI(endpoint);
        setData(res);
    }

    return {data};
}

export default useFetch;