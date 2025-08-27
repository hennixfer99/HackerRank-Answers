// Divisible Sum Pairs - Hackerrank

function divisibleSumPairs(n, k, ar) {
    let result = 0;
    let aux = 0;

    for (let i = 0; i < n; i++) {
        let count = i;
        while (count < n) {
            aux = ar[i] + ar[count];
            if (aux % k === 0 && i !== count) {
                result++;
            }
            count++;
        }
    }
    return result;
}

// Time Conversion - Hackerrank

function timeConversion(s) {
    if (s.includes("PM")) {
        let newS = s.replace("PM", "").split("");
        if (newS[0] == 1 && newS[1] == 2) {
            return newS.join("");
        } else {
            newS[0] == 1 ? (newS[0] = 2) : (newS[0] = 1);
            newS[1] = Number(newS[1]) + 2;
        }
        return newS.join("");
    }
    let newS = s.replace("AM", "").split("");
    if (newS[0] == 1 && newS[1] == 2) {
        newS[0] = 0;
        newS[1] = 0;
    }
    return newS.join("");
}

// Plus minus - Hackerrank

function plusMinus(arr) {
    let pr = 0.0;
    let se = 0.0;
    let none = 0.0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pr++;
        } else if (arr[i] == 0) {
            none++;
        } else {
            se++;
        }
    }
    console.log((pr / arr.length).toFixed(6));
    console.log((se / arr.length).toFixed(6));
    console.log((none / arr.length).toFixed(6));
}

// Minimum Height Triangle - Hackerrank

function lowestTriangle(trianglebase, area) {
    let height = (2 * area) / trianglebase;

    return Math.ceil(height);
}

// Grading Students - Hackerrank

function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38 && grades[i] % 5 > 2)
            grades[i] = grades[i] + (5 - (grades[i] % 5));
    }

    return grades;
}
