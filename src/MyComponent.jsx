import React, {useState} from 'react'

const MyComponent = () => {

    const[data, setData] = useState(null);
    const[error, setError] = useState(null);

    const fetchData = async () => {

        try{
            const response = await fetch('https://dummyjson.com/users');

            if(!response.ok){
                throw new Error('failed to fetch Data')
            }

            const json = await response.json();
            setData(json.users[0]);
            
        }catch(error){
            setError(error.message);
        }
    }
  return (
    <div>
        {error && <div>Error: {error}</div>}
        <button onClick={fetchData}>Fetch Data</button>

        {data && (
            <div>
                <h1>{data?.email}</h1>
                <p>{data?.password}</p>
            </div>
        )}
    </div>
  )
}

export default MyComponent