import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const Editbtn = ({ style, id }) => {
  const router = useRouter();

  const editItem = () => {
    router.push(`/manager/edit/${id}`);
  };
  return (
    <button type="button" className={style} onClick={editItem}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
  );
};

export default Editbtn;
