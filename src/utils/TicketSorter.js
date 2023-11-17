import { getPriorityName  } from "./TicketApi";

const attributeComparator = (attribute) => (a, b) => {

  let valueA, valueB
  if(typeof a[attribute] === 'string') {
    valueA = a[attribute].toLowerCase()
  } else {
    valueA = b[attribute]
  }

  if(typeof b[attribute] === 'string') {
    valueB = b[attribute].toLowerCase()
  } else {
    valueB = a[attribute]
  }

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

const priorities = ["No Priority", "Urgent", "High Priority", "Medium Priority", "Low Priority"]
const statuses = ["Backlog", "Todo", "In progress", "Done", "Canceled"]

const sortOnBasisOfUser = (groupedTickets, orderingType) => {
  groupedTickets.sort((a, b) => a[0].user.localeCompare(b[0].user))
  return groupedTickets.map(group => [...group].sort(attributeComparator(orderingType)));
}

const sortOnBasisOfPriority = (groupedTickets, orderingType) => {
  groupedTickets.sort((a, b) => {
    const indexA = priorities.indexOf(getPriorityName(a[0].priority));
    const indexB = priorities.indexOf(getPriorityName(b[0].priority));

    return indexA - indexB;
  })
  return groupedTickets.map(group => [...group].sort(attributeComparator(orderingType)));
}

const sortOnBasisOfStatus = (groupedTickets, orderingType) => {
  groupedTickets.sort((a, b) => {
    const indexA = statuses.indexOf(a[0].status);
    const indexB = statuses.indexOf(b[0].status);

    return indexA - indexB;
  })
  return groupedTickets.map(group => [...group].sort(attributeComparator(orderingType)));
}

export const getSortedTickets = (ticketsData, groupingType, orderingType) => {
  const groupedTickets = groupByProperty(ticketsData, groupingType);

  if(groupingType === "user") {
    return sortOnBasisOfUser(groupedTickets, orderingType)
  } else if(groupingType == "priority") {
    return sortOnBasisOfPriority(groupedTickets, orderingType)
  } else if(groupingType == "status") {
    return sortOnBasisOfStatus(groupedTickets, orderingType)
  }

  return []
}