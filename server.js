// init modules
const express = require('express')
const path = require('path')
const { spawn } = require('child_process')

// config app for serving static files
const app = express();
app.use('/scripts', express.static(path.join(__dirname, 'scripts')))
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use('/hand_detection', express.static(path.join(__dirname, 'hand_detection')))
app.use('', express.static(path.join(__dirname)))

// serves index.html when http://localhost:8000 requested
app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname,'index.html'))
})

// executes python hand-data streamer when http://localhost:8000/handDataStream requested
app.get('/handDataStream', (req, res)=>{
	const childPy = spawn('python3', ['hand_detection/handDataStreamer.py'])
  res.end()
})

// executes python hand-data reader when http://localhost:8000/handDataRead requested
app.get('/handDataRead', (req, res)=>{
	const childPy = spawn('python3', ['hand_detection/handDataReader.py'])

	childPy.stdout.on('data', (data)=>{
		handData = data.toString()
		res.json(handData)
	})

	childPy.stderr.on('data', (data)=>{
		console.error('stderr: ',data.toString())
		res.end()
	})
})

// listen for requests made on port 8000
app.listen(8000)
