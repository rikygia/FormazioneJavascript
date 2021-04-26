function countOnline(usersObj) {
  // Only change code below this line
  let count=0;
  for(let user in usersObj)
  {
    count+=(usersObj[user].online)?1:0
  }
  return count;
  // Only change code above this line
}
console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }))