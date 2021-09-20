const DisplayData = ({ data }) => {
  for (const key of Object.keys(data)) {
    console.log(key + ":" + data[key]);
  }

  return <h1>Display Data</h1>;
};

export default DisplayData;
