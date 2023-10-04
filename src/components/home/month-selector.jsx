import { useMonthState } from "../../context/month-context";
import { MenuItem, FormControl, Select, useTheme } from "@mui/material";

export default function MonthSelector() {
  const { selectedMonth, setSelectedMonth } = useMonthState();
  const theme = useTheme();
  const months = [
    "August 2023",
    "July 2023",
    "June 2023",
    "May 2023",
    "April 2023",
    "March 2023",
    "February 2023",
  ];

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
