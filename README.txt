Presentational component: 
    In React, a presentational component is a component that just renders HTML. 
    The component's only function is presentational markup. 
    In a Redux-powered app, a presentational component does not interact with the Redux store.
    The presentational component accepts props from a container component.

Container component:
    The container component specifies the data a presentational component should render. 
    The container component also specifies behavior. If the presentational component has any interactivity — 
        like a button — it calls a prop-function given to it by the container component. 
    The container component is the one to dispatch an action to the Redux store