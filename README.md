:warning: This project is not released :warning:

# node-betaseries

A modern node.js SDK to wrap [betaseries HTTP API](https://www.betaseries.com/api/).
It helps find information about series and movies.

## Why this module

- compliant with Ecmascript 2015+

## Getting started

```bash
$ npm install node-betaseries
$ yarn add node-betaseries
```

```javascript
import { init  } from 'node-betaseries'

init({
  apiKey = '2233cc194fb0', // you api key to get on http://betaseries/api website
  userAgent = 'my-own-user-agent', // in order to differentiate traffic
})


```

## Roadmap

## More

### Documentation about Betaseries

- [HTTP API documentation](https://www.betaseries.com/api/docs)
- [Bug tracker](https://www.betaseries.com/bugs/api)
- [Discussion group](http://groups.google.com/group/betaseries)

### Other node.js libraries for betaseries

- https://github.com/mebibou/node-betaseries
- https://github.com/deStrO/node-betaseries

### Other libraries for movies and series

- https://api.thetvdb.com
- https://github.com/edwellbrook/node-tvdb
- https://github.com/enyo/node-tvdb
