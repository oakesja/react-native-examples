# React, React Native, Redux example
This repository contains three projects, a [domain-layer](domain-layer/Readme.md) that holds the common business logic that is used by both an [Android React Native UI](native/Readme.md) and a [React web UI](web/Readme.md). This is a proof of concept that business logic can be shared between a native and web application. 

## UIs
Both UIs follows the idea of [presentational vs container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). This allows you to separate your state and actions from the actual presentation. Presentational components use React and are modular, stateless, reusable. This is because all of their data and action are passed in using props. Container components are generated using react-redux and pass in state and actions to presentational components.
