let newToken=''
const login = async (username: string, password: string): Promise<string> => {
    try {
      const response = await fetch('https://frontend-test-api.aircall.io/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      const accessToken: string = data.access_token;  
      localStorage.setItem('accessToken',accessToken)

      return accessToken;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };


  const username: string = 'devxpert';
  const password: string = 'devxpert';
  

 

  