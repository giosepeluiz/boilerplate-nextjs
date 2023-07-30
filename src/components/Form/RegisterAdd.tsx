"use client";

import React, { useReducer } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Form.module.scss";
import formatDate from "@/functions/formatDate";
import calcOvertime from "@/functions/calcOvertime";

const formReducer = (state, event) => {
  if (event.target.type === "checkbox") {
    return {
      ...state,
      [event.target.name]: event.target.checked,
    };
  }
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const initialState = {
  date: formatDate(Date.now(), "full"),
  holiday: false,
  dinner: false,
  startTime: "09:00",
  endTime: "18:00",
  totalTime: 0,
  overTime: 0,
  reason: "",
  location: "Montijo",
  team: "Duas Equipes",
};

const RegisterAdd = () => {
  const router = useRouter();
  const [formData, setFormData] = useReducer(formReducer, initialState);

  async function handleSubmit(e) {
    e.preventDefault();
    const target = e.currentTarget;
    const day = Number(target.elements.namedItem("date").value.split("-")[2]);
    const month = Number(target.elements.namedItem("date").value.split("-")[1]);
    const year = Number(target.elements.namedItem("date").value.split("-")[0]);
    const holiday = target.elements.namedItem("holiday").checked;
    const dinner = target.elements.namedItem("dinner").checked;
    const startTime = target.elements.namedItem("startTime").value;
    const endTime = target.elements.namedItem("endTime").value;
    const reason = target.elements.namedItem("reason").value;
    const location = target.elements.namedItem("location").value;
    const team = target.elements.namedItem("team").value;
    const totalTime = calcOvertime(startTime, endTime, false, holiday, dinner).toString();
    const overTime = calcOvertime(startTime, endTime, true, holiday, dinner).toString();

    try {
      const res = await fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          day,
          month,
          year,
          holiday,
          dinner,
          startTime,
          endTime,
          totalTime,
          overTime,
          location,
          reason,
          team,
        }),
      });

      if (res.ok) {
        router.push("/manager?message=added");
      } else {
        throw new Error("Falha ao inserir registro.");
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("ERRO", error);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.table}>
              <div className={styles.cell}>
                <label htmlFor="date">
                  Data:
                  <input
                    id="date"
                    type="date"
                    name="date"
                    onChange={setFormData}
                    defaultValue={formData.date}
                    required
                  />
                </label>
              </div>

              <div className={styles.cell}>
                <label htmlFor="location">
                  Local:
                  <select
                    id="location"
                    name="location"
                    onChange={setFormData}
                    defaultValue={formData.location}
                    required>
                    <optgroup>Lisboa</optgroup>
                    <option>Alenquer</option>
                    <option>Amadora</option>
                    <option>Arruda dos Vinhos</option>
                    <option>Azambuja</option>
                    <option>Cadaval</option>
                    <option>Cascais</option>
                    <option>Lisboa</option>
                    <option>Loures</option>
                    <option>Lourinhã</option>
                    <option>Mafra</option>
                    <option>Odivelas</option>
                    <option>Oeiras</option>
                    <option>Sintra</option>
                    <option>Sobral de Monte Agraço</option>
                    <option>Torres Vedras</option>
                    <option>Vila Franca de Xira</option>

                    <optgroup>Lisboa (concelho)</optgroup>
                    <option>Ajuda</option>
                    <option>Alcântara</option>
                    <option>Alto do Pina</option>
                    <option>Alvalade</option>
                    <option>Alvalade</option>
                    <option>Ameixoeira</option>
                    <option>Anjos</option>
                    <option>Areeiro</option>
                    <option>Arroios</option>
                    <option>Avenidas Novas</option>
                    <option>Beato</option>
                    <option>Belém</option>
                    <option>Benfica</option>
                    <option>Campo de Ourique</option>
                    <option>Campo Grande</option>
                    <option>Campolide</option>
                    <option>Carnide</option>
                    <option>Castelo</option>
                    <option>Charneca</option>
                    <option>Coração de Jesus</option>
                    <option>Encarnação</option>
                    <option>Estrela</option>
                    <option>Graça</option>
                    <option>Lapa</option>
                    <option>Lumiar</option>
                    <option>Madalena</option>
                    <option>Mártires</option>
                    <option>Marvila</option>
                    <option>Mercês</option>
                    <option>Misericórdia</option>
                    <option>Nossa Senhora de Fátima</option>
                    <option>Parque das Nações</option>
                    <option>Pena</option>
                    <option>Penha de França</option>
                    <option>Penha de França</option>
                    <option>Prazeres</option>
                    <option>Sacramento</option>
                    <option>Santa Catarina</option>
                    <option>Santa Clara</option>
                    <option>Santa Engrácia</option>
                    <option>Santa Isabel</option>
                    <option>Santa Justa</option>
                    <option>Santa Maria de Belém</option>
                    <option>Santa Maria dos Olivais</option>
                    <option>Santa Maria Maior</option>
                    <option>Santiago</option>
                    <option>Santo António</option>
                    <option>Santo Condestável</option>
                    <option>Santo Estevão</option>
                    <option>Santos-o-Velho</option>
                    <option>São Cristovão e São Lourenço</option>
                    <option>São Domingos de Benfica</option>
                    <option>São Francisco Xavier</option>
                    <option>São João</option>
                    <option>São João de Brito</option>
                    <option>São João de Deus</option>
                    <option>São Jorge de Arroios</option>
                    <option>São José</option>
                    <option>São Mamede</option>
                    <option>São Miguel</option>
                    <option>São Nicolau</option>
                    <option>São Paulo</option>
                    <option>São Sebastião da Pedreira</option>
                    <option>São Vicente</option>
                    <option>São Vicente de Fora</option>
                    <option>Sé</option>
                    <option>Socorro</option>

                    <optgroup>Setúbal</optgroup>
                    <option>Alcácer do Sal</option>
                    <option>Alcochete</option>
                    <option>Almada</option>
                    <option>Barreiro</option>
                    <option>Grândola</option>
                    <option>Moita</option>
                    <option>Montijo</option>
                    <option>Palmela</option>
                    <option>Santiago do Cacém</option>
                    <option>Seixal</option>
                    <option>Sesimbra</option>
                    <option>Setúbal</option>
                    <option>Sines</option>

                    <optgroup>Almada (concelho)</optgroup>
                    <option>Almada</option>
                    <option>Cacilhas</option>
                    <option>Caparica</option>
                    <option>Charneca de Caparica</option>
                    <option>Costa da Caparica</option>
                    <option>Cova da Piedade</option>
                    <option>Feijó</option>
                    <option>Laranjeiro</option>
                    <option>Pragal</option>
                    <option>Sobreda</option>
                    <option>Trafaria</option>

                    <optgroup>Barreiro (concelho)</optgroup>
                    <option>Barreiro</option>
                    <option>Coina</option>
                    <option>Lavradio</option>
                    <option>Palhais</option>
                    <option>Santo André</option>
                    <option>Santo António da Charneca</option>
                    <option>Verderena</option>

                    <optgroup>Moita (concelho)</optgroup>
                    <option>Alhos Vedros</option>
                    <option>Baixa da Banheira</option>
                    <option>Gaio-Rosário</option>
                    <option>Moita</option>
                    <option>Sarilhos Pequenos</option>
                    <option>Vale da Amoreira</option>

                    <optgroup>Montijo (concelho)</optgroup>
                    <option>Afonsoeiro</option>
                    <option>Alto-Estanqueiro-Jardia</option>
                    <option>Atalaia</option>
                    <option>Canha</option>
                    <option>Montijo</option>
                    <option>Pegões</option>
                    <option>Santo Isidro de Pegões</option>
                    <option>Sarilhos Grandes</option>

                    <optgroup>Palmela (concelho)</optgroup>
                    <option>Marateca</option>
                    <option>Palmela</option>
                    <option>Pinhal Novo</option>
                    <option>Poceirão</option>
                    <option>Quinta do Anjo</option>

                    <optgroup>Seixal (concelho)</optgroup>
                    <option>Aldeia de Paio Pires</option>
                    <option>Amora</option>
                    <option>Arrentela</option>
                    <option>Corroios</option>
                    <option>Fernão Ferro</option>
                    <option>Seixal</option>

                    <optgroup>Sesimbra (concelho)</optgroup>
                    <option>Quinta do Conde</option>
                    <option>Sesimbra (Castelo)</option>
                    <option>Sesimbra (Santiago)</option>

                    <optgroup>Setúbal (concelho)</optgroup>
                    <option>Azeitão</option>
                    <option>Gâmbia-Pontes-Alto da Guerra</option>
                    <option>Nossa Senhora da Anunciada</option>
                    <option>Sado</option>
                    <option>Santa Maria da Graça</option>
                    <option>São Julião</option>
                    <option>São Lourenço</option>
                    <option>São Simão</option>
                    <option>São Sebastião</option>

                    <optgroup>Santarém</optgroup>
                    <option>Abrantes</option>
                    <option>Alcanena</option>
                    <option>Almeirim</option>
                    <option>Alpiarça</option>
                    <option>Benavente</option>
                    <option>Cartaxo</option>
                    <option>Chamusca</option>
                    <option>Constância</option>
                    <option>Coruche</option>
                    <option>Entroncamento</option>
                    <option>Ferreira do Zêzere</option>
                    <option>Golegã</option>
                    <option>Mação</option>
                    <option>Ourém</option>
                    <option>Rio Maior</option>
                    <option>Salvaterra de Magos</option>
                    <option>Santarém</option>
                    <option>Sardoal</option>
                    <option>Tomar</option>
                    <option>Torres Novas</option>
                    <option>Vila Nova da Barquinha</option>

                    <optgroup>Portalegre</optgroup>
                    <option>Alter do Chão</option>
                    <option>Arronches</option>
                    <option>Avis</option>
                    <option>Campo Maior</option>
                    <option>Castelo de Vide</option>
                    <option>Crato</option>
                    <option>Elvas</option>
                    <option>Fronteira</option>
                    <option>Gavião</option>
                    <option>Marvão</option>
                    <option>Monforte</option>
                    <option>Nisa</option>
                    <option>Ponte de Sor</option>
                    <option>Portalegre</option>
                    <option>Sousel</option>

                    <optgroup>Castelo Branco</optgroup>
                    <option>Belmonte</option>
                    <option>Castelo Branco</option>
                    <option>Covilhã</option>
                    <option>Fundão</option>
                    <option>Idanha-a-Nova</option>
                    <option>Oleiros</option>
                    <option>Penamacor</option>
                    <option>Proença-a-Nova</option>
                    <option>Sertã</option>
                    <option>Vila de Rei</option>
                    <option>Vila Velha de Ródão</option>

                    <optgroup>Faro</optgroup>
                    <option>Albufeira</option>
                    <option>Alcoutim</option>
                    <option>Aljezur</option>
                    <option>Castro Marim</option>
                    <option>Faro</option>
                    <option>Lagoa</option>
                    <option>Lagos</option>
                    <option>Loulé</option>
                    <option>Monchique</option>
                    <option>Olhão</option>
                    <option>Portimão</option>
                    <option>São Brás de Alportel</option>
                    <option>Silves</option>
                    <option>Tavira</option>
                    <option>Vila do Bispo</option>
                    <option>Vila Real de Santo António</option>
                  </select>
                </label>
              </div>

              <div className={styles.cell}>
                <label htmlFor="holiday">
                  <input
                    id="holiday"
                    type="checkbox"
                    name="holiday"
                    onChange={setFormData}
                    defaultChecked={false}
                  />
                  Sábado ou Feriado
                </label>
              </div>
              <div className={styles.cell}>
                <label htmlFor="dinner">
                  <input
                    id="dinner"
                    type="checkbox"
                    onChange={setFormData}
                    name="dinner"
                    defaultChecked={false}
                  />
                  Almoço Trabalhado
                </label>
              </div>

              <div className={styles.cell}>
                <label htmlFor="start_time">
                  Hora de Entrada:
                  <input
                    id="startTime"
                    type="time"
                    name="startTime"
                    onChange={setFormData}
                    required
                    pattern="[0-9]{2}:[0-9]{2}"
                    placeholder="HH:MM"
                    defaultValue={formData.startTime}
                  />
                </label>
              </div>

              <div className={styles.cell}>
                <label htmlFor="end_time">
                  Hora de Saída:
                  <input
                    id="endTime"
                    type="time"
                    name="endTime"
                    onChange={setFormData}
                    required
                    pattern="[0-9]{2}:[0-9]{2}"
                    placeholder="HH:MM"
                    defaultValue={formData.endTime}
                  />
                </label>
              </div>

              <div className={styles.cell}>
                <label htmlFor="reason">
                  Última Obra:
                  <input
                    type="text"
                    id="reason"
                    defaultValue={formData.reason}
                    onChange={setFormData}
                    name="reason"
                    required
                  />
                </label>
              </div>
              <div className={styles.cell}>
                <label htmlFor="team">
                  Equipe:
                  <select
                    id="team"
                    name="team"
                    onChange={setFormData}
                    defaultValue={formData.team}
                    required>
                    <optgroup>Selecione a Equipe</optgroup>
                    <option>Duas Equipes</option>
                    <option>José e Thalisson</option>
                    <option>Ciro</option>
                    <option>Gil</option>
                    <option>Lucas</option>
                    <option>Samuel</option>
                  </select>
                </label>
              </div>
            </div>
            <div className={`${styles.cell} ${styles.buttons}`}>
              <button type="submit">Inserir</button>
              <button type="button" onClick={() => router.push("/manager")}>
                Cancelar
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default RegisterAdd;
