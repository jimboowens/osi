let testPage2 = document.querySelector('.testPage')
let test2HTML = document.querySelector('html')
let test2BODY = document.querySelector("body")

let testPage2HTML=`
    <nav class="z-depth-5 test2NavBar">
        <ul>
            <li><a class="OSIJobs waves-effect waves-light navOptions" href="/">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
            
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect waves-light navOptions about">About</a></li>
            <li><a class="waves-effect waves-light navOptions contact">Contact</a></li>
            <li><a class="waves-effect waves-light navOptions employerServices">Services</a></li>
            <li><a class="waves-effect waves-light navOptions ventureCapitalPartnership">Partnerships</a></li>
            <li><a class="waves-effect waves-light navOptions jobListings">Jobs</a></li>
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
        <div id="group1" class="parallax_group">
            <div class="parallax_layer parallax_layer--base z-depth-5">
                <div class="title mainTitle">
                    <h1 class="TestText">Medical Device Recruiting</h1>
                    <h3>Leading the way in Medical Staffing Innovation</h3>
                </div>
            </div>
        </div>
        <div id="group2" class="parallax_group">
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 2</div>
            </div>
            <div class="parallax_layer parallax_layer--back">
                <div class="title">Background Layer</div>
            </div>
        </div>
        <div id="group3" class="parallax_group">
            <div class="parallax_layer parallax_layer--fore">
                <div class="title">Foreground Layer 1</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 3</div>
            </div>
        </div>
        <div id="group4" class="parallax_group">
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 4</div>
            </div>
            <div class="parallax_layer parallax_layer--back">
                <div class="title">Background Layer </div>
            </div>
            <div class="parallax_layer parallax_layer--deep">
                <div class="title">Deep Background Layer</div>
            </div>
        </div>
        <div id="group5" class="parallax_group">
            <div class="parallax_layer parallax_layer--fore">
                <div class="title">Foreground Layer 2</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 5</div>
            </div>
        </div>
        <div id="group6" class="parallax_group">
            <div class="parallax_layer parallax_layer--back">
                <div class="title">Background Layer</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 6</div>
            </div>
        </div>
        <div id="group7" class="parallax_group">
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 7</div>
            </div>
        </div>
    </div>
`+`


`

$(document).ready(()=>{
    console.log('sanity check')
    $(".testPage2Link").click(()=>{
        $(testPage2).html(testPage2HTML)
        $(main).html('')
        $(navBar).html('')
        $(footer).html('')
        $(test2HTML).css({
            "overflow":"hidden",
            "color":"#C6DABF",
            "background-color":"#062F4F",
        })
        $(test2BODY).css({
            "overflow":"hidden",
            "font":"100%",
        })
        $("*").css({
            "margin":"0",
            // "padding":"0",
        })
        $(".navOptions").hover(
            function(){
                $(this).css("transform","scale(1.2)")
            },function(){
                $(this).css("transform","scale(1)")
            }
        )
    })
})