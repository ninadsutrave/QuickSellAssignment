import { useState, useEffect } from 'react'
import { useDisplay } from '../contexts/DisplayContext'
import ColumnHeading from './ColumnHeading'
import { getTicketData } from '../utils/TicketData'
import { getSortedTickets } from '../utils/SortTickets'
import Card from './Card'
import './KanbanBoard.css'

const KanbanBoard = () => {
  const {groupingType, orderingType} = useDisplay()
  const [ticketsData, setTicketsData] = useState([])

  useEffect(() => {
    console.log(groupingType, orderingType)
  }, [groupingType, orderingType])

  let priorities = ["No Priority", "Urgent", "High", "Medium", "Low"]
  let statuses = ["Backlog", "Todo", "In progress", "Done", "Canceled"]  

  if(ticketsData.length == 0) {
    getTicketData().then(data => {(data)?setTicketsData(data):null})
                   .catch(error => {console.error('Error in handleData:', error);});
  } 

  let sortedTickets
  if(ticketsData) {
    sortedTickets = getSortedTickets(ticketsData, groupingType, orderingType);
  }

  const numberOfColumns = (groupingType == "priority")?priorities.length:(groupingType == "status")?statuses.length:sortedTickets.length
  
  const columnData = Array.from({ length: numberOfColumns }, (_, columnIndex) => {
    if(columnIndex>=sortedTickets.length) {
      if(groupingType == "priority") return {heading: priorities[columnIndex]}
      else if(groupingType == "status") return {heading: statuses[columnIndex]}
    }

    return {
      heading: `${sortedTickets[columnIndex][0]?.[groupingType]}`,
      cells: Array.from({ length: sortedTickets[columnIndex].length }, (_, cellIndex) => ({
        id: `${columnIndex}-${cellIndex}`,
        content: `Cell ${cellIndex + 1}`,
      })),
    };
  });
  return (
    <div>
      {columnData.map((column, columnIndex) => (
        <div key={columnIndex} className="grid-column">
          
          {<ColumnHeading heading={column.heading} length={sortedTickets[columnIndex]?sortedTickets[columnIndex].length:0}/>}
          
          {sortedTickets[columnIndex] && sortedTickets[columnIndex].map((ticket) => (
            <div key={ticket.id} className="grid-cell">
              <Card 
                ticketId={ticket.id}
                ticketTitle={ticket.title}
                available={ticket.available}
                userName={ticket.user}
                priority={ticket.priority}
                status={ticket.status}
              />
            </div>
          ))}

        </div>
      ))}
    </div>
  )
}

export default KanbanBoard