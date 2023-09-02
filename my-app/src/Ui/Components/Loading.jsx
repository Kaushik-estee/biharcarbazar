import React from 'react';

const Loading = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className="loading">
      <img style={{width:'100px',height:'100px',marginBottom:'50px'}} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="" />
    </div>
  );
};

export default Loading;
