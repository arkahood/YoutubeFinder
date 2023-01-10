import {fetch} from 'cross-fetch';
export function youtubeData(data){
    return typeof data;
}
export async function testMyFn(url){
    var data;
    var pages = {
        nextPageToken : "",
        prePageToken : ""
    }
    await fetch(url)
        .then(response => response.json())
        .then(d => {data = d})
        .catch(err => {
            console.log(err);
            alert("Showing you a static data as we reached our daily youtube API limit.")
            data = staticData;
            return "TEST STATICALLY";
        });
    // console.log(data);
    pages.nextPageToken = data.nextPageToken;
    pages.prePageToken = data.prevPageToken;
    console.log(pages);
    return pages;
}