function isImpactByteStudent(name) {
  if (name === "albert") {
    return Promise.resolve(`${name}is impact byte student`);
  } else {
    return Promise.reject(`${name} is not impact byte student`);
  }
}

isImpactByteStudent("albert")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));

isImpactByteStudent("susi")
  .then(ans => console.log(ans))
  .catch(err => console.log(err));

console.log("abcd");
