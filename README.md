# IBMocha

### A Caffeinated Solution To Privacy

```
Modern Problems Require Modern Solutions
```

![IBMocha Home Page Image](https://raw.githubusercontent.com/ajwad-shaikh/IBMocha/master/screenshots/IBMocha_1.png)

In the race to big data solutions and data-driven analytics, it is important to preserve the privacy of the information source as data propagates into the loops of the Internet.

IBMocha is a hack on IBM Watson NLU tools to utilize the power of Machine Learning Cloud Infrastructure to redact sensitive information on the Internet.

If you are a web-admin, you can use this code to look for potential exposure of private data on your pages. This can help you screen your website for possible **GDPR Violations**.

IBMocha is also modelled to target the recent [outbreak of Aadhaar Card Data](https://github.com/fs0c131y/AadhaarSearchEngine) that exploited search engine crawlers.

### Exposures Identified

1. Individual Names

2. Location

3. Email Addresses

4. Phone numbers

5. Aadhaar Numbers (primitive) (XXXX-XXXX-XXXX format)

### Development

1. Clone repo

    `git clone https://github.com/ajwad-shaikh/IBMocha.git`

2. `cd IBMocha`

3. Install dependencies

    `npm install`

4. `npm install nodemon -g`

5. `npm run serve` (`win-serve` if Windows Machine)

### Usage

1. open `localhost:8008`

2. There are two modes of input - **Text** and **URL**

3. **URL Mode** - Enter URL and click on submit to analyse the website for personal information exposure using **IBM Watson NLU Service**

![IBMocha URL Input](https://raw.githubusercontent.com/ajwad-shaikh/IBMocha/master/screenshots/IBMocha_3.png)

![IBMocha Exposures](https://raw.githubusercontent.com/ajwad-shaikh/IBMocha/master/screenshots/IBMocha_4.png)

4. **Text Mode** - Enter text and click on submit to analyse the text for personal information exposure using **IBM Watson NLU Service**.

![IBMocha Text Exposures](https://raw.githubusercontent.com/ajwad-shaikh/IBMocha/master/screenshots/IBMocha_2.png)

![IBMocha Corrective Exposures](https://raw.githubusercontent.com/ajwad-shaikh/IBMocha/master/screenshots/IBMocha_5.png)

5. Text Mode also renders a redacted preview that masks personal information.

![IBMocha Redaction](https://raw.githubusercontent.com/ajwad-shaikh/IBMocha/master/screenshots/IBMocha_7.png)

### Further Development

* Include PDF file input.
* Include redacted website preview.
* Include PDF output.


![IBMocha Full screenshot](https://raw.githubusercontent.com/ajwad-shaikh/IBMocha/master/screenshots/IBMocha_6.png)
