const API_URL = "https://tripadvisor16.p.rapidapi.com/";
const tripAdvisorHost = "tripadvisor16.p.rapidapi.com";
const tripAdvisorKey = "5a34249353msh9d4d1b9b019435ep182275jsnb59245ee8815";


document.getElementById('view-more-city-cards').style.display='none';
function viewMore() {
    let viewMoreButton = document.getElementById('viewMoreBtn');
    if(viewMoreButton.innerText==="View More"){
        document.getElementById('view-more-city-cards').style.display='initial';
        viewMoreButton.innerText="View Less";
    }
    else{
        document.getElementById('view-more-city-cards').style.display='none';
        viewMoreButton.innerText="View More";
    }
}

//Call disable loader after the page gets loaded completed
disableLoader();