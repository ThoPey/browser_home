# Browser Home

Change your browser home page to an helpful one where you can access your favorite websites easily.

## Features

1. Create **buttons** linking to any website you want and 
2. Create **categories** to put them in

## Usage

### Step 1

Create a 'data.json' file :
```json
{
	"Category1": {
		"Website1": "https://website1.com",
		"Website2": "http://website2.net",
		"Website3": "https://website1.org"
	},
	"Category2": {
		"Website4": "https://website4.com",
		"Website5": "http://website5.net",
		"Website6": "https://website6.org"
	},
	"Cool stuff": {
		"Github": "https://github.com/ThoPey?tab=repositories",
		"LinkedIn": "http://linkedin.com/",
		"Reddit": "https://www.reddit.com/",
		"Gmail": "https://mail.google.com/mail/u/0/#inbox"
	}
}
```

You can create as much categories and links as you want.

### Step 2

Go to your browser parameters and change the homepage to file:///*path_to_files*/home.html
