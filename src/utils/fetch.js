const baseUrl = process.env.REACT_APP_API_URL;

const simpleFetch = async(api) => {

  const response = await fetch(`${baseUrl}${api}`);
  return response.json();
};

export {
  simpleFetch
}

