import { useEffect, useState } from "react";

/**
 * 判断属性是否为0这种特殊场景
 * @param {对象属性} value
 * @returns
 */
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
/**
 *  请求的时候如果没有值删除属性
 * @param {源对象} object
 * @returns {目标对象} result
 */
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

/**
 * 自定义customHook
 * @param {回调函数} callback
 */
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

/**
 * 进行截流请求
 * @param {需要监听的值} value
 * @param {延迟} delay
 */
export const useDebounce = <V>(value: V, delay?: number): V => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一次useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
