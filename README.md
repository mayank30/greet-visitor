# Greet Visitor

Greet your Visitors with Good Morning, Good Afternoon or Good Evening Message using JavaScript

## Install using npm

```bash
npm install greet-visitor
```

## Sample Output - with emoji

| Time Range    | Output            |
| ------------- | ----------------- |
| < 12          | 🌞 Good Morning   |
| >= 12 - <= 17 | 🌞 Good Afternoon |
| >= 17 - <= 20 | 🌓 Good Evening   |
| >= 20 - <= 24 | 🌒 Good Night     |

#### Configurable Default Options

```
{
    "emoji": true,
    "morning": "Good Morning",
    "noon": "Good Afternoon",
    "evening": "Good Evening",
    "night": "Good Night",
}
```

#### Sample Code

```javascript
var greet = require("greet-visitor");

greet();
// Based on system default time it will show different messages. as mentioned above
```

## Sample Code with Option Change

```javascript
var greet = require("greet-visitor");

greet({emoji: false, noon: "Good noon !"});

// Output- at noon
Good noon !

// Output- in morning
Good Morning
```

## License

MIT
