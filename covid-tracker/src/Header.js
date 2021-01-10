import React from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";

const Header = ({ country, onCountryChange, countries }) => {
  return (
    <>
      <h1>Covid-19 Tracker</h1>
      <FormControl className="header_dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide" selected>
            Worldwide
          </MenuItem>
          {countries.map((country) => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Header;
