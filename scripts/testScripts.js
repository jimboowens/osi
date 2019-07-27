let testPage = document.querySelector('.testPage')
let testHTML=document.querySelector('html')


let testPageHTML = `
    <nav class="grey lighten-2 z-depth-5 testNavBar">
        <ul>
            <li><a class="OSIJobs waves-effect waves-light" href="/">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect waves-light navOptions about">About Us</a></li>
            <li><a class="waves-effect waves-light navOptions contact">Contact Us</a></li>
            <li><a class="waves-effect waves-light navOptions employerServices">Employer Services</a></li>
            <li><a class="waves-effect waves-light navOptions ventureCapitalPartnership">Venture Capital Partnership</a></li>
            <li><a class="waves-effect waves-light navOptions jobListings" >Job Listings</a></li>
        </ul>
        <div id="dropdown" class="show-on-med-and-down"><a>Menu</a></div>
        <div id="panel" class="col s4 offset-s8 show-on-med-and-down">
            <a class="waves-effect waves-light dropdownOptions grey lighten-2 about">About Us</a>
            <a class="waves-effect waves-light dropdownOptions grey lighten-2 contact">Contact Us</a>
            <a class="waves-effect waves-light dropdownOptions grey lighten-2 employerServices">Employer Services</a>
            <a class="waves-effect waves-light dropdownOptions grey lighten-2 ventureCapitalPartnership">Venture Capial Partnership</a>
            <a class="waves-effect waves-light dropdownOptions grey lighten-2 jobListings" >Job Listings</a>
        </div>
    </nav>
    `+`
    <div class="testPageContent">
        <div class="testHeaderDiv grey lighten-2">
            <div class="headerText">Test Page</div>  
        </div>
        <div class="container">
            <div class="container insideContainer">This is a test container</div>
        </div>
        <div class="testHeaderDiv grey lighten-2">
            <div class="headerText">Test div</div>
        </div>
        <div class="container">
            <div>this is the test container</div>
        </div>
    </div>
    `+`
    <nav class="nav-wrapper grey lighten-2 z-depth-5 hide-on-med-and-down testFooter">
        <ul>
            <li><a class="OSIJobs waves-effect waves-light" href="/">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
        </ul>
        <ul>
            <li>© 2019 All Rights Reserved</li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect waves-light navOptions about">About Us</a></li>
            <li><a class="waves-effect waves-light navOptions contact">Contact</a></li>
            <li><a class="waves-effect waves-light navOptions jobListings" >Job Listings</a></li>
        </ul>
    </nav>
`

$(document).ready(()=>{
    $(".testPageLink").click(()=>{
        // window.history.pushState(null, 'Title', '/testPage')
        $(testPage).html(testPageHTML)
        $(main).html('')
        $(navBar).html('')
        $(footer).html('')
        $(testHTML).css({
            "height":"220vh",
            // "background-image":"linear-gradient(#4fd1d100,#062F4F), url('../public/images/test-background.jpg')",
            "background-image":"linear-gradient(rgba(79, 209, 209, 0.8), rgb(6, 47, 79)), url('../public/images/test-background-2.jpg')",
            "background-color":"#062F4F",
            "background-size":"cover",
            "color":"#062F4F",
        })
        
    })
})