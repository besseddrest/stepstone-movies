l# StepStone Movies

Movie lookup tool, made with TMDB API.

## Requirements


### yarn

This app uses `yarn` as it's package manager. You can install it via Homebrew:

```
brew install yarn
```

### Node

My Node version is `v20.10.10`. Recent versions should work fine but if you are running an older version, you can either update or switch between different versions using `nvm`.

### Authorization

You'll need your own API key from TMDB. Copy that key and create a `.env` file at root with the following content:

```
// .env

VITE_TMDB_API_KEY=<key>
```

You may need to restart your server if you tried running the app already.

## Run Locally

```
yarn

yarn dev
```

The app should be ready to view at `http://localhost:5173`

## Design considerations

- React: preferred
- Vite: fast local development, easy setup, lightweight
- Material UI: Tyler mentioned the role involves working closely w MUI. I've recent exp working with it (Core + React Native Paper), but thought that this is a good opportunity for me to dive in.
- Jest: BDD with jest/jest-cucumber. jest-cucumber allows me to leverage Gherkins syntax for feature files
. Was recently introduced to this (Gherkins/Cucumber) and wanted to continue using it with a more 'current' testing platform
- AUTH: I ran into a really odd issue trying to implement auth via header options in request + API read access token. Apparently this auth method was added recently, and I have an older tmdb account (I've played around with this API before). Long story short, my read access token would work for 1 maybe 2 requests, then the token would magically change, and I would be denied for not having a valid key. I'm still not quite sure if the age of my account was a factor, but I chose to move on and the `api_key` is just sent in the request uri.
- API v3: I think v4 is relatively new but requires the method above
- No Autocomplete: part of original draft but ultimately decided to keep it simple. In the context of a movie db, I'm assuming the user knows exactly what they are searching for - we aren't suggesting what to watch next, a la Netflix
- the search results are filtered in the client before render, since their Search API seems limited. Their Discover API is a bit more robust, but Search made it easy to get movies by title.
- btw I use Neovim

## Other

The auth issue set me back a little, so if I had extra time, there are a number of things that I would have addressed before submission

- dark/light mode toggle
- improve animations/loading
- if the prompt was more of a streaming app - would have attempted to make it so
- improve logic trimming overview
- tighten up movie poster bg with card layout
- better movie detail overlay, with more metadata

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




