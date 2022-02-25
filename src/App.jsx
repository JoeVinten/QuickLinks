import { useState } from "react"
import "./App.css"

function App() {
	const [output, setOutput] = useState("https://www.ticketmaster.co.uk/")
	const [artistUrl, setArtistUrl] = useState("")
	const [venueID, setVenueId] = useState("")

	const handleSubmit = (event) => {
		event.preventDefault()
		handleOutput()
		setArtistUrl("")
		setVenueId("")
	}

	const handleOutput = () => {
		const urlParams = artistUrl.split("https://www.ticketmaster.co.uk/")
		const splitParams = urlParams[1].split("/artist/")
		console.log(splitParams)
		const finalUrl = `https://www.ticketmaster.co.uk/${splitParams[0]}/venueartist/${venueID}/${splitParams[1]}?calendar_view=1`
		setOutput(finalUrl)
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<p>Quick Links</p>
			</header>
			<form className='Form-area' onSubmit={handleSubmit}>
				<label htmlFor='artistUrl'>Enter your url:</label>
				<input onChange={(event) => setArtistUrl(event.target.value)} value={artistUrl} name='artistUrl' type='text' />
				<label htmlFor='venueID'>VenueID:</label>
				<input onChange={(event) => setVenueId(event.target.value)} value={venueID} name='venueID' type='text' />
				<button>Submit</button>
			</form>
			<div className='Output'>
				<p>Output:</p>
				<div>{output}</div>
			</div>
		</div>
	)
}

export default App
