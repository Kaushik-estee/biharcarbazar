import React from 'react';

function DragAndDrop() {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedElementId = e.dataTransfer.getData('text/plain');
    const droppedElement = document.getElementById(droppedElementId);
    e.target.appendChild(droppedElement);
  };

  return (
    <div>
      <h2>Drag and Drop Example</h2>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: '2px dashed #000',
          padding: '16px',
          minHeight: '100px',
        }}
      >
        Drop Here
      </div>
      <div
        id="draggable"
        draggable="true"
        onDragStart={handleDragStart}
        style={{
          backgroundColor: 'lightblue',
          padding: '8px',
          cursor: 'grab',
        }}
      >
        Drag Me
      </div>
    </div>
  );
}

export default DragAndDrop;
