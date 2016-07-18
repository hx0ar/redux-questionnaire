import BaseObject from './BaseObject';

export default class Questionnaire extends BaseObject {
  constructor(ioSource = {}) {
    super(ioSource);
    this.oQuestionList = (ioSource.oQuestionList || []);
    this.sCustomer = (ioSource.sCustomer || "");
  }

  GetSectionCount = () => this.GetSectionList().length;

  GetQuestionCount = () => this.oQuestionList.length;

  GetSubSections = () => {
    const subsections = [...new Set(this.oQuestionList.map(a => a.oSection))];
    let moddedSubsections = [];
    subsections.forEach((item, i) => {
      let subsectionsQuestions = this.oQuestionList.filter(a => a.oSection.sSubSection === item.sSubSection);
      moddedSubsections.push({ item, subsectionsQuestions, });
    });
    return moddedSubsections;
  };

  GetUnansweredQuestions = () => this.oQuestionList.filter(a => a.sAnswer === '');

  GetSectionList = () => {
    const sectionIdsArray = [...new Set(this.oQuestionList.map(a => a.oSection.sMainSection))];
    let sections = [];
    sectionIdsArray.forEach((item, i) => {
      let sectionQuestions = this.oQuestionList.filter(a => a.oSection.sMainSection === item);
      let unansweredQuestions = sectionQuestions.filter(a => a.sAnswer === '');
      let subsections = [...new Set(sectionQuestions.map(a => a.oSection))];
      let progressPct = unansweredQuestions / sectionQuestions;
      if (isNaN(progressPct)) progressPct = 0;
      sections.push({ sMainSection: item, sId: sectionQuestions[0].oSection.sId, sectionQuestions, unansweredQuestions, subsections, progressPct, });
    });
    return sections;
  };

  AddQuestion(oQuestion) {
    this.oQuestionList.push(oQuestion);
  }

}
