import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getQuotes = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
      const res = await fetch(url);
      const data = await res.json();

      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (err) {
      setState({
        data: null,
        isLoading: false,
        hasError: err,
      });
    }
  };

  useEffect(() => {
    getQuotes();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    getQuotes,
  };
};
