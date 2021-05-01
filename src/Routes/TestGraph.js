import { useEffect, useState } from "react";
 
function TestGraph() {
 
  const [inputyear, setInputYear] = useState('');
  const [year, setYear] = useState('');
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    let url = 'api/smallpox/';
    if (year) {
      url += `/${year}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setPosts(Array.isArray(res) ? res : [res]);
      });
  }, [year]);
 
  // handle click evnet of the button
  const handleButtonClick = () => {
    setYear(inputyear);
  }
 
  return (
    <div className="App">
      <div className="form">
        <h3>Fetch API data using useEffect - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
        <input
          type="text"
          value={inputyear}
          onChange={e => setInputYear(e.target.value)}
          style={{ marginRight: 10 }} />
        <input
          type="button"
          value={inputyear ? 'Fetch' : 'Fetch All'}
          onClick={handleButtonClick} />
      </div>
      <ul>
        {posts.map(x => <li>{`Id: ${x._id} | Title: ${x.Country}`}</li>)}
      </ul>
    </div>
  );
}
 
export default TestGraph;