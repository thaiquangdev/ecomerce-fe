import styles from '../style.module.scss';

const SelectBox = ({ options, getValue, type, defaultValue }) => {
  const { selectBox } = styles;
  return (
    <select
      className={selectBox}
      onChange={(e) => getValue(e.target.value, type)}
      value={defaultValue}
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
