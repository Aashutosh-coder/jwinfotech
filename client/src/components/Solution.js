import React from 'react';
import './Solution.css';
const Solution = ({name,desc}) => {
  return (
    <div>
          <div class="card">
      <p class="card-title">{name}
      </p>
      <p class="small-desc">
            {desc}
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>
    </div>
  )
}

export default Solution
