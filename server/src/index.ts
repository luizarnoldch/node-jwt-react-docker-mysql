import app from './app'

// Run of server
app.listen(app.get('port'), () => {
	console.log(`Server listening on port ${process.env.PORT || 3000}`)
})
