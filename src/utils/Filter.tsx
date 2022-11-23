import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ReactNode } from "react";

//all types for our props
interface Props {
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  filterType: string;
}

const Filter: React.FC<Props> = ({ setFilterType, filterType }: Props) => {
  const handleChange = (event: SelectChangeEvent<any>, child: ReactNode) => {
    setFilterType(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Filter</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={filterType}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={"Completed"}>Completed</MenuItem>
        <MenuItem value={"Uncompleted"}>Uncompleted</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
