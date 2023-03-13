# Greet Visitor

Greet your Visitors with Good Morning, Good Afternoon or Good Evening Message using JavaScript

## Install using npm

```bash
npm install greet-visitor
```

## Sample Output - with emoji

| Time Range    | Output            |
| ------------- | ----------------- |
| >= 3 - <= 12  | 🌞 Good morning   |
| >= 12 - <= 17 | 🌞 Good afternoon |
| >= 17 - <= 20 | 🌓 Good evening   |
| >= 20 - <= 24 | 🌒 Good night     |
| >= 23 - <= 3  | 🌚 Oh! working late night   |

#### Configurable Default Options

```
{
    "emoji": true,
    "morning": "Good morning",
    "noon": "Good afternoon",
    "evening": "Good evening",
    "night": "Good night",
    "midnight": "Oh! working late night",
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
"Good noon !"

// Output- in morning
"Good Morning"
```

## License

MIT
