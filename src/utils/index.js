/**
 * 判断属性是否为0这种特殊场景
 * @param {对象属性} value
 * @returns
 */
export const isFalsy = (value) => (value === 0 ? false : !value);
/**
 *  请求的时候如果没有值删除属性
 * @param {源对象} object
 * @returns {目标对象} result
 */
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
