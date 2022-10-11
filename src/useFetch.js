import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, SetIsPending] = useState(true);
    const [error, SetError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
              .then(res => {
                  if(!res.ok) {
                      throw Error('Could not fetch the data for the resource')
                  }
                  return res.json();
              })
              .then(data => {
                  setData(data);
                  SetIsPending(false);
                  SetError(null);
              })
              .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    SetError(err.message);
                    SetIsPending(false);
                    setData(null);
                }
              })
          }, 1000);
          return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;