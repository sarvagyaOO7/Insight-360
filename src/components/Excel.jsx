import React, { useState, useEffect } from 'react';

const Excel = ({filePath}) => {
  const [csvData, setCSVData] = useState([]);

  useEffect(() => {
    // Specify the CSV file path
    

    // Fetch the CSV file
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = data.split('\n').map((line) => line.split(','));
        setCSVData(parsedData);
      })
      .catch((error) => {
        console.error('Error fetching the CSV file:', error);
      });
  }, []);

  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      {csvData.length > 0 && (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              {csvData[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {csvData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td style={{ border: '1px solid white', padding: '8px' }} key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Excel;
