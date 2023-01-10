async function fetchingFromAPI(nextToken){
    const searchKey = text;
    console.log("This is searchKey file "+searchKey);

    const APIKEY = apiKey.apiKEy;
    const url = "https://www.googleapis.com/youtube/v3/search?key="+APIKEY+
    "&type=video&part=snippet&maxResults=15&q="+searchKey+"&pageToken="+nextToken;
    var tokens = await youtubeGetData(url);

    var buttonpage = document.createElement("div");
    buttonpage.setAttribute("class","buttonpage");

    const nextBtn = document.createElement("input");
    nextBtn.setAttribute('type', "submit");
    nextBtn.setAttribute('value', "Next");
    nextBtn.setAttribute('class',"submit-btn");
    //document.getElementById("important").append(nextBtn);
    const preBtn = document.createElement("input");
    preBtn.setAttribute('type', "submit");
    preBtn.setAttribute('value', "Prev");
    preBtn.setAttribute('class',"submit-btn");

    buttonpage.appendChild(preBtn);
    buttonpage.appendChild(nextBtn);
    document.body.appendChild(buttonpage);

    nextBtn.addEventListener("click", onNext);
    preBtn.addEventListener("click", onPrev);
    function onNext(e) {
        e.preventDefault();
        var deleteDiv = document.getElementById("important");
        while(deleteDiv.firstChild){
            deleteDiv.removeChild(deleteDiv.firstChild);
        }
        document.body.removeChild(buttonpage);
        console.log("hii");
        fetchingFromAPI(tokens.nextPageToken);
    }
    function onPrev(e){
        e.preventDefault();
        var deleteDiv = document.getElementById("important");
        while(deleteDiv.firstChild){
            deleteDiv.removeChild(deleteDiv.firstChild);
        }
        document.body.removeChild(buttonpage);
        console.log("hii");
        tokens.prePageToken ? fetchingFromAPI(tokens.prePageToken):alert("This is the First Page No Previous Page");
    }
}



// https://www.googleapis.com/youtube/v3/search?key=AIzaSyDsXJuqQWQiYb3BWrtxNVxaXaPmjhi7xAo
// &type=video&part=snippet&maxResults=10&q=js