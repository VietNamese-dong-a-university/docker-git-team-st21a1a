import React from "react";

class Home extends React.Component {
    render(){
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Welcome to Our Platform</h1>
            <p>Explore exciting videos and learn more about the world around you.</p>
            <div style={{ marginTop: "20px" }}>
                <h2>Featured Video</h2>
                <video width="600" controls>
                    <source src="video-url.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p style={{ marginTop: "10px" }}>
                    <strong>Title:</strong> Amazing Nature <br />
                    <strong>Description:</strong> A breathtaking journey through nature is wonders.
                </p>
            </div>
        </div>
    );
}
}

export default Home;
