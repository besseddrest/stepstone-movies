# StepStone Movies

Movie lookup tool, made with TMDB API.

## Design considerations

- React: preferred
- Vite: fast local development, easy to use, lightweight
- MUI: I have only recent exp w/ Material UI (Core & React Native Paper), so this is a great opportunity to dive into it since it's part of the role
- Jest: BDD with jest/jest-cucumber. jest-cucumber allows me to leverage Gherkins syntax for feature files
. Was recently introduced to this (Gherkins/Cucumber) and wanted to continue using it with a more 'current' testing platform
- btw I use Neovim

- Authorization: would have preferred to authorize via header options in request but something odd was happening with my read access token; it kept changing after every few requests! Decided to move on after looking for answers with no success. Authorization is via `api_key` in URI per request.
- No Autocomplete: part of original draft but ultimately decided to keep it simple. In the context of a movie db, I'm assuming the user knows exactly what they are searching for, rather than suggestion of what they should watch next, a la Netflix


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




