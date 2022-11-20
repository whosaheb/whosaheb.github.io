//******************* add jquery and bootstrap.min.js ************/
var jQueryScript = document.createElement('script');
jQueryScript.src = 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js';
jQueryScript.integrity = 'sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj';
jQueryScript.crossOrigin = 'anonymous' 
document.getElementById('jsLoader').appendChild(jQueryScript);

var btStrpScript = document.createElement('script');
btStrpScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js';
btStrpScript.integrity = 'sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF';
btStrpScript.crossOrigin = 'anonymous' 
document.getElementById('jsLoader').appendChild(btStrpScript);

//// /////////////////////////    Common header and footer object ///////////////////////////
const headerFooter = {
    header: 
    `<nav class="navbar navbar-expand-sm navbar-dark">
        <a class="navbar-brand 	d-sm-none d-block" href="#">WHOSAHEB</a>
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav px-4 py-sm-4">
                <li class="nav-item">
                    <a class="nav-link" href="/">01&nbsp;:&nbsp;Home</a>
                    <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/works.html">02&nbsp;:&nbsp;Works</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about.html">03&nbsp;:&nbsp;About me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact.html">04&nbsp;:&nbsp;Contact</a>
                </li>
            </ul>
        </div>
    </nav>`,

    footer: 
    `<div class="text-center text-light p-4">
        whosaheb &copy; <span class="current-year"></span>
    </div>`
}

/// add common header to the page
let pageNav = document.getElementsByTagName('header')[0]
if( pageNav ) pageNav.innerHTML = headerFooter.header;

/// add coomon footer to the page
let pageFooter = document.getElementsByTagName('footer')[0]
if(pageFooter) pageFooter.innerHTML = headerFooter.footer;

/// add active link to the menu link
var activeurl = window.location.pathname;
var els = document.querySelector("a[href='"+activeurl+"']");
els.classList.add('active')
// console.log(els.innerHTML)

window.onload = function() {
    //j query works only under the page only
    $(".current-year").html(new Date().getFullYear());

    // var activeurl = window.location.pathname;
    // (activeurl == '/' ? $('a[href="/"]').addClass('active') : $('a[href="'+activeurl+'"]').addClass('active'))
    // $('a[href="'+activeurl+'"]').addClass('active');

    // var pagePathName= window.location.pathname;
    // let page = pagePathName.substring(pagePathName.lastIndexOf("/") + 1);

    // console.log('fh',activeurl);
    // var text = $('a').attr('href');
    // alert(text);
}