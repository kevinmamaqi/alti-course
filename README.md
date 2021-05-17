# React Alten Course
What is React? It's a **library** to build user interfaces by FB.
Why React? It's fast, it's popular, you can use it also to build native and even desktop apps.

## What is particular about React?
- Language JSX, how it mixes CSS, HTML and JS.
- Can be used in different environments (mobile, desktop and web).
- Due to JSX, we can have a tightly integrated component oriented app.
- Pass data from parent to children components, only. To get data from
    the children component we have to use a callback function.


## Nice to have's in the development environment
- Prettier: to format the code.
- Eslint: to lint the code.
- Browser & split screen.
- jsconfig.js to allow absolute paths.
- Folder structure + styled-components.

## React design/development patterns
1. Attomic design: https://bradfrost.com/blog/post/atomic-web-design/
2. Functional programming: less state = better
3. Singleton to manage the store. Each component subscribes to it and there's only one.

## React hooks
1. useState(). Allows us to control the state of the component. Has two parameters, the state itself and the method to update it.
2. useEffect(). Allows us to perform side-effects. It has a dependency array that will make it execute each time the parameters change.
3. useRef(). Allows us to reference a specific DOM element, as accesing it directly from the ID or other DOM properties is not recommended.