import React, { useEffect, useState } from "react";
import './css/Body.css';
import { Box, Card, Heading, Image, Text } from "rebass";

function Body() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/data/data.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          mode: 'cors'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); 

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="parent">
      {jsonData.map((item, index) => (
        <div key={index} className={`div${index + 1}`}>
          <p>Name: {item.name}</p>
          <p>Title: {item.title} </p>
          <p>Symbol: {item.symbol} </p>
        </div>
      ))}
      <Box>
        <Card
          p={1}
          borderRadius={2}
          boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
          <Image src="../placeholder.svg" />
          <Box>
            <Heading as='h3'>
                Card
            </Heading>
            <Text fontSize={0}>
                Small meta text
            </Text>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Body;