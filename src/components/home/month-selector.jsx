import { useMonthState } from "../../context/month-context";
import {
  MenuItem,
  FormControl,
  Select,
  useTheme,
  Button,
  Stack,
} from "@mui/material";
import MonthsList from "../../months.json";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
export default function MonthSelector() {
  const { selectedMonth, setSelectedMonth } = useMonthState();
  const theme = useTheme();
  const months = MonthsList.months;

  const handleButtonDecrease = () => {
    if (selectedMonth === 0) {
      return;
    }
    const prev = selectedMonth - 1;
    setSelectedMonth(prev);
  };
  const handleButtonIncrease = () => {
    if (selectedMonth === months.length - 1) {
      return;
    }
    const next = selectedMonth + 1;
    setSelectedMonth(next);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(months);
    setSelectedMonth(value);
  };

  return (
    <>
      <Stack>
        {selectedMonth === 0 ? (
          <Button disableRipple disabled>
            <ArrowBackIosIcon sx={{ color: "gray" }} />
          </Button>
        ) : (
          <Button disableRipple onClick={() => handleButtonDecrease()}>
            <ArrowBackIosIcon sx={{ color: "#fff" }} />
          </Button>
        )}
      </Stack>
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
      <Stack>
        {selectedMonth === months.length - 1 ? (
          <Button disableRipple disabled>
            <ArrowForwardIosIcon sx={{ color: "gray" }} />
          </Button>
        ) : (
          <Button disableRipple onClick={() => handleButtonIncrease()}>
            <ArrowForwardIosIcon sx={{ color: "#fff" }} />
          </Button>
        )}
      </Stack>
    </>
  );
}
