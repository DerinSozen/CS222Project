document.addEventListener('DOMContentLoaded', function () {
    const scraperForm = document.getElementById('scraper-form'); 
    const resultsContainer = document.getElementById('results-container');
    const loadingSpinner = document.getElementById("loadingSpinner"); 
    const scrapeDiv = document.getElementById("scrape-div")

    scraperForm.addEventListener('submit', function (e) {
      e.preventDefault(); 

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const url = tabs[0].url;
        
        const asinMatch = url.match(/\/(dp|product)\/(\w{10})/);
  
        if (asinMatch && asinMatch.length >= 3) {
          const asin = asinMatch[2];
  
          loadingSpinner.style.display = "inline-block";
          scrapeDiv.remove()

          fetch('http://127.0.0.1:5000/process', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ asin })
          })
            .then(response => {
              
              if (!response.ok) {
                loadingSpinner.style.display = "none"
                throw new Error('Network response was not ok');
              }
              
              return response.json();
            })
            .then(data => {
              // Create an HTML table
              loadingSpinner.style.display = "none";
              const table = createTable(data);
  
              // Append the table to the results container
              resultsContainer.innerHTML = ''; // Clear previous content
              resultsContainer.appendChild(table);
              scraperForm.remove();
            })
            .catch(error => {
              console.error('Error:', error);
              // Handle errors as needed
              document.getElementById("message").textContent = "Server down. Please try again later.";
            });
        } else {
          document.getElementById("message").textContent = "ASIN not found. Please try again on an Amazon product page.";
        }
      });
    });
  

    function createTable(data) {
        const table = document.createElement('table');
        table.className = 'result-table'; // Optional: Add CSS class for styling
        // Create table header row
        const headerRow = table.insertRow(0);
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const headerCell = headerRow.insertCell();
                headerCell.textContent = formatHeader(key);
            }
        }

        // Create table data row
        const dataRow = table.insertRow(1);
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const dataCell = dataRow.insertCell();
                const cellContent = document.createElement('div');
                cellContent.textContent = formatValue(key, data[key]);
                cellContent.style.verticalAlign = 'top'; // Align cell content to the top
                dataCell.appendChild(cellContent);
            }
        }

        return table;
    }

    function formatHeader(header) {
        // Format header text (e.g., "product_title" to "Product Title")
        return header
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    function formatValue(key, value) {
        if (key === 'rating') {
            // Format rating as "x out of 5"
            return `${value} out of 5`;
        } else if (key === 'cost') {
            // Format cost as currency
            return `$${parseFloat(value).toFixed(2)}`;
        }
        return value;
    }
  });
  