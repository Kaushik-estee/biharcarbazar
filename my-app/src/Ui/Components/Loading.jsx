import React from 'react';

const Loading = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'500px'}} className="loading">
      <img  style={{height:'80px',width:'80px'}} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="" />
    </div>
  );
};

export default Loading;
