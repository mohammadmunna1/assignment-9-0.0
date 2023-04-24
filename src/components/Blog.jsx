import React from 'react';

const Statistics = () => {
    return (
        <div className="py-4 px-4 lg:px-8 xl:px-16">
            <div className="container mx-auto py-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-7 text-center text-lime-400">Welcome to Blog Page</h1>
      <div className="flex flex-wrap mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">When to use Context API?</h2>
          <p className="text-lime-800 leading-loose">
          When we need to transfer data between components that are not explicitly connected by parent-child relationships, the context API comes in handy. It gets rid of the requirement to pass props through
components in the middle. Additionally, it comes in handy when components that are deeply nested in the component tree need to share state.

          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">What is a custom hook?</h2>
          <p className="text-lime-800 leading-loose">
          Utilizing a custom hook function enables us to share stateful logic between other components. It is a method for separating apart and sharing non-rendering functions, such as data retrieval, form input handling, and timer management. The "use" prefix is used to construct unique hooks, such as "useFetch" or "useForm".

          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">What is useRef?</h2>
          <p className="text-lime-800 leading-loose">
          Using the useRef hook, we may establish a mutable reference to a DOM node or a persistent value across views. It is helpful for accessing DOM nodes, controlling focus, or maintaining a value across renders without requiring a re-render. We invoke the useRef hook and pass an initial value to build a ref. A "current" attribute on the returned object can be applied to either a DOM node or a value.

          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">What is useMemo?</h2>
          <p className="text-lime-800 leading-loose">
          React's useMemo hook enables us to store the output of a function call and prevent pointless recalculations. Using useMemo, we can make our program run faster by avoiding needless repetition of costly calculations.
          Only when one or more of the dependencies in the second parameter change does the function we supply as the first argument when using useMemo be used. The previous useMemo call's cached result is returned if none of the dependencies change.
</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Statistics;