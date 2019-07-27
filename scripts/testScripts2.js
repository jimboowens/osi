let testPage2 = document.querySelector('.testPage')
let test2HTML = document.querySelector('html')
let test2BODY = document.querySelector("body")

let testPage2HTML=`
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
    <div class="parallax">
        <div id="group1" class="parallax__group">
            <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer 1</div>
            </div>
        </div>
        <div id="group2" class="parallax__group">
            <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer 2</div>
            </div>
            <div class="parallax__layer parallax__layer--back">
                <div class="title">Background Layer</div>
            </div>
        </div>
        <div id="group3" class="parallax__group">
            <div class="parallax__layer parallax__layer--fore">
                <div class="title">Foreground Layer</div>
            </div>
            <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer 3</div>
            </div>
        </div>
        <div id="group4" class="parallax__group">
            <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer 4</div>
            </div>
            <div class="parallax__layer parallax__layer--back">
                <div class="title">Background Layer</div>
            </div>
            <div class="parallax__layer parallax__layer--deep">
                <div class="title">Deep Background Layer</div>
            </div>
        </div>
        <div id="group5" class="parallax__group">
            <div class="parallax__layer parallax__layer--fore">
                <div class="title">Foreground Layer</div>
            </div>
            <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer 5</div>
            </div>
        </div>
        <div id="group6" class="parallax__group">
            <div class="parallax__layer parallax__layer--back">
                <div class="title">Background Layer</div>
            </div>
            <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer 6</div>
            </div>
        </div>
        <div id="group7" class="parallax__group">
            <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer 7</div>
            </div>
        </div>
    </div>
`

$(document).ready(()=>{
    console.log('sanity check')
    $(".testPage2Link").click(()=>{
        $(testPage2).html(testPage2HTML)
        $(main).html('')
        $(navBar).html('')
        $(footer).html('')
        $(test2HTML).css({"overflow":"hidden"})
        $(test2BODY).css({
            "overflow":"hidden",
            "font":"100%",
        })
        $("*").css({
            "margin":"0",
            "padding":"0",
        })




        /* body, html {
    overflow: hidden;
    }
    
    body {
    font: 100% / 1.5 Arial;
    }
    
    * {
    margin:0;
    padding:0;
    } */
    })
})