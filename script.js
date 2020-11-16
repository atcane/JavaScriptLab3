// 1. Declare a variable named submissions that is initialized to an array with the following objects
const submissions = [
    {
    name: 'Jane',
    score: 95,
    date: '2020-01-24',
    passed: true},

    {
    name: 'Joe',
    score: 77,
    date: '2018-05-14',
    passed: true},

    {
    name: 'Jack',
    score: 59,
    date: '2018-07-05',
    passed: false},

    {
     name: 'Jill',
     score: 88,
     date: '2020-04-22',
     passed: true} 
];

// 2. Declare a function named addSubmission
// Parameter(s): array, newName, newScore, newDate
// Functionality: construct an object and push it into the array. The object must
//have the same properties as the objects already in the array. Use conditional
//statements to set the value for the passed property to true if the score is
//greater than or equal to 60 and false otherwise.

function addSubmission(array, newName, newScore, newDate) {
        let newPassed;
        
        if(newScore >= 60){
            newPassed = true;
        }
        else {
            newPassed = false;
        }

        array.push({name: newName, score: newScore, date: newDate, passed: newPassed});

    }

    addSubmission(submissions, 'Jake', 92, '2020-06-23');
    console.log(submissions);

/* 3. Declare a function named deleteSubmissionByIndex
○ Parameter(s): array, index
○ Functionality: remove the object from the array at the specified index using the
splice method.*/

function deleteSubmissionByIndex(array, index) {
    array.splice(index,1); 
}
/*deleteSubmissionByIndex(submissions, 1);
console.log(submissions)*/

/* 4. Declare a function named deleteSubmissionByName
○ Parameter(s): array, name
○ Functionality: remove the object from the array that has the provided name.
Incorporate the findIndex method and the splice method.*/

function deleteSubmissionByName(array,name) {
    let submissionIndex = array.findIndex(submission => submission.name === name)
    array.splice(submissionIndex,1); 
}

deleteSubmissionByName(submissions,'Jake');
console.log(submissions)

/* 5. Declare a function named editSubmission
○ Parameter(s): array, index, score
○ Functionality: update an object’s score in the array at the specified index. Use
conditional statements to set the value for the passed property to true if the
score is greater than or equal to 60 and false otherwise.*/

function editSubmission(array, index, score) {
    let updatedPassed; 

    if(score >= 60){
        updatedPassed = true;
    }
    else {
        updatedPassed = false;
    }
    array[index].score = score;
    array[index].passed = updatedPassed
}

editSubmission(submissions, 3, 90);
    console.log(submissions);

/* 6. Declare a function named findSubmissionByName
○ Parameter(s): array, name
○ Functionality: return the object in the array that has the provided name. Use the
find method.*/

function findSubmissionByName(array, name) {
    let submissionFind = array.find (submission => submission.name === name);
    return submissionFind
}

let student = findSubmissionByName(submissions, 'Joe');
console.log(student)

/* 7. Declare a function named findLowestScore
○ Parameter(s): array
○ Functionality: return the object in the array that has the lowest score. Use the
forEach method to loop through the whole array.*/

function findLowestScore(array) {
    let lowest = null;
  
    submissions.forEach(submission =>  {
      if (lowest === null || lowest.score > submission.score) {
        lowest = submission;
      }
    });
  
    return lowest;
  }

  let lowScore = findLowestScore(submissions);
  console.log(lowScore);

/* 8. Declare a function named findAverageScore
○ Parameter(s): array
○ Functionality: return the average quiz score. Use a for...of loop.*/

function findAverageScore(array) {
    let total = 0
    for(let i = 0; i < array.length; i++) {
        total = total + array[i].score
    
    }
        let avg = total/array.length
        return avg;
}

const average = findAverageScore(submissions);
console.log(average);

/* 9. Declare a function named filterPassing
○ Parameter(s): array
○ Functionality: return a new array using the filter method. The filter method
should find objects in the array that have passing scores.*/

function filterPassing(array) {
    let passingScore = array.filter(submission => submission.score >= 60);
    console.log(passingScore)
}
  filterPassing(submissions);

/* 10. Declare a function named filter90AndAbove
○ Parameter(s): array
○ Functionality: return a new array using the filter method. The filter method
should find objects in the array that have scores greater than or equal to 90 */

function filter90AndAbove(array) {
    let topPercentile = array.filter(submission => submission.score >= 90);
    console.log(topPercentile)
}
  filter90AndAbove(submissions);