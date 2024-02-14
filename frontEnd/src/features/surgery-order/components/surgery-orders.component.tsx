import React from 'react'
import { HistoryList, Toogle } from './surgery-orders.styles'
import { dateISOStringToUTCDate } from '../../../utils/mappers/date.mappers'

export function SurgeryOrdersList({
  surgeryOrders,
  procedures,
  rooms,
  hospitals,
}) {
  return (
    <HistoryList>
      <table id="ordersList">
        <thead>
          <tr>
            <th>Código</th>
            <th>Sala</th>
            <th>Procedimento</th>
            <th>Doutor</th>
            <th>Paciente</th>
            <th>Hospital</th>
            <th>Data da Cirurgia</th>
            <th>Data de Criação</th>
            <th>Observações</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {surgeryOrders.map((surgeryOrders, index) => (
            <tr key={index}>
              <td>{surgeryOrders.id}</td>
              <td>{rooms[surgeryOrders.roomId - 1].name}</td>
              <td>{procedures[surgeryOrders.proceduresId - 1].name}</td>
              <td>{surgeryOrders.doctor}</td>
              <td>{surgeryOrders.patient}</td>
              <td>{hospitals[surgeryOrders.hospitalId - 1].name}</td>
              <td>{dateISOStringToUTCDate(surgeryOrders.surgeryDate)}</td>
              <td>{new Date(surgeryOrders.created_at).toLocaleDateString()}</td>
              <td>{surgeryOrders.observations}</td>
              <td>
                <Toogle
                  type="button"
                  className="edit"
                  aria-label="edit"
                  // onClick={() => handleLoadSurgeryOrder(surgeryOrders)}
                >
                  <span aria-hidden="true">EDITAR</span>
                </Toogle>
              </td>
              <td>
                <Toogle
                  type="button"
                  className="delete"
                  aria-label="delete"
                  // onClick={() => handleDeleteSurgeryOrder(surgeryOrders)}
                >
                  <span aria-hidden="true">APAGAR</span>
                </Toogle>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </HistoryList>
  )
}
