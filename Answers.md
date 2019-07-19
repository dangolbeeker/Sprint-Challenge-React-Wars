

# Answers


    What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a javascript library used to create user interfaces. React solves the problem of scalability.

    What does it mean to think in react?

To look at UI in components and seperating the concerns of each component into very small pieces of code.

    Describe state.

State is the data stored in your app at a specific time. It's like water. The state of water is dependant on the temperature which determines whether it is solid, liquid or gas.

    Describe props.

Props are the inputs that components receive which then components can do actions based on those props.

    What are side effects, and how do you sync effects in a React component to state or prop changes?

A "side effect" is anything that affects something outside the scope of the function being executed. These can be, say, a network request, which has your code communicating with a third party (and thus making the request, causing logs to be recorded, caches to be saved or updated, all sorts of effects that are outside the function. You use the useEffect hook to preform side effects in function components.