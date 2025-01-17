import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tips() {
  const [tips, setTips] = useState([]);
  const [newTip, setNewTip] = useState('');

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tips');
        setTips(response.data);
      } catch (error) {
        console.error('Error fetching tips:', error);
      }
    };

    fetchTips();
  }, []);

  const addTip = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/tips', {
        content: newTip,
      });
      setTips([...tips, response.data.tip]);
      setNewTip('');
    } catch (error) {
      console.error('Error adding tip:', error);
    }
  };

  return (
    <div className="container my-4">
      <h2>Animal Care Tips</h2>
      <ul className="list-group my-3">
        {tips.map((tip) => (
          <li key={tip._id} className="list-group-item">
            {tip.content}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new tip"
        value={newTip}
        onChange={(e) => setNewTip(e.target.value)}
        className="form-control"
      />
      <button className="btn btn-primary my-3" onClick={addTip}>
        Add Tip
      </button>
    </div>
  );
}

export default Tips;