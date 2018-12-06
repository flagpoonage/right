/**
 * The rendering component of the editor. Renderers are the visual aspect of the editor, which display
 * the content inside the editor, and provide the interface for editing.
 */
export default class RightRenderer {

  /**
   * Create a new renderer instance
   * 
   * @param {HTMLElement} el 
   * @param {object} options 
   */
  constructor (el, options) {
    this.options = options;
    this.el = el;
  }

  /**
   * Readjust the renderer size to it's wrapper element's current dimensions. This causes a full rerender.
   */
  readjust (el) {
    this.width = el.innerWidth;

    if (this.options.grow && !this.height) {
      this.height = el.innerHeight;
    }
  }

  /**
   * Clears all content inside the renderer
   */
  clear () {
    this.el.innerHTML = '';
  }

  /**
   * Cleans up any object references inside the renderer
   */
  dispose () {
    this.clear();
    delete this.options;
    delete this.el;
  }
}