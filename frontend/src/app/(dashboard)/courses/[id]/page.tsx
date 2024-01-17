"use client";
import { useEffect } from 'react';
import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';

const ExecuteEndpointPage = () => {
  let hasAccess = false;

  const [positionsInfo, setPositionsInfo] = useState([]);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);

  useEffect(() => {
    const executeEndpoint = async () => {
      // Retrieve user from local storage
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        console.error('User not found in local storage.');
        return;
      }

      const user = JSON.parse(storedUser);
      const userId = user.id;

      try {
        // Execute the endpoint for the user and course ID 1
        const response = await fetch(`http://localhost:8080/api/users/${userId}/enrolled-courses`);
        if (response.ok) {
          console.log('Response:', response);
          try {
            const data = await response.json();
            console.log('User courses:', data);
            hasAccess = true;
          } catch (error) {
            hasAccess = false;
            console.error('User does not have access to the course.');
            window.location.href = "/stripe";
          }
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    };

    executeEndpoint();
  }, []);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/positions-for-first-course');
        if (response.ok) {
          const data = await response.json();
          setPositionsInfo(data);
          console.log('Positions:', data);
        } else {
          console.error('Error fetching positions:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred while fetching positions:', error.message);
      }
    };

    fetchPositions();
  }, []);

  const handleNextPosition = () => {
    if (currentPositionIndex < positionsInfo.length - 1) {
      setCurrentPositionIndex(currentPositionIndex + 1);
    }
  };

  const handlePrevPosition = () => {
    if (currentPositionIndex > 0) {
      setCurrentPositionIndex(currentPositionIndex - 1);
    }
  };

  return (
    <div style={{ marginTop: '50px', display: 'flex', maxWidth: '1200px', margin: 'auto' }}>
      <div style={{ flex: '1' }}>
        {/* Chessboard on the left */}
        {positionsInfo.length > 0 && (
          <Chessboard position={positionsInfo[currentPositionIndex].fen} boardWidth="600" />
        )}
      </div>
      <div style={{ flex: '1', marginLeft: '20px', width: '300px' }}>
        {/* Comment section on the right */}
        <h1><strong>Position comments:</strong></h1>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            minHeight: '500px',
            overflowY: 'auto',
            width: '100%',
          }}
        >
          {positionsInfo.length > 0 && (
            <div>
              <p> {positionsInfo[currentPositionIndex].content}</p>
            </div>
          )}
        </div>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          {/* Navigation buttons */}
          <button
            onClick={handlePrevPosition}
            disabled={currentPositionIndex === 0}
            style={{
              padding: '10px',
              backgroundColor: '#3498db',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            Previous Position
          </button>
          <button
            onClick={handleNextPosition}
            disabled={currentPositionIndex === positionsInfo.length - 1}
            style={{
              padding: '10px',
              backgroundColor: '#2ecc71',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            Next Position
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExecuteEndpointPage;
