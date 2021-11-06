export async function getUsersListApi() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  }