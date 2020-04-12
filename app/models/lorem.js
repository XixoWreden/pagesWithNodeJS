const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 4,
      min: 3
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
});

const textoLorem = () => lorem.generateParagraphs(3);

const loremPuppy = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 2
  },
  wordsPerSentence: {
    max: 2,
    min: 2
  }
});

const textoLoremPuppy = () => loremPuppy.generateParagraphs(2);


module.exports.textoLorem = textoLorem;
module.exports.textoLoremPuppy = textoLorem;