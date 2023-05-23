<h2>Stan technical test - James Waller</h2>

To fire up run:

In `root` directory...

### `yarn`

Then open a new terminal tab and navigate to the `api` folder. Then run the below to start `json-server`...

### npx json-server --watch data.json

Then move back to the first terminal tab and run....

### `yarn dev`

Open [http://localhost:8080/#/](http://localhost:8080/#/) to view it in the browser.

Api can be found here: [http://localhost:3000/titles](http://localhost:3000/titles)

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `Questions:`

<b>How did you decide on the technical and architectural choices used as part of your solution?</b>

I decided to use `json-sever` to host the data locally, the data is then fetched using a `useApi` hook and stored in an `API Context`. From there I decided to manipulate the data within the `Carousel` and `Program` container components and pass that data down to the dumb components I created to hold the data. I used `React/Typescript` with `Styled Components` for the UI and tried to keep the code as clean, scalable and re-useable as possible.

<b>Are there any improvements you could make to your submission?</b>

I would of like to of spent a bit more time testing, I have wrote quite a few tests that cover a lot of the app but you can always write more and given more time I would of liked to have done so.

<b>What would you do differently if you were allocated more time?</b>

Not necessarily if I had more time but I would probably of used Material UI component library if I was able to use other JS and CSS frameworks, this would of saved on a lot of Styled Components and the need for me to build my own carousel.

As well as this, as mentioned above I would have like to write more tests given a bit more time.

<b>Test Feedback</b>

Minor point, but with the Program page there is a part in the design provided that lists the amount of seasons each show has, I couldn't find where to grab this data, if it is actually part of the provided data I must of missed it or maybe it wasn't there.

Any questions feel free to reach out to me  [james.waller1984@gmail.com](james.waller1984@gmail.com).

 