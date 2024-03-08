export default function MovieList({ results }) {
  //   console.log('results', results);
  return (
    <ul>
      {/* <li>result.backdrop_path</li>
      <li>{results[0].backdrop_path}</li>
      <li>{results[1].backdrop_path}</li>
      <li>{results[2].backdrop_path}</li> */}

      {results.map(result => {
        <li key={result.id}>
          <p>{result.backdrop_path}</p>
        </li>;
      })}
    </ul>
  );
}
