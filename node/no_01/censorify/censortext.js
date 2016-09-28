var censoreWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];
function censor(inStr) {
	for (idx in censoreWords) {
		inStr = inStr.replace(censoreWords[idx], '****');
	}
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx], '****');
	}
	return inStr;
}
function addCensoredWord(word) {
	customCensoredWords.push(word);
}
function getCensoredWords() {
	return censoreWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
