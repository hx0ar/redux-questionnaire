export default class BaseObject {
  constructor(ioSource = {}) {
    this.sId = (ioSource.sId || this.GetUniqueId());
  };

  // succinct hack for generating passable unique ids
  GetUniqueId() {
    return Math.random().toString(34).slice(2);
  }
}
