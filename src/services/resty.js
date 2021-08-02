export const fetchApi = async (search, method, body) => {
  const res = await fetch(search, { 
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body 
  });
  
  const json = await res.json();
  const stringyJson = JSON.stringify(json);
  
  return stringyJson;
};
