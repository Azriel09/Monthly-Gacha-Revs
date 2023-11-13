import { useMonthState } from "../../context/month-context";
import { MenuItem, FormControl, Select, useTheme } from "@mui/material";
import MonthsList from '../../months.json'
export default function MonthSelector() {
  const { selectedMonth, setSelectedMonth } = useMonthState();
  const theme = useTheme();
  const months = MonthsList.months

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedMonth(value);
  };

  return (
    <>
      <FormControl
        sx={{
          width: "200px",
          [theme.breakpoints.down("600")]: {
            width: "150px",
          },
          [theme.breakpoints.down("450")]: {
            width: "125px",
          },
        }}
      >
        <Select value={selectedMonth} onChange={handleChange}>
          {months.map((month, i) => {
            return (
              <MenuItem value={i} key={month}>
                {month}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
