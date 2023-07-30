import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const InsertBtn = ({ style }) => {
  const pathname = usePathname();
  const manager = pathname.split("/")[1] ?? "manager";

  return (
    manager && (
      <Link href="/manager/insert" passHref className={style}>
        <FontAwesomeIcon icon={faAdd} fontSize={14} /> Inserir
      </Link>
    )
  );
};

export default InsertBtn;
