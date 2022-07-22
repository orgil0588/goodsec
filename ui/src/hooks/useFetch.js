import { useState, useEffect } from "react";
import axios from 'axios'
const useFetch = (url) => {
      const [data, setData] = useState(null);
      useEffect(() => {
        axios(url)
          .then((res) =>  setData(res.data.data))
          .catch((err) => console.log(err));
      }, [url]);
      return [data];
};
export default useFetch;