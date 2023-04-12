import React from 'react';

const Blog = () => {
    return (
<>
        <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl text-center">Frequently Asked Questions</h2>
            <p className="mt-4 mb-8 dark:text-gray-400"></p>
            <div className="space-y-4">
                <details className="w-full border rounded-lg mb-8 bg-slate-100">
                    <summary className="px-4 py-6 focus:outline-none  focus-visible:ring-violet-400 font-semibold">1.When should you use context API?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> The Context API in React is used to manage global state that needs to be accessed by multiple components in a tree hierarchy, without the need to pass props down the component tree manually.</p>
                </details>
                <details className="w-full border rounded-lg bg-slate-100">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">2.What is a custom hook?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. </p>
                </details>
                <details className="w-full border rounded-lg bg-slate-100">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">3.What is useRef?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">One of the various hooks included in React is the useRef hook; it is used to reference an object inside a functional component and preserves the referenced object's state between re-renders.</p>
                </details>
                <details className="w-full border rounded-lg bg-slate-100">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold">4.What is useMemo?</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">UseMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
                </details>
            </div>
        </div>
    </section>
    </>
    );
};

export default Blog;