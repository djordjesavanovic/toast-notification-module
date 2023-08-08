### Toast Notification Module

The provided module consists of several components, context providers, and styling to enable a flexible toast notification system in a React application. The components are designed to work together, allowing for the addition, display, and automatic removal of notifications with different types and content. The test files ensure that the components behave as expected.

### Example Usage

Wrap the main part of the app with the `ToastProvider` to make the toast functionality available:

    <ToastProvider>
      <App />
    </ToastProvider>

Within the `<App />` component, simply add the `<ToastContainer />` component. This component will hold all the toast.
When you want to show a toast, simply call such a function:

    addToast(type, title, message, duration);

Here's an example:

    addToast('success', 'Success', 'This is a success toast.', 6000);


***

### `Toast.js`

This file defines the `Toast` component used for displaying individual toast notifications.

#### Props

-   `id`: (Number) Unique identifier for the toast.
-   `type`: (String) Type of the toast notification (e.g., success, error, warning). Determines styling and icons.
-   `title`: (String) Title for the toast notification.
-   `message`: (String) Message content of the toast notification.
-   `duration`: (Number) Duration in milliseconds for which the toast will be displayed. Default is 6000.
-   `removeToast`: (Function) A function that is called to remove the toast notification when it is closed or when the duration expires.

#### Behaviour

-   The appropriate icons for the given type are retrieved.
-   A `useEffect` hook sets a timer that will call `removeToast` with the toast's `id` when the specified duration expires.
-   The timer is cleared if the component is unmounted before the duration expires.
-   The toast notification is rendered, including an info icon, title, message, and close button.
-   Clicking the close button will also call `removeToast` with the toast's `id`.

#### Styling

-   The styling for the toast component is imported from `toast.css`.
-   Icons and constants are imported from `./assets/constants`.

### `ToastContainer.js`

The `ToastContainer.js` file defines a functional React component that acts as a container for rendering a collection of toast notifications. This component does not receive any props directly but relies on the `useToast` hook to obtain the necessary information for rendering the toasts. The individual toasts are rendered using the `Toast` component, which is imported from `Toast.js`.

#### Behaviour

-   The component uses a custom hook called `useToast` to access the array of toasts and the `removeToast` function.
-   It maps over the `toasts` array, rendering a `Toast` component for each toast in the array.

#### Styling

-   The component applies the class `"toast-container"` to the outer `div`, allowing for specific styling of the container.

### `ToastProvider.js`

This file defines the `ToastProvider` component and `useToast` hook for managing toast notifications throughout the application.

#### `ToastProvider` Component

This component provides the toast context to its child components.

##### Props

-   `children`: (React elements) Child components that will have access to the toast context.

##### Behaviour

-   Manages an array of toast objects using the `useState` hook.
-   Defines `addToast` to add new toast notifications with a unique ID.
-   Defines `removeToast` to remove a toast notification by its ID.
-   Renders the context provider, making the toasts array and related actions available to child components.

#### `useToast` Hook

This custom hook allows child components to easily access the toast context. It returns the value of the toast context, including the `toasts` array and the `addToast` and `removeToast` functions.

***

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
