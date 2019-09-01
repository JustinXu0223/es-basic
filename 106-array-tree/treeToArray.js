const data = [
  {
    id: 1,
    pid: 0,
    name: 'no.1',
    children: [
      {
        id: 2,
        pid: 1,
        name: 'no.2',
        children: [
          { id: 6, pid: 2, name: 'no.6' },
          { id: 7, pid: 2, name: 'no.7' },
          { id: 8, pid: 2, name: 'no.8' },
        ],
      },
      {
        id: 3,
        pid: 1,
        name: 'no.3',
        children: [
          { id: 9, pid: 3, name: 'no.9' },
          { id: 10, pid: 3, name: 'no.10' },
          { id: 11, pid: 3, name: 'no.11' },
        ],
      },
      {
        id: 4,
        pid: 1,
        name: 'no.4',
        children: [
          { id: 12, pid: 4, name: 'no.12' },
          {
            id: 13,
            pid: 4,
            name: 'no.13',
            children: [
              { id: 14, pid: 13, name: 'no.14' },
            ],
          },
        ],
      },
      { id: 5, pid: 1, name: 'no.5' },
    ],
  },
];

function compareProps(key) {
  return (obj1, obj2) => {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (val1 < val2) {
      return -1;
    }
    if (val1 > val2) {
      return 1;
    }
    return 0;
  };
}

function treeToArray(list, newArr = []) {
  list.forEach((item) => {
    const { children } = item;
    if (children) {
      delete item.children;

      if (children.length) {
        newArr.push(item);
        return treeToArray(children, newArr);
      }
    }
    newArr.push(item);
  });
  return newArr;
}

// console.log(data);

// console.log(treeToArray(data));
// console.log(treeToArray(data).sort(compareProps('id')));

function getTreePathList(list, value, {
  equalKey = 'name',
  returnKey = 'uid',
  returnIndex = false,
  returnOnlyLast = false,
} = {}) {
  for (let i = 0; i < list.length; i += 1) {
    const { children = [], [equalKey]: name, [returnKey]: uid } = list[i];
    const returnMap = (returnIndex || returnOnlyLast) ? {
      ...list[i],
      index: i,
    } : uid;
    if (name === value) {
      if (returnOnlyLast) return returnMap;
      return [returnMap];
    }
    if (children && children.length) {
      const res = getTreePathList(children, value, {
        equalKey,
        returnKey,
        returnIndex,
        returnOnlyLast,
      });
      if (res) {
        if (returnOnlyLast) return res;
        return [returnMap, res].flat() || [];
      }
    }
  }
}

console.log(getTreePathList(data, 11, {
  equalKey: 'id',
  returnIndex: true,
}));

// 迭代器
function iterator(arr, cb, isFirst = true) {
  for (let i = 0; i < arr.length; i += 1) {
    /* eslint-disable no-continue */
    // 这是做状态过滤
    // if (arr[i].status !== 1) {
    //   arr.splice(i, 1);
    //   i -= 1;
    //   continue;
    // }
    cb.call(arr[i], arr[i], arr.length === 1 && isFirst);
  }
}

// 处理每一项
function changeItem(item, isFirst) {
  // 更改字段名称
  item.isFirst = isFirst;
  item.key = item.id;
  item.title = item.name;
  item.tags_children = item.children || [];

  if (item.children) {
    iterator(item.children, changeItem, false);
    delete item.children;
  }
}

// iterator(data, changeItem);
// console.log(data);

function changeTreeKey(list, isFirst = true) {
  return list.map((item) => {
    item.isFirst = isFirst;
    item.key = item.id;
    item.title = item.name;
    item.tags_children = item.children || [];

    if (item.children) {
      delete item.children;
      changeTreeKey(item.tags_children, false);
    }
    return item;
  });
}

// console.log(changeTreeKey(data));
