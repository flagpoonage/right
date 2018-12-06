export default class RightEditorState {

  constructor () {
    this.reset();
  }

  reset () {
    this.document = {
      cls: 'right-edt',
      children: [
        {
          cls: 'right-edt-line',
          children: {
            cls: 'right-edt-text',
            children: [
              ''
            ]
          }
        }
      ]
    };
  }

}