// Number of commits:
let totalCommits = 0;

for (let i = 0; i < githubData.length; i++){
   if ('commits' in githubData[i].payload){
       const numberOfCommits = githubData[i].payload.commits.length
       totalCommits += numberOfCommits
    }
   }
   console.log("Total commits: " + totalCommits);




// Number of Events
let totalPushEvent = 0;
let totalPullRequestEvent = 0;
let totalDeleteEvent = 0;
let totalIssueCommentEvent = 0;
let totalCreateEvent = 0;

for (let i = 0; i < githubData.length; i++){
   if (githubData[i].type === "PushEvent"){
       totalPushEvent++;
    } else if (githubData[i].type === "PullRequestEvent"){
        totalPullRequestEvent++;
    } else if (githubData[i].type === "DeleteEvent"){
    totalDeleteEvent++;
    } else if (githubData[i].type === "IssueCommentEvent"){
  totalIssueCommentEvent++;
    } else if (githubData[i].type === "CreateEvent"){
      totalCreateEvent++;
    }
}



   console.log("Push Events: " + totalPushEvent);
   console.log("Pull Request Events: " + totalPullRequestEvent)
   console.log("Delete Event: " + totalDeleteEvent)
   console.log("Issue Comment Events: " + totalIssueCommentEvent)
   console.log("Create Events: " + totalCreateEvent)

  
// List all Github users who submitted a pull request that was approved by Steve. 
// payload -> pull_request -> user -> login
let approvedUsers = [];


githubData.forEach(stevent => {
  if(stevent.type === "PullRequestEvent"){
    // console.log(stevent.payload.pull_request.user.login)
    if (!approvedUsers.includes(stevent.payload.pull_request.user.login)){
      approvedUsers.push(stevent.payload.pull_request.user.login)
    }
  }
})

console.log(approvedUsers);


// List all repositories on which Steve had an event, and show how many events were on each one.
let reposEvents = {
"nashville-software-school/client-side-mastery": 0,
"nashville-software-school/bangazon-llc": 0,
"stevebrownlee/vps-setup":0,
"nashville-software-school/client-side-mastery":0,
"nss-day-cohort-27/brenda-snack-cake-store":0,
"nashville-software-school/client-side-mastery":0
};


githubData.forEach(eventObj => {
  // console.log(eventObj.repo.name)
  reposEvents[eventObj.repo.name] ++;
})

console.log(reposEvents);

// Which event had the most number of commits?
let eventsCommits = {

}

githubData.forEach(githubEvent =>{
  if (githubEvent.type === "PushEvent"){
    console.log(githubEvent.id, githubEvent.payload.commits.length)
    eventsCommits[githubEvent.id] = githubEvent.payload.commits.length;
  }
})

console.log(eventsCommits);


// Which programming langugages were affected by Steve's events?
githubData.forEach(language => {
  if (language.type === "PullRequestEvent"){
    console.log(language.payload.pull_request.head.repo.language)
    console.log(language.payload.pull_request.base.repo.language)
  }
})

// 
// Javascript!