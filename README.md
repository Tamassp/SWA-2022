# SWA-2022
Single Page Web Application Assignment

The pages are using the weather report as server.

Server can be found at: https://github.com/olehougaard/weather_report


In order to make it work with the current folder structure, the following lines were added in the server.js file.

app.use(express.static('../SWA-2022/post/'))
app.use(express.static('../SWA-2022/show/'))

Also, the following line was removed:
app.use(express.static('static'))

