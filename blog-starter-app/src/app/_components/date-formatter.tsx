import { parseISO, format, isValid } from "date-fns";

type Props = {
  dateString: string;
};


const DateFormatter = ({ dateString }: Props) => {
  console.log("---");
  console.log("DateFormatter called with dateString:", dateString);
  const date = parseISO(dateString);
  console.log("Parsed date:", date);
  if (!isValid(date)) {
    return <time dateTime={dateString}>Invalid date</time>;
  }
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default DateFormatter;
