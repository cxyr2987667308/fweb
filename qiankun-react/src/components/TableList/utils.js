const getCellWidth = (boxWidth, minCellWidth, len) => {
  const cellWidth = boxWidth / len;
  if (minCellWidth && minCellWidth - cellWidth > 0) {
    return minCellWidth
  }
  return cellWidth
}

export {
  getCellWidth
};
