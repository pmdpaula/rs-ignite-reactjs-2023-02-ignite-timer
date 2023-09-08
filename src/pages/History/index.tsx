import { HistoryContainer, HistoryList, Status } from './styles';

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>
                <Status statusColor="green">Concluído</Status>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>12:00</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 2</td>
              <td>25 minutos</td>
              <td>12:00</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 3</td>
              <td>25 minutos</td>
              <td>12:00</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 3</td>
              <td>25 minutos</td>
              <td>12:00</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 3</td>
              <td>25 minutos</td>
              <td>12:00</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>

            <tr>
              <td>Projeto 4</td>
              <td>25 minutos</td>
              <td>12:00</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
};
