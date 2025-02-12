console.log(hello);

const fetchData = async () => {
  const response = await fetch();
  const data = await response.json();
};
useEffect(() => {
  fetchData();
}, []);
