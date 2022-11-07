import React, { useEffect, useState } from "react";
// import axios from "axios";
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
import { Button, Container } from "@chakra-ui/react";

// const data = [
//   {
//     name: "USD",
//     rate: 400,
//   },
//   {
//     name: "AED",
//     rate: 300,
//   },
//   {
//     name: "INR",
//     rate: 200,
//   },
//   {
//     name: "CHF",
//     rate: 278,
//   },
//   {
//     name: "CAD",
//     rate: 189,
//   },
//   {
//     name: "JPY",
//     rate: 239,
//   },
// ];

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

    // const res = await axios.get(
    //   "https://api.exchangeratesapi.io/v1/latest",
    //   { headers: { apikey: "pdQ1xlVok7k73SRUwTVfFCZJGjjKl8x6" } }
    // );
    // return res.data;
  }

  useEffect(() => {
    getCurrencies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLog() {
    setIsLoggedIn(false);
  }
  return (
    <Container centerContent>
      <div>
        {rates.length ? (
          <BarChart
            width={600}
            height={500}
            data={rates}
            margin={{
              top: 50,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="rate" fill="teal" />
          </BarChart>
        ) : (
          "Loading..."
        )}
        <Footer time={moment().fromNow(timestamp)} />
        <Button m={8} ml={250} colorScheme={"teal"} variant="solid" onClick={handleLog}>
          Log Out
        </Button>
      </div>
    </Container>
  );
}

export default Barchart;
