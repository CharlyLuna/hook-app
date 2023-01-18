export const Quote = ({ quote }) => {
  const { quote: message, author } = quote;
  return (
    <blockquote className='blockquote text-end'>
      <p className='mb-2'>{message}</p>
      <footer className='blockquote-footer'>{author}</footer>
    </blockquote>
  );
};
