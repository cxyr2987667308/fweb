import { cloneDeep, reverse } from 'lodash';
const getColWidth = (boxWidth, minColWidth = 0, columns) => {
  let cusWidth = 0;
  columns?.forEach(v => {
    cusWidth = cusWidth + (v.width || 0);
  });

  const colWidth = parseFloat(parseFloat(boxWidth - cusWidth) / columns?.length);
  if (minColWidth - colWidth > 0) {
    return minColWidth
  }

  return colWidth
}

const getFixStyle = (curItem, isHeader = false) => {
  const { fixed, fixedWidth } = curItem;
  const style = {
    position: 'sticky',
    zIndex: 2,
    // display: 'block',
    // borderCollapse: collapse,
    backgroundClip: 'padding-box', // padding-box  content-box
  };
  if (fixed === 'left') {
    return {
      ...style,
      left: fixedWidth,
    }
  }

  if (fixed === 'right') {
    return {
      ...style,
      right: isHeader ? fixedWidth + 18 : fixedWidth,
    }
  }

  return {}
}

const getColumnsForFixed = (boxWidth, minCellWidth, columns) => {
  const columnsClone = cloneDeep(columns);
  const colWidth = getColWidth(boxWidth, minCellWidth, columns)
  let curFixedLeft = 0;
  let curFixedRight = 0;
  const arrFixedL = [];
  const arrFixedR = [];

  columnsClone?.forEach((item, index) => {
    if (!item?.width) {
      item.colWidth = colWidth;
    }

    if (item.fixed === 'left') {
      item.fixedWidth = curFixedLeft;
      curFixedLeft = curFixedLeft + (item?.width || item.colWidth);
      arrFixedL.push(index);
    }
  });
  if (!!arrFixedL?.length) {
    columnsClone[arrFixedL.pop()]['isLast'] = true;
  }

  reverse(columnsClone)?.forEach((item, index) => {
    if (item.fixed === 'right') {
      item.fixedWidth = curFixedRight;
      curFixedRight = curFixedRight + (item?.width || item.colWidth);
      arrFixedR.push(index);
    }
  });

  if (!!arrFixedR?.length) {
    columnsClone[arrFixedR.pop()]['isLast'] = true;
  }

  console.log('columnsClone----', columnsClone);
  return reverse(columnsClone);
}

const getBodyWidth = (columns) => {
  let totalWidth = 0;
  columns?.forEach(item => {
    totalWidth = parseFloat(totalWidth + (item?.width || item.colWidth));
  });
  return totalWidth;
}

export {
  getColWidth,
  getFixStyle,
  getColumnsForFixed,
  getBodyWidth,
};
