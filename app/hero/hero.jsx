const Hero = () => {
    return (
        <div className="hero" style={{ height: '100vh' }}>
            <div className="heading">
                <div className="hero-h1">NOTESHAALA</div>
                <div className="sign-btn" style ={{height:'2.3rem' , width: '8.25rem'}}>SIGN UP</div>
                
            </div>

            <div className="border"></div>
            <div className="border2">
                <div className="inner-heading1">WELCOME TO</div>
                <div className="inner-heading2">NOTESHAALA</div>
                <img
                src=".../app/images/image.png"
                alt="Example Image"
                width={500} 
                height={30} />
                <div className="p1">Your digital companion for academic excellence. Get ready to revolutionize your</div>
                <div className="p2">study experience!</div>
                
            </div>
            
        </div>
        
    )
}

export default Hero;