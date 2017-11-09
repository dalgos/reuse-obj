/**
 * reuse-obj is Object managing tool
 * @param  {Object} base base object
 * @return {Object}      object
 */
export default function (base) {
  const _base = Object.assign({}, base);

  /**
   * Return clone of base object.
   * @return {[type]} [description]
   */
  const clone = () => [...Object.entries(_base)].reduce((prev, [ propName, propValue ]) => Object.assign(prev, { [propName]: propValue }), {});

  /**
   * Update base's properties
   * @param {Object} other
   */
  function update(other) {
    return Object.keys(_base).reduce((prev, propName) => {
      return Object.assign(prev, { [propName]: other.hasOwnProperty(propName) ? other[propName] : _base[propName] });
    }, {});
  }

  return {
    clone,
    update,
  };
}
