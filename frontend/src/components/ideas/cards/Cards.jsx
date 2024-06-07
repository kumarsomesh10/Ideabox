import React from 'react';
import './cards.css';

const Cards = ({ ideas, deleteIdea, updateIdea }) => {
  return (
    <div className="row">
      {ideas.map((idea) => (
        <div className="col-md-4 mb-4" key={idea.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{idea.title}</h5>
              <p className="card-text">{idea.body}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-primary" onClick={() => updateIdea(idea.id)}>Update</button>
                <button className="btn btn-primary" onClick={() => deleteIdea(idea.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
