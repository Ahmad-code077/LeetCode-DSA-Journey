/**
 * @param {string} text
 * @param {string[]} positive_words
 * @param {string[]} negative_words
 * @return {number} score
 */
const run = function (text: string, positive_words: string[], negative_words: string[]): number {

    const textInArray = text.toLowerCase().match(/\b\w+\b/g) || [];


    let positive_words_count = 0
    let negative_words_count = 0

    for (let i = 0; i < textInArray.length; i++) {
        if (positive_words.includes(textInArray[i])) positive_words_count++
        if (negative_words.includes(textInArray[i])) negative_words_count++

    }

    console.log('count of both ', positive_words_count, negative_words_count)

    const score = (positive_words_count - negative_words_count) / (positive_words_count + negative_words_count)

    return score || 0
};

function main() {
    const text = "I love this product! It is amazing and makes me happy, but sometimes it is frustrating.";
    const positive_words = ["love", "amazing", "happy"];
    const negative_words = ["frustrating", "hate", "sad"];
    const result = run(text, positive_words, negative_words);
    console.log(result)
    return result
}
main();

