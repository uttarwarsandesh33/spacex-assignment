import { useState, useEffect } from "react";
import FilterSelect from "./filter-select";
const years = [
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020,
];
export default function Filter(props) {
  const { onChange = () => {} } = props;
  const [filter, setFilter] = useState({
    launch_year: "",
    launch_success: "",
    land_success: "",
  });

  useEffect(() => {
    onChange(filter);
  }, [filter]);

  return (
    <div className="card p-2">
      <h3>Filters</h3>
      <div id="launch-year">
        <div className="filter-heading text-center">Launch Year</div>
        <div className="row text-center p-3">
          {years.map((val) => (
            <div className="col-6" key={val}>
              <FilterSelect
                filterName={"year"}
                displayValue={val}
                selectedValue={filter.launch_year}
                onChange={(value) => {
                  setFilter({
                    ...filter,
                    launch_year: value,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div id="launch-success">
        <div className="filter-heading text-center">Successful Launch</div>
        <div className="row text-center p-3">
          {[true, false].map((val) => (
            <div className="col-6" key={val}>
              <FilterSelect
                filterName={"launch"}
                displayValue={val}
                selectedValue={filter.launch_success}
                onChange={(value) => {
                  setFilter({
                    ...filter,
                    launch_success: value,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div id="launch-landing">
        <div className="filter-heading text-center">Successful Landing</div>
        <div className="row text-center p-3">
          {[true, false].map((val) => (
            <div className="col-6" key={val}>
              <FilterSelect
                filterName={"land"}
                displayValue={val}
                selectedValue={filter.land_success}
                onChange={(value) => {
                  setFilter({
                    ...filter,
                    land_success: value,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
