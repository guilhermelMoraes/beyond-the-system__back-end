const PAGINATION_LIMIT = 10;
const FIRST_OFFSET_VALID_NUMBER = 0;

function pagination(page: number): number {
  if (Number.isNaN(page) || page === FIRST_OFFSET_VALID_NUMBER) {
    return FIRST_OFFSET_VALID_NUMBER;
  }

  return (Math.abs(page) - 1) * PAGINATION_LIMIT;
}

export default pagination;
