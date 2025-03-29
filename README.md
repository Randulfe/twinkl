# Twinkl React Tech Test

## Potential improvements

Having more time/ a non mocking API I could have:

- Implemented debouncing with an API filtering instead of doing it in the FE which can be inefficient if there are many posts. Debounce the search input.
- Infinite scroll view of posts using a cursor based pagination with Tanstack Query where the user will retrieve more posts when the scroll down happens.
- Storybook test for `Page.tsx` mocking the `web` module.
- Unit test for the `useDebounce` hook that I ended up not using.
- Show full post details on click that could have an accordion like behavior where if the user clicks a post the title and body of it expands to more lines below taking further space.
- Individual pages for posts using react router.
- Edit post functionality.
- A toast for the post deletion error message to prevent content shift.

## Task description

You are tasked with creating a React application that interacts with a Posts management API (https://jsonplaceholder.typicode.com/posts) to perform CRUD operations (Create, Read, Update, Delete). The application should be implemented using TypeScript and designed to be production-ready.

Refer to the guide on how to use the jsonplaceholder API:
https://jsonplaceholder.typicode.com/guide/

#### Time Limit: We don't expect you to spend longer than 3 hours on this task. If you'd like to capture any decisions, thoughts, or next steps you would take, feel free to do so.

#### Requirements

##### Fetch and display posts

- Implement a component that fetches the list of posts from https://jsonplaceholder.typicode.com/posts - [X]
- Display all fetched posts in a list format. - [X]

##### Search mechanism

- Implement a search bar that allows a user to search for posts by title and display only the desired posts. The search should be triggered on change. - [X]

##### Delete post

- For each post in the list, provide a "Remove" button. - [X]
- Implement the functionality to delete a post when the "Remove" button is clicked, using the appropriate server-side REST API method DELETE. - [X]

##### Testing

- Write sufficient tests to satisfy a production-ready application. - [X]

##### Documentation

- Add appropriate documentation for your application. - [ ]

#### Wireframes

##### Mobile

![mobile_view](src/assets/mobile_view.png?raw=true)

##### Desktop

![pc_view](src/assets/pc_view.png?raw=true)

## Getting Started

### Prerequisites

- Node.js: Ensure you have Node.js version 20 or higher installed.

### Installation

#### Clone the repository:

```
git clone https://github.com/twinkltech/twinkl-react-tech-test.git
```

```
cd twinkl-react-tech-test
```

#### Install dependencies:

```
yarn
```

### Scripts

#### Development Server: Start the development server.

```
yarn dev
```

#### Lint: Lint the codebase.

```
yarn lint
```

#### Lint & Fix: Lint and automatically fix issues in the codebase.

```
yarn lint:fix
```

#### Format: Format the codebase using Prettier.

```
yarn format
```

#### Test: Run the test suite.

```
yarn test
```
