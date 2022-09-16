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