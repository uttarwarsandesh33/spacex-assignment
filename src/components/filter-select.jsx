export default function FilterSelect(props) {
  const { displayValue = "", selectedValue, filterName } = props;
  return (
    <>
      <input
        id={`filterCheck${filterName}${displayValue}`}
        type="checkbox"
        value={selectedValue === displayValue}
        onChange={(e) => {
          let value = displayValue;
          if (!e.target.checked && selectedValue === displayValue) {
            value = "";
          }
          props.onChange(value);
        }}
        style={{ display: "none" }}
      />
      <label
        htmlFor={`filterCheck${filterName}${displayValue}`}
        className={`filter ${
          selectedValue !== displayValue ? "filter-label" : "filter-select"
        }`}
      >
        {String(displayValue).toUpperCase()}
      </label>
    </>
  );
}
