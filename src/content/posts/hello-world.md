---
category: posts
title: Hacktoberfest
date: 2019-10-02T19:14:44.459Z
---
I'm just getting started with open source and git beyond the basics. This year's Hacktoberfest has really helped me break on through to the other side. Now I'm forking, branching, testing and submitting pull requests. It's a rush.

<!-- end -->

### Forking

I never really understood what it actually meant to fork a repository. I was afraid I'd break something and I never needed it for my solo projects, so I left it alone. That is until today.

After finding an issue that I could tackle (updating documentation), I wearily clicked that fork button. After almost nothing exploded, I realized that I just had a copy of the repository in my GitHub account.

### Branching

Before embarking on my journey this morning, I read a few articles and contributing guidelines from various repositories. The general advice was to make a feature branch and submit that branch as a pull request. Perfect... except what?

A quick Google search taught me that `git checkout -b branch-name` is a quick one-liner that will create a new branch, ready for editing. I tried to keep my branch name related to the issue I had found to solve.

### Testing

My first change was to the documentation, but my subsequent issues were to the code itself. This meant I had to create a test case for the change and ensure that my change passed the test.

Fortunately the developers already setup the testing tools. This meant that I just needed to write my test, `npm i` and `npm test`. The first time I ran `npm test`, however, I received errors and set out debugging.

I pinpointed a cross-platform compatibility issue with one of the dependancies. Apparently prettier glob patterns must use double quotes on Windows machines. I fixed my package.json and ran the tests until I passed.

### Submitting Pull Requests

The last step was to submit the pull request. GitHub makes this easy. It automatically notices any commits you've made and asks if you want to submit them as a pull request. So I did.

I also realized that my issue with testing was another issue that I could fix for the project. I searched the issues to make sure it wasn't already submitted and then opened a new issue when I couldn't find anything. From there, I made a pull request with my package.json edits and the rest is (git) history.

### Conclusion

I'm now three PRs closer to my Hacktoberfest prize and, probably more importantly, I'm _way_ more comfortable with helping to improve open source software.
