import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const caseTypeColors = {
  cases: {
    multiplier: 80,
    option: { color: "#cc1034", fillColor: "#cc1034" },
  },
  recovered: {
    multiplier: 100,
    option: { color: "#7dd71d", fillColor: "#7dd71d" },
  },
  deaths: {
    multiplier: 200,
    option: { color: "#ff6c47", fillColor: "#ff6c47" },
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const showDataMap = (data, caseType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={caseTypeColors[caseType].option}
      radius={
        Math.sqrt(country[caseType]) * caseTypeColors[caseType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            style={{
              backgroundImage: `url(${country.countryInfo.flag})`,
            }}
            className="info-flag"
          />
          <div className="info-name">{country.country}</div>
          <div className="info-cases">
            Cases:{numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered:{numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths:{numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

export const prettyPrintStat = (stat) => {
  return stat ? `+${numeral(stat).format("0.0a")}` : "+0";
};
