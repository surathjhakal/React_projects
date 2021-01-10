import { Card, CardContent } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import numeral from "numeral";
import "./App.css";
import Header from "./Header";
import InfoBox from "./InfoBox";
import LineGraph from "./LineGraph";
import Map from "./Map";
import Table from "./Table";
import { prettyPrintStat, sortData } from "./util";
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [caseType, setCaseType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    const url =
      countryCode === "worldwide"
        ? `https://disease.sh/v3/covid-19/all`
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        console.log(data);
        let mapObj =
          countryCode === "worldwide"
            ? { lat: 34.80746, lng: -40.4796 }
            : { lat: data.countryInfo.lat, lng: data.countryInfo.long };
        setMapCenter(mapObj);
        setMapZoom(5);
      });
  };
  // console.log(countryInfo);
  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <Header
            onCountryChange={onCountryChange}
            country={country}
            countries={countries}
          />
        </div>
        <div className="app_stats">
          <InfoBox
            active={caseType === "cases"}
            color="#cc1034"
            onClick={(e) => setCaseType("cases")}
            title="Coronavirus Cases"
            total={prettyPrintStat(countryInfo.cases)}
            cases={numeral(countryInfo.todayCases).format("0,0")}
          />
          <InfoBox
            active={caseType === "recovered"}
            color="#7dd71d"
            onClick={(e) => setCaseType("recovered")}
            title="Recovered"
            total={prettyPrintStat(countryInfo.recovered)}
            cases={numeral(countryInfo.todayRecovered).format("0,0")}
          />
          <InfoBox
            active={caseType === "deaths"}
            color="#ff6c47"
            onClick={(e) => setCaseType("deaths")}
            title="Deaths"
            total={prettyPrintStat(countryInfo.deaths)}
            cases={numeral(countryInfo.todayDeaths).format("0,0")}
          />
        </div>
        <div className="app_map">
          <Map
            caseType={caseType}
            countries={mapCountries}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live Cases</h3>
          <Table countries={tableData} />
          <h3>
            {countryInfo.country ? countryInfo.country : "worldwide"} new{" "}
            {caseType}
          </h3>
          <LineGraph
            caseType={caseType}
            className="app_graph"
            country={country}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
