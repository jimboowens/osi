let main = document.querySelector('.main')
let windowHTML = document.querySelector('html')
let mainBODY = document.querySelector("body")

let mainHTML=`
    <nav class="z-depth-5 navBar">
        <ul>
            <li><a class="OSIJobs waves-effect waves-light navOptions" href="#splash">OSI Jobs</a></li>
            <li><a class="social facebook" href="http://www.facebook.com/pages/OSI/314041371978411" target="blank">f</a></li>
            <li><a class="social linkedIn" href="http://www.linkedin.com/company/2497623" target="blank">i</a></li>
            <li><a class="social twitter" href="http://twitter.com/osifoodjobs" target="blank">l</a></li>
            
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a class="waves-effect waves-light navOptions" href="#about">About</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#jobs">Jobs</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#services">Services</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#partnerships">Partnerships</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#recruiting">Medical Recruiting</a></li>
            <li><a class="waves-effect waves-light navOptions" href="#contact">Contact</a></li>
        </ul>
        <div id="dropdown" class="show-on-med-and-down"><a>Menu</a></div>
        <div id="panel" class="col s4 offset-s8 show-on-med-and-down">
            <a class="waves-effect waves-light dropdownOptions" href="#about">About</a>
            <a class="waves-effect waves-light dropdownOptions" href="#jobs">Jobs</a>
            <a class="waves-effect waves-light dropdownOptions" href="#services">Services</a>
            <a class="waves-effect waves-light dropdownOptions" href="#partnerships">Partnerships</a>
            <a class="waves-effect waves-light dropdownOptions" href="#recruiting">Medical Recruiting</a>
            <a class="waves-effect waves-light dropdownOptions" href="#contact">Contact</a>
        </div>
    </nav>
    <div class="parallax">
        <div id="splash" class="parallax_group">
            <div class="parallax_layer parallax_layer--base z-depth-5">
                <div class="title mainTitle">
                    <h1 class="TestText">Medical Device Recruiting</h1>
                    <h3>Leading the way in Medical Staffing Innovation</h3>
                </div>
            </div>
        </div>
        <div id="about" class="parallax_group">
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 2</div>
            </div>
            <div class="parallax_layer parallax_layer--back">
                <div class="title">Background Layer</div>
            </div>
        </div>
        <div id="jobs" class="parallax_group">
            <div class="parallax_layer parallax_layer--fore">
                <div class="title">Foreground Layer 1</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 3</div>
            </div>
        </div>
        <div id="services" class="parallax_group">
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
        <div id="partnerships" class="parallax_group">
            <div class="parallax_layer parallax_layer--fore">
                <div class="title">Foreground Layer 2</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 5</div>
            </div>
        </div>
        <div id="recruiting" class="parallax_group">
            <div class="parallax_layer parallax_layer--back">
                <div class="title">Background Layer</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 6</div>
            </div>
        </div>
        <div id="contact" class="parallax_group">
            <div class="parallax_layer parallax_layer--fore">
                <div class="title">Foreground Layer 3</div>
            </div>
            <div class="parallax_layer parallax_layer--base">
                <div class="title">Base Layer 7</div>
            </div>
        </div>
    </div>
`

$(main).html(mainHTML)

$(document).ready(()=>{
    
    $("*").css({
        "margin":"0",
    })

    $(".navOptions").hover(
        function(){
            $(this).css("transform","scale(1.2)")
        },function(){
            $(this).css("transform","scale(1)")
        }
    )
})