# Myxx Code Challenge

This application was deployed using Heroku and can be found [here](https://myxx-code-challenge.herokuapp.com/).

## The Goal

My goal was to deliver a single-page web application based designer mockups that utilize the SpaceX API to showcase details regarding the following 4 SpaceX rockets:

- _Falcon 1_
- _Falcon 9_
- _Falcon Heavy_
- _Starship_

![](https://user-images.githubusercontent.com/3980464/114952973-662aed80-9e25-11eb-8fd9-f5a120813e5e.png)

**Notes**: When the user clicks on a rocket, a full-screen modal will appear with the details about that respective rocket. To close the modal, the user will press the `x` in the top left hand corner.

## Resources and Information

The resources used to create this web application were pre-loaded, and the SpaceX API which was used can be found [here](https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md).

One of the great things about this API is that it only requires an API Key for destructive routes (i.e. `create`, `update`, and `delete` routes), whereas this web app only uses a 'get' route in order to access the info. Typically I would use dotenv to hide my API key, but since no API key is required, there is no risk from a security standpoint.

## Personal Notes

API calls are made using [Axios](https://github.com/axios/axios). Because there are only a limited number of SpaceX rockets, I considered performing a `get` on rendering which would pull information for all the rockets. However, in order to keep the app more agile in case of changes or additions to the SpaceX API, I decided to perform this action upon clicking on any of the rockets on the main page. This way there are no API calls while the page is trying to load, and it only gets the information for one specific rocket (using that rocket's ID) when opening the modal.

The most time-consuming part of this project was working on the front-end. In the past, I've typically made use of a more minimalist design while focusing on the back-end functionality. In my most recent side-project ([Dark Patterns- deployed but still under construction](https://dark-patterns-324.herokuapp.com/)), I've had the opportunity to focus more on the front-end, but focusing more on the flow and patterns that appear during a step-oriented process. As such, this project was a great opportunity to focus on a more holistic approach to web app presentation, such as creating divs whose child elements align from the bottom up (rather than either top-down or cluttering up at the bottom at the same line-level) and using basic, appealing animations for hover effects.

Due to time constraints and familiarity, I used React-Bootstrap rather than Material-UI. This project was made using React, and due to the limited scope there are very few individual components (4 components and a main page). Modal effects were made using [React-Modal](https://www.npmjs.com/package/react-modal).

As I mentioned, I built this app in such a way that I believe would make it easy to either add new rockets, remove rockets, change the data that appears in the modal, or make small changes to my code in case the SpaceX API changed their schema. This is one of the potential pitfalls of using a 3rd-party API, but by making API calls only upon selecting a rocket, I believe I've made these changes easier to manage.

So far I am submitting the MVP, but the next steps are to work on documentation, mobile responsiveness, and testing.

## Getting Started

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

I have not yet written unit tests, but this will launch the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

The build is minified and the filenames include the hashes.\
