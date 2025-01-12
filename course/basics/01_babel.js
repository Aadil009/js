/*
What is babel 
    Babel is JS compiler that allows developers to use modern JS features(ES6 and beyond) while ensuring
    compatibility with older environments that may not support them.
    Babel is primarily used to transform modern JS code into a version that can run on older browsers or runtime evns.

Key features
    Transpilation- converts modern JS(ES6+) into ES5, ensuring compatibility with olders browsers
    Pugin System - uses a plugin based architecture, allowing you to add specific functionality such as transforming JS for React or Typescript into JS
    Polyfilling - Through tools like @bable/polyfill or core-js babel include missing features like Pomise, Array.include etc in older environments
    code transformation - supports advanced transformation  like removing debugging statements or optimizing code for production
    supports other languages - can transpile JSX ( for React ) , TypeScript and flow into plain JS

How it works-
    parsing - babel parses the input JS code into an abstract syntax tree (AST)
    Transformation - plugins and presets applied to modify the AST to transform the code as needed.
    code generation - the transformed AST is converted into JS code

Babel Enables usage of the latest JavaScript features without worrying about browser support
*/