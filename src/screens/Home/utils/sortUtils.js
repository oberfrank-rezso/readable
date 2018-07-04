export const sortingOptions = {
  dateDesc: {
    property: 'timestamp',
    isAscending: false,
    name: 'Date Desc.',
  },
  dateAsc: {
    property: 'timestamp',
    isAscending: true,
    name: 'Date Asc.',
  },
  voteDesc: {
    property: 'voteScore',
    isAscending: false,
    name: 'Vote Desc.',
  },
  voteAsc: {
    property: 'voteScore',
    isAscending: true,
    name: 'Vote Asc.',
  },
  commentDesc: {
    property: 'commentCount',
    isAscending: false,
    name: 'Comments Desc.',
  },
  commentAsc: {
    property: 'commentCount',
    isAscending: true,
    name: 'Comments Asc.',
  },
};

export const isValidSort = sort => Object.keys(sortingOptions).includes(sort);

export const getSortingOption = sort => sortingOptions[sort];

export const createSortByPropertyFunction = ({ property, isAscending }) => (a, b) => {
  const aProp = a[property];
  const bProp = b[property];

  if (aProp === bProp) return 0;
  if (aProp < bProp) return isAscending ? -1 : 1;
  return isAscending ? 1 : -1;
};
