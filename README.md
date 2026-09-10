# Memory Madness

[My Notes](notes.md)

My startup is to create a memory game in which a set of squares is labeled with a sequence of numbers, which will then be hidden. The goal of the player is to correctly select the buttons in the correct order, in which case the time taken will be recorded, stored, and shown on leaderboards.


### Elevator pitch

We all know the basic memory games such as Simon and matching. However, sometimes they can be a little bland and repetitive. My startup aims to create a game that will bring another memory game that will help the stale memory market.

A set of squares will be marked with a sequence of numbers for a few seconds. The numbers will then be hidden, and the user will then click the squares in the order provided. If the user gets the sequence of squares wrong, the squares will flash the order again for a few seconds and they will try again. When they complete the order successfully, the website will show the time taken to complete the game and store it in a leaderboard. There will be difficulty selection from a sequence of 10 squares up to 25 squares.

### Design

![Design image](designPicture.png)

Here is a sequence diagram in which User 1 completes a game when User 2 and User 3 is on. User 1 also looks at the leaderboard to see where their score lies.

```mermaid
sequenceDiagram
    actor User 1
    actor User 2
    actor User 3
    User 1->>Server: Completed Game Difficulty and Time
    Server->>User 1:Leaderboard information
    Server->>User 2:User 1 Completed Game
    Server->>User 3:User 1 Completed Game
```

### Key features

- Tiered difficulty with accompanying leaderboard categories
- Secure login and storage of best times
- Display and hiding of the sequence of squares
- Feedback and reset when clicking the wrong square
- Automatic showing of completion times to those concurrently on the website

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Using correct HTML structure for application. At least 3 different pages, one for login, one for the memory game itself, and one for the leaderboards.
- **CSS** - Usage of CSS to make the website look good on many different devices and screen types.
- **React** - Provides login, difficulty selection and game buttons, interactive leaderboard with multiple tabs for different difficulties.
- **Service** - Backend service with endpoints for:
    - Login
    - Retrieving best times on difficulties
    - Logging new best times on difficulties
- **DB/Login** - Persistent storage of difficulty and best times for user in a database. Secure login and registration. Anonymous users can still play the game, but will not log the time and difficulty into the leaderboard.
- **WebSocket** - As a user completes a game, the difficulty and time taken is broadcasted to everybody else on the site.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Git commit requirement)
- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology including your 3rd party API and use of WebSocket
- [ ] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Rented EC2 server** - I did not complete this part of the deliverable.
- [ ] **Leased domain name** - I did not complete this part of the deliverable.
- [ ] **Server accessible** from my domain: [https://yourdomainnamehere.click](https://yourdomainnamehere.click) - I did not complete this part of the deliverable.

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Visually appealing colors and layout. No overflowing elements.** - I did not complete this part of the deliverable.
- [ ] **Use of a CSS framework** - I did not complete this part of the deliverable.
- [ ] **All visual elements styled using CSS** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing using flexbox and/or grid display** - I did not complete this part of the deliverable.
- [ ] **Use of a imported font** - I did not complete this part of the deliverable.
- [ ] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.
- [ ] **Uses BCrypt to hash passwords** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
