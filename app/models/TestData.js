import Question from "./Question";
import Questionnaire from "./Questionnaire";
import Section from "./Section";

export function GetTestData(index) {
  //console.log('GetTestData', index, index%2);
  var toQuestionnaire = new Questionnaire();

  if (index%2) {
    var tiQuestionSequence = 1;

    var toSectionSportsWatch = new Section({sMainSection:"Sports", sSubSection:"Follow", iSequence:100});
    var toSectionSportsPlay = new Section({sMainSection:"Sports", sSubSection:"Play", iSequence:110});

    var toSectionBookMain = new Section({sMainSection:"Book", sSubSection:"Main", iSequence:200});

    var toSectionStreamSeries = new Section({sMainSection:"Streaming", sSubSection:"Series", iSequence:300});
    var toSectionStreamMovies = new Section({sMainSection:"Streaming", sSubSection:"Movies", iSequence:310});

    var toSectionTVNews = new Section({sMainSection:"TV", sSubSection:"News", iSequence:400});
    var toSectionTVPolitics = new Section({sMainSection:"TV", sSubSection:"Politics", iSequence:410});

    var toSectionHomeMain = new Section({sMainSection:"Home", sSubSection:"Main", iSequence:500});

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What is your favorite sport to watch on TV?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionSportsWatch
    }));
    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What is your favorite team overall?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionSportsWatch
    }));
    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What other sports do you follow in the media?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionSportsWatch
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What sports do you play often, if any?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionSportsPlay
    }));
    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What sports would you like to play that are not playing?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionSportsPlay
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What was the first book you read?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionBookMain
    }));
    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What is the last book you read or started to read?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionBookMain
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Do you watch any series on Netflix or other streaming services? Which ones?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionStreamSeries
    }));
    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Do you watch documentaries over Netflix?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionStreamSeries
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What are your favorite movies all-time?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionStreamMovies
    }));
    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What was the last movie you watch on TV or Netflix?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionStreamMovies
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What programs you watch on TV to keep you informed?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionTVNews
    }));
    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Do you have a favorite TV news anchor?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionTVNews
    }));
    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Is there a news anchor you dislike?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionTVNews
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Do you watch any politics programs on TV?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionTVPolitics
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Do you like doing home repairs? What is it?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionHomeMain
    }));

  }
  else {
    var tiQuestionSequence = 1;

    var toSectionPrivateMain = new Section({sMainSection:"Private", sSubSection:"Main", iSequence:100});
    var toSectionPrivateFood = new Section({sMainSection:"Private", sSubSection:"Food", iSequence:110});
    var toSectionPrivateAnimals = new Section({sMainSection:"Private", sSubSection:"Animals", iSequence:120});

    var toSectionSchoolFirst = new Section({sMainSection:"School", sSubSection:"First", iSequence:200});
    var toSectionSchoolLast = new Section({sMainSection:"School", sSubSection:"Last", iSequence:210});

    var toSectionHolidayLast = new Section({sMainSection:"Holiday", sSubSection:"Last", iSequence:300});
    var toSectionHolidayDream = new Section({sMainSection:"Holiday", sSubSection:"Dream", iSequence:310});

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What is your full name?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionPrivateMain
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"How old are you?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionPrivateMain
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Where are you from?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionPrivateMain
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What is your favorite food?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionPrivateFood
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"How often do you eat your favorite food?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionPrivateFood
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"How often do you cook?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionPrivateFood
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Do you have any pets?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionPrivateAnimals
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What are their names?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionPrivateAnimals
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What is your favorite animal and why?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionPrivateAnimals
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"When did you first do to school?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionSchoolFirst
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Who was your best friend at this school?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionSchoolFirst
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What was your last school?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionSchoolLast
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Who was your favorite teacher there and why?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionSchoolLast
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Where did your last holiday take you?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionHolidayLast
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"Did you meet any interesting people there?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionHolidayLast
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"What is your dream holiday?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionHolidayDream
    }));

    toQuestionnaire.AddQuestion(new Question({
      iSequence:tiQuestionSequence++,
      sQuestion:"When are you planning on going on your dream holiday?",
      sAnswer:"",
      bApproved:false,
      oQuestionnaire:toQuestionnaire,
      oSection:toSectionHolidayDream
    }));

  }

  return toQuestionnaire;
}
