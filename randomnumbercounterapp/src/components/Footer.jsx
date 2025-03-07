
function Footer(){
    return(
        <footer className="footer">
    <div className="footer-container">
        <div className="footer-section">
            <h3>About Us</h3>
            <p>We are a team of passionate developers creating user-friendly applications.</p>
        </div>
        <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Twitter</a>
                <a href="#" className="social-icon">Instagram</a>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2025 Random Number & Counter App. All Rights Reserved.</p>
        <p>Designed by Mukshith</p>
    </div>
</footer>

    )
}

export {Footer};