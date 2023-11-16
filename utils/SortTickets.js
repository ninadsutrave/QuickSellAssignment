import { getPriorityName  } from "./TicketData";

const attributeComparator = (attribute) => (a, b) => {
  const valueA = typeof a[attribute] === 'string' ? a[attribute].toLowerCase() : a[attribute];
  const valueB = typeof b[attribute] === 'string' ? b[attribute].toLowerCase() : b[attribute];

  const compareResult = valueA < valueB ? -1 : valueA > valueB ? 1 : 0;

  return compareResult;
};

const groupByProperty = (tickets, groupingType) => {
    return tickets.reduce((result, ticket) => {
      const userGroup = result.find((group) => group[0]?.[groupingType] === ticket[groupingType]);
  
      if (userGroup) {
        userGroup.push(ticket);
      } else {
        result.push([ticket]);
      }
  
      return result;
    }, []);
};

export const getSortedTickets = (ticketsData, groupingType, orderingType) => {
    const groupedTickets = groupByProperty(ticketsData, groupingType);

    const priorities = ["No Priority", "Urgent", "High Priority", "Medium Priority", "Low Priority"]
    const statuses = ["Backlog", "Todo", "In progress", "Done", "Canceled"]

    if(groupingType === "user") {
      groupedTickets.sort((a, b) => a[0].user.localeCompare(b[0].user));
    } else if(groupingType == "priority") {
      groupedTickets.sort((a, b) => {
        const indexA = priorities.indexOf(getPriorityName(a[0].priority));
        const indexB = priorities.indexOf(getPriorityName(b[0].priority));

        return indexA - indexB;
      });
    } else if(groupingType == "status") {
      groupedTickets.sort((a, b) => {
        const indexA = statuses.indexOf(a[0].status);
        const indexB = statuses.indexOf(b[0].status);

        return indexA - indexB;
      });
    }

    const sortedTickets = groupedTickets.map(group => [...group].sort(attributeComparator(orderingType)));
    return sortedTickets
}