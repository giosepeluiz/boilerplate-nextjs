import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ style, id }) => {
  const router = useRouter();

  const removeItem = async () => {
    // eslint-disable-next-line no-restricted-globals, no-alert
    const confirmed = confirm("Apagar registro?");

    if (confirmed) {
      await fetch(`${process.env.HOST}/data?id=${id}`, {
        method: "DELETE",
      });
      router.push("/manager?message=deleted");
    }
  };
  return (
    <button type="button" className={style} onClick={removeItem}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default RemoveBtn;
