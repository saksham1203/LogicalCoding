function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("Length not matched");
        return false;  // Early exit if lengths are not the same
    }

    const freqStr1 = {};
    for (let i = 0; i < str1.length; i++) {
        if (freqStr1[str1[i]]) {
            freqStr1[str1[i]] += 1;
        } else {
            freqStr1[str1[i]] = 1;
        }
    }
    console.log("Frequency Map for str1:", freqStr1);

    const freqStr2 = {};
    for (let i = 0; i < str2.length; i++) {
        if (freqStr2[str2[i]]) {
            freqStr2[str2[i]] += 1;
        } else {
            freqStr2[str2[i]] = 1;
        }
    }
    console.log("Frequency Map for str2:", freqStr2);

    // Compare the frequency maps
    for (let char in freqStr1) {
        if (freqStr1[char] !== freqStr2[char]) {
            console.log("Strings are not anagrams.");
            return false;
        }
    }
    console.log("Strings are anagrams.");
    return true;
}

const str1 = "silent";
const str2 = "listen";

anagram(str1, str2);
