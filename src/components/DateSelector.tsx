import { usePathname, useRouter } from "next/navigation";

const DateSelector = ({ reference }) => {
  const router = useRouter();
  const pathname = usePathname();
  const manager = pathname.split("/")[1] === "manager" ? `/manager` : "";
  const changeDate = (e) => {
    const year = e.target.value.split("-")[0];
    const month = e.target.value.split("-")[1];
    router.push(`${manager}/${month}/${year}`);
  };
  return <input type="month" id="ref" name="ref" value={reference} onChange={changeDate} />;
};

export default DateSelector;
