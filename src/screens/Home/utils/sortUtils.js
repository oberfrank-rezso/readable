export const sortingOptions = {
  dateDesc: {
    property: 'timestamp',
    isAscending: false,
    name: 'date desc.',
  },
  dateAsc: {
    property: 'timestamp',
    isAscending: true,
    name: 'date asc.',
  },
  voteDesc: {
    property: 'voteScore',
    isAscending: false,
    name: 'vote desc.',
  },
  voteAsc: {
    property: 'voteScore',
    isAscending: true,
    name: 'vote asc.',
  },
  commentDesc: {
    property: 'commentCount',
    isAscending: false,
    name: 'comments desc.',
  },
  commentAsc: {
    property: 'commentCount',
    isAscending: true,
    name: 'comments asc.',
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
