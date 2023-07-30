"use client";

import styles from "@/styles/Table.module.scss";
import calcOvertime from "@/functions/calcOvertime";
import { usePathname } from "next/navigation";

import sumOvertime from "@/functions/calcTotalOvertime";
import RemoveBtn from "./Buttons/RemoveBtn";
import Editbtn from "./Buttons/EditBtn";
import DateSelector from "./DateSelector";
import InsertBtn from "./Buttons/InsertBtn";

const getRegisters = async () => {
  try {
    const response = await fetch("http://localhost:3000/data", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Falha ao obter dados!");
    }
    return response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error("Erro:", error);
  }
};

const Head = () => {
  const pathname = usePathname();
  const manager = pathname.split("/")[1] ?? "manager";

  return (
    <thead>
      <tr className={`${styles.row} ${styles.head}`}>
        <th className={`${styles.cell} ${styles["small-cell"]} ${styles.emphasis}`}>Dia</th>
        <th className={`${styles.cell} ${styles.emphasis}`}>Início</th>
        <th className={`${styles.cell} ${styles.emphasis}`}>Final</th>
        {manager && <th className={`${styles.cell} ${styles.emphasis}`}>Total</th>}
        <th className={`${styles.cell} ${styles.emphasis}`}>Extra</th>
        <th className={`${styles.cell} ${styles["big-cell"]} ${styles.emphasis}`}>Última Obra</th>
        <th className={`${styles.cell} ${styles["medium-cell"]} ${styles.emphasis}`}>
          Localização
        </th>
        <th className={`${styles.cell} ${styles["medium-cell"]} ${styles.emphasis}`}>Equipe</th>
        {manager && (
          <th className={`${styles.cell} ${styles["small-cell"]} ${styles.emphasis}`}>Ação</th>
        )}
      </tr>
    </thead>
  );
};

const Row = ({ _id, day, holiday, dinner, startTime, endTime, location, reason, team }) => {
  const pathname = usePathname();
  const manager = pathname.split("/")[1] ?? "manager";

  return (
    <tr className={styles.row}>
      <td className={`${styles.cell} ${styles["small-cell"]}`}>{day}</td>
      <td className={styles.cell}>{startTime}</td>
      <td className={styles.cell}>{endTime}</td>
      {manager && <td className={styles.cell}>{calcOvertime(startTime, endTime)}</td>}
      <td className={styles.cell}>{calcOvertime(startTime, endTime, true, holiday, dinner)}</td>
      <td className={`${styles.cell} ${styles["big-cell"]}`}>{reason}</td>
      <td className={`${styles.cell} ${styles["medium-cell"]}`}>{location}</td>
      <td className={`${styles.cell} ${styles["medium-cell"]}`}>{team}</td>
      {manager && (
        <td className={`${styles.cell} ${styles["small-cell"]}`}>
          <RemoveBtn style={styles["button-icon"]} id={_id} />
          <Editbtn style={styles["button-icon"]} id={_id} />
        </td>
      )}
    </tr>
  );
};

const Table = async ({ message, reference }) => {
  const { registers } = await getRegisters();
  const total = [];

  return (
    <>
      {message && <div className={styles.message}>{message}</div>}
      <div className={styles.filter}>
        <div className={styles.reference}>
          Referência:
          <DateSelector reference={reference} />
        </div>

        <InsertBtn style={styles.button} />
      </div>
      <table className={styles.table}>
        <Head />
        <tbody>
          {registers.map((e) => {
            if (
              e.month === Number(reference.split("-")[1]) &&
              e.year === Number(reference.split("-")[0])
            ) {
              total.push(e.overTime);
              return <Row key={e.id} {...e} />;
            }
            return null;
          })}
        </tbody>
      </table>
      <div className={styles["total-time"]}>
        Total de Horas: <strong>{sumOvertime(total)}</strong>
      </div>
    </>
  );
};

export default Table;
