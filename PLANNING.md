# BFS6: Kickball

- Due: January 3rd
- Netlify Link -> 

## Learning Objectives

- Create the illusion of multiple pages in a Single Page Application routes by using react-router.
- Use props.match.params or the useParams hook to get the :id in a path for creating a List/Detail pattern with react-router.
- Use <Link> to create links that navigate a Single Page Application.
- Use .map to iterate over an array and render elements for each item in an array.
- Use useState to manage component state.
- Use useEffect to manage component effects.
- Use conditional rendering to dynamically render items to the screen.
- Use CSS modules to manage component-level styling.
- Description
- You are building your local league’s kickball directory. The league has many teams, and each team has many players. Each player has an assigned position on the field.

* You have been tasked with building out the following views:

- [X] Teams List
  A page that lists all the teams in the league.
- Team Detail
  A page that shows the details for a single team, such as their name and logo, and players.
- [x] Players List
  A page that lists all players in the league.
- [x] Player Detail
  A page that shows the details for a single player, such as their name and position.

* Acceptance Criteria

- [x] user can view a list of teams
- [] user can select a team from the list and see details about that team, as well as the players on that team
- [] user can select a player from the team detail view and view more info about them
- [x] user can view a list of all players in the league
- [x] user can select a player from the list and view more info about them
- [] Each view has an associated test

### TO-DO

- [x] Create dev branch
- [x] add supabase key/url 
- [x] Github secrets
- [x] Netlify variables
- [x] Create views/ with
  - [x] Home.js
  - [x] Player.js
  - [x] Players.js
  - [x] Teams.js
  - [x] Teams.js
- [x] Create components/ with
  - [x] PlayerDetail.js
  - [x] TeamDetail.js
  - [x] TeamList.js
  - [x] PlayerList.js

- [x] set Home Page as landing page
  - [x] w/navigation bar rendered on each view
- [x] set up routes
- [x] set up NavLink


- [x] add loading state

### testing
- render
  - react router? -> memory router
- wait for stuff
- snapshot 