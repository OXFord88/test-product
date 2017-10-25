/**
 * @file 工具函数
 * @author lintianlong@baidu.com
 */

function find(list, f) {
    return list.filter(f)[0];
}

export function deepCopy(obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj);
    if (hit) {
        return hit.copy;
    }

    const copy = Array.isArray(obj) ? [] : {};
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    });

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache);
    });

    return copy;
}

export function forEachValue(obj, fn) {
    Object.keys(obj).forEach(key => fn(obj[key], key));
}

export function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

export function isPromise(val) {
    return val && typeof val.then === 'function';
}
export function formateDate(time) {
    if (! isObject(time)) {
        return time;
    }
    let date = time || new Date();
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}
export function getProduct(row, column) {
    if (!this.isProduct) {
        return row.packageName;
    }
    this.packageNameLists.forEach(function (value, index) {
        if (row.packageName === value.packageName) {
            row.productName = value.productName;
        }
    });
    return row.productName;
}
export function getProductId(str, isProduct) {
    let result = '';
    this.packageNameLists.forEach(function (value, index) {
        if (str === value.id) {
            if (isProduct) {
                result = value.productName;
            } else {
                result = value.packageName;
            }
        }
    });
    return result;
}