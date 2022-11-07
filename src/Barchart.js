import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Footer from "./Footer";
import { Button, Container, SkeletonText } from "@chakra-ui/react";

function Barchart({ setIsLoggedIn }) {
  const [rates, setRates] = useState([]);
  //   const [baseCur, setBaseCur] = useState("USD");
  const [timestamp, setTimestamp] = useState(0);

  function currencyRateTransform(currData) {
    const arr = [];

    Object.keys(currData).map((cur) =>
      arr.push({ name: cur, rate: currData[cur] })
    );
    return arr;
  }
  const getEncodedSymbols = (str) => str.replaceAll(",", "%2C");

  async function getCurrencies() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "pdQ1xlVok7k73SRUwTVfFCZJGjjKl8x6");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=${getEncodedSymbols(
        "AED,GBP,USD,CHF,CAD"
      )}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setRates(currencyRateTransform(result.rates));
        // setBaseCur(data.base);
        setTimestamp(result.timestamp);
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getCurrencies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLog() {
    setIsLoggedIn(false);
  }
  return (
    <Container  width={[1, 1 / 2, 1 / 4]} centerContent>
      <div>
        {rates.length ? (
          <Container bg={"blue.100"} mt={50} ml={[5,15,30]} width={[300,400,600]} height={[200,300,400]} centerContent >
          <BarChart
            width={500}
            height={400}
            data={rates}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="rate" fill="teal" />
          </BarChart>
          </Container>
        ) : (
          <Container mt={50}>
            <SkeletonText noOfLines={15} spacing={7} />
          </Container>
        )}
        <Footer time={moment().fromNow(timestamp)} />
        <Button
          m={[4,6,8]}
          ml={[100,150,250]}
          colorScheme={"teal"}
          variant="solid"
          onClick={handleLog}
        >
          Log Out
        </Button>
      </div>
    </Container>
  );
}

export default Barchart;
