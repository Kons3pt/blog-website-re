
function homeButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = "<h1>Welcome to Konsepts Blog</h1><br><br> <h2>Website Navigation</h2> "
    "<p>As I currently have it set up, on the top you have planned updates for the website and an about me section describing why I have decided to log all of my progress.</p><br><br>"
    "<p>On the right side bar is the real blog, how I have it set up is there is currently 5 main groups that will have an overview but will not be updated regularly, the subdivisions will be what is updated. I have a lot of hobbies but I do not have a lot of time to do all of them so some projects will go weeks without being updated.</p><br><br>"
    "<h2>Posting format</h2><br><br>"
    "<p>If I am just going though the motions of practicing, like I do with my art course, I will give an update on a weekly basis on what I did. If I am working on a project then will try to dedicate around 10 minutes at the end of a session to record what I did, anything that I improved or anyting that I had trouble with</p>"
    ;
}
function plannedUpdatesButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '\
    <h1>Planned updates</h1>\
    <h2>These planned updates are a note for you and myself <br>I hope to fix at least one of the things written here a week</h2>\
    <h3>Once I get into the flow of updating the website I will have a patchnote report on this page</h3>\
    <ul>\
        <li>Make user profiles</li>\
        <li>Make comments on posts possible</li>\
        <li>Make posting process more robust for myself</li>\
        <li>UI overhaul after I learn better website design</li>\
        <li>Make sidebar collapsible</li>\
        <li>Make website more stable on smaller screens, currently only works great with a default desktop monitor</li>\
        <li>Fix some visual overflow errors on UI</li>\
        <li>Add a left side bar that shows recently updated</li>\
        <li>Implement a recomended filter to the recently updated side bar</li>\
    </ul>';
}
function aboutMeButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '\
    <h1>About Me </h1>\
    <p>\
        <h2>Who am I?</h2>\
        My name is Caden, known online as Konsept<br><br>\
        I am a Highschool student working to self-teach myself in many subjects that I would like to get better at.\
        At the moment this consists of Coding, Video Game Design, World Building, 3D Modeling, and Digital Art.<br><br>\
        To find why I want to improve at these things, how I found them in the first place, and\
        how I work to improve on a more technical level, please go to your prefered project on the right side bar.\
    </p>\
    <h2>Initial information</h2>\
    <p>\
        I plan on doing multiple different types of recordings, it will mostly be simple typing documentation like this but\
         I might do different forms of communication later on. This could be audio recordings in the moment, video recordings, visual presentations, etc.\
    </p>\
    <h2>Why Make A Website?</h2>\
    <p>\
        There are two main reasons for this.  The first is that I\
        want to record my progress, which is including times when I get stuck or dont want to do it anymore, to when I\
        can get everything done instantly and learn it immediately. I do this because I believe that going back and thinking \
        about my thought process in the current moment will further my understanding of the subject I am learning about. \
        I also just believe in recording everything I do for later review. \
        <br><br>\
        The second thing is that I want other people, friends, family, peers, and possible employers, to be able to see my\
        thought process and workflow in a casual tone through writing or any other form of communication.\
        <br><br>\
        I also made this website with the intention to use it as a portfolio for projects, completed, currently in progress, \
        and even projects that havent left the whiteboard\
    </p>\
    <h2>How do I teach myself?</h2>\
    <p>\
        There are multiple levels to this topic. First is that I am mainly self taught in these subjects and simply use Youtube or a video equivalent to learn.\
        The two exceptions to this are for coding, I have some experience learning from teachers in school. I also have a structured program for digital art\
         from a professional but I do not have communication with him so I still consider it self-learning.\
         <br><br>\
        The main way I prefer to learn is using the "First Principle", which is an way of thinking where you break down anything you are learning or working on into \
        its very core parts and then learning from the ground up to fully understand the subject at hand.\
        <br><br>\
        If you would like to hear more about this subject please watch <a href="https://www.youtube.com/watch?v=HZRDUZuIKg4&t=387s">this</a> video by Freedom in Thought \
        which goes into more detail on this subject.\
    </p>';
}
function allBlogsButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '\
    <h1>All Blogs</h1>\
    <h2> Currently not in order <h2>\
    ';
}
function contactMeButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '\
    <h1>Contact Me</h1>\
                        <p> You can contact me at</p>\
                        <ul>\
                            <li>Email - cadenl.business@gmail.com</li>\
                            <li>Quick Email -<a href="mailto:cadenl.business@gmail.com">cadenl.business@gmail.com </a></li>\
                            <li>Discord - chronican.</li>\
                        </ul>'
    ;
}
function gameDesignButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>Game Design</h1> <h2>Overview</h2>';
}
function twoDPlatformerButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>2D Platformer</h1> <h2>Overview</h2>';
}
function delveDeepButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>Delve Deep</h1> <h2>Overview</h2>';
}
function codingButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>Coding</h1> <h2>Overview</h2>';
}
function webDesignButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>Web Design</h1> <h2>Overview</h2>\
    <h2>Logs</h2>\
    <p><hr>Date - 3/12/24     Time - 1 hr, 15 min <br>Worked on connecting all buttons to the right projects side bar and header,\
    had to work out how to do longs strings in javascript but it only took a quick search. Also had to work out styling buttons in CSS </p>';
}
function pythonButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>Python</h1> <h2>Overview</h2>';
}
function htmlAndCSSButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>Html and CSS</h1> <h2>Overview</h2>';
}
function javaScriptButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>JavaScript</h1> <h2>Overview</h2>';
}
function cSharpButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>C Sharp</h1> <h2>Overview</h2>';
}
function worldBuildingButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>World Building</h1> <h2>Overview</h2>';
}
function worldBuildingGeneralButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>World building General</h1> <h2>Overview</h2>';
}
function threeDModelingButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>3D Modeling</h1> <h2>Overview</h2>';
}
function forGamesButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>3d Modeling For Games</h1> <h2>Overview</h2>';
}
function personalUseButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>3D Modeling For General Use</h1> <h2>Overview</h2>';
}
function digitalArtButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>Digital Art</h1> <h2>Overview</h2>';
}
function artCourseButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>Art Course</h1> <h2>Overview</h2>';
}
function personalProjButton() {
    document.getElementById('main').innerHTML = '';
    document.getElementById('main').innerHTML = '<h1>Digital Art Personal Projects</h1> <h2>Overview</h2>';
}