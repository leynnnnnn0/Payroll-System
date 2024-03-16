const Loading = () => {
  return (
    <div className="loading screen">
        <div className="please-wait l">
            <h1>Please wait. Data is currently loading</h1>
            <h1>or refresh after 20 or 50 seconds</h1>
            <p>The backend of this website is hosted by a free server that's why it's slow.</p>
        </div>
        <img src="https://c.tenor.com/cRz9UPHxuegAAAAC/gun-bullets.gif" alt="loading... Please wait" />
    </div>
  )
}

export default Loading