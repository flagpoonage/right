import RightRenderer from './renderer';

/**
 * The main editor class
 */
export default class RightEditor {

  /**
   * Create a new instance of the Right Editor
   * 
   * @param {Object} options 
   */
  constructor (options) {
    this.options = options;
    this._renderers = [];
  }

  /**
   * Attaches a new renderer to the specified element.
   * 
   * @param {HTMLElement} el 
   * @param {Object} options 
   */
  addRenderer (el, options) {
    let r = {
      instance: new RightRenderer(el, options),
      el: el
    };

    this._renderers.push(r);

    return r.instance;
  }

  /**
   * Removes a specified renderer, clearing all content in the process.
   * @param {HTMLElement | RightRenderer} val 
   */
  removeRenderer (val) {
    let idx = this._renderers.findIndex(a => a.el === val || a.instance === val);
    if (idx < 0) { return; }

    let r = this._renderers[idx];
    r.instance.clear();

    this._renderers.splice(idx, 1);
  }
}