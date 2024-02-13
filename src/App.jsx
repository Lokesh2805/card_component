
import { useState, useEffect } from 'react';
import UserCard from './assets/UserCard';


function App() {

    
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      // Simulating fetching data from an API
      const fetchData = async () => {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        console.log(data);
                setUserData(data.results[0]);
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="flex justify-center items-center h-screen">
        {userData && <UserCard user={userData} />}
      </div>
    );
  }
  
  export default App;
    
  
