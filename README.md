# StepStone Movies

Movie lookup tool, made with TMDB API.

Apologies for inconsistent code formatting as I've recently 
switched editors and still working on finding the right config. 
I use Neovim (btw).

## Requirements


### package manager

This app uses `yarn`. You can install it via Homebrew:

```
brew install yarn
```

### Node

My Node version is `v20.10.10`. Recent versions should work fine but if you are running an older version, you can either update or switch between different versions using `nvm`.

### Auth

You'll need your own API key from TMDB. Copy that key and create a `.env` file at root with the following content:

```
// .env

VITE_TMDB_API_KEY=<your_key>
```

You may need to restart your server if you tried running the app already.

## Run Locally

```
yarn

yarn dev
```

The app should be ready to view at `http://localhost:5173`

## Design considerations

**React + Vite** 

preferred SPA, Vite is great for fast local development, easy setup, &
lightweight

**Material UI**

Terrance mentioned the role involves working closely w MUI. I've recent exp working with it (Core + React Native Paper), but thought that this is a good opportunity for me to dive in.

**AUTH**

I ran into a really odd issue trying to implement auth via header options in request + API read access token. Apparently this auth method was added recently, and I have an older tmdb account (I've played around with this API before). Long story short, my read access token would work for 1 maybe 2 requests, then the token would magically change, and I would be denied for not having a valid key. I'm still not quite sure if the age of my account was a factor, but I chose to move on and the `api_key` is just sent in the request uri, though I think the header auth is a much cleaner solution.

__UPDATE:__ Got clarity on why I was experiencing auth issues - in deciding what
method I wanted to use (back and forth btwn API key and Access Token
auth), while I was testing calls using their API reference (right hand column), the code block they
use to make this test request doesn't update correctly. Access token auth will
use the Bearer token method, but when you switch to use API key, it only
replaces the Bearer token in the header config, rather than replacing the entire
example code block itself.

**API v3**

I think v4 is relatively new but requires the method above

**No Autocomplete**

part of original draft but ultimately decided to keep it simple. In the context of a movie db, I'm assuming the user knows exactly what they are searching for - we aren't suggesting what to watch next, a la Netflix

**Search Results**

the search results are filtered in the client before render, since their Search API seems limited. Their Discover API is a bit more robust, but Search made it easy to get movies by title. Tried to filter for en_US movies that had values for the fields we wanted to display. This leads to a much smaller result set, which helped me be okay with omitting Pagination

## Other

The auth issues set me back a bit, and since I already felt pretty behind, I had
to leave out a number of things. Given some extra time I'd include the
following:

- Unit Testing, BDD with Jest & Gherkins syntax
- Pagination
- dark/light mode toggle
- add animations/loading
- if the prompt was more of a streaming app - would have attempted to make it so
- improve logic trimming movie overview
- overall layout adjustments, specifically pre search and dynamic images
- fallback images, in case not found on server
- additional detail/metadata when viewing Movie Details in modal
- making adjustments to template to ensure good responsive UX
