import BaseObject from './BaseObject';

export default class Question extends BaseObject {
  constructor(ioSource = {}) {
    super(ioSource);
    this.iSequence = (ioSource.iSequence || "");
    this.sQuestion = (ioSource.sQuestion || "");
    this.sAnswer = (ioSource.sAnswer || "");
    this.bApproved = (ioSource.bApproved || false);

    //this.oQuestionnaire = (ioSource.oQuestionnaire || null);
    this.oSection = (ioSource.oSection || null);
    this.oRemarkList = (ioSource.oRemarkList || null);
  }
}
