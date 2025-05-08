import { useState, useEffect } from 'react';
import { Button } from '@shared/ui';
// Import the testIntegration function
import { testIntegration } from '@shared/utils';

function App() {
  // Add this line to test integration
  const integrationResult = testIntegration();
  console.log('Utils integration in client:', integrationResult);

  const [greeting, setGreeting] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch greeting from backend
    setLoading(true);

    // Fetch greeting
    fetch('http://localhost:3000/')
      .then((response) => response.text())
      .then((data) => {
        console.log('Received greeting:', data);
        setGreeting(data);
      })
      .catch((error) => console.error('Error fetching greeting:', error))
      .finally(() => setLoading(false));

    // Fetch status
    fetch('http://localhost:3000/api/status')
      .then((response) => response.json())
      .then((data) => {
        console.log('Received status:', data);
        setStatus(data);
      })
      .catch((error) => console.error('Error fetching status:', error));
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold bg-indigo-500 text-white p-2">
        Backend Integration Demo
      </h1>
      <Button label="Click me" />
      {loading ? (
        <p>Loading data from server...</p>
      ) : (
        <>
          <div>
            <h2>Greeting Message:</h2>
            <p>{greeting}</p>
          </div>

          {status && (
            <div>
              <h2>Server Status:</h2>
              <pre>{JSON.stringify(status, null, 2)}</pre>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
