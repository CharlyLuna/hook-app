import React from "react";
import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote, Quote } from "../03-examples/";

export const Layout = () => {
  const { counter, increment, reset } = useCounter(1);

  const { data, isLoading, hasError, getQuotes } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const quotes = data ?? [];

  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        quotes.map((quote, index) => <Quote key={index} quote={quote} />)
      )}

      <button onClick={() => reset()} className='btn btn-dark'>
        Reset quotes
      </button>
      <button
        onClick={() => increment()}
        disabled={isLoading}
        className='btn btn-dark'>
        Get +1 quotes
      </button>
      <button
        onClick={() => getQuotes()}
        disabled={isLoading}
        className='btn btn-dark'>
        Re-roll quote/s
      </button>
    </>
  );
};
