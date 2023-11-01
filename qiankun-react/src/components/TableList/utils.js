const getCellWidth = (boxWidth, minCellWidth, len) => {
  const cellWidth = boxWidth / len;
  if (minCellWidth && minCellWidth - cellWidth > 0) {
    return minCellWidth
  }
  return cellWidth
}

const getFixStyle = (fixed) => {
  if (fixed === 'left') {
    return {
      position: 'sticky',
      left: 0,
      zIndex: 2
    }
  }

  if (fixed === 'right') {
    return {
      position: 'sticky',
      zIndex: 2
    }
  }

  return {}
}

export {
  getCellWidth,
  getFixStyle
};
