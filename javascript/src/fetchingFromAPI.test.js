import {youtubeData, testMyFn} from "./dataTest";
import {assert, expect} from 'chai';

describe("async call test",()=>{
    it("The API is returning object", ()=>{
        const expected = typeof {};
        const actual = youtubeData();
        expect(typeof actual).to.deep.equal(typeof expected);
    }),
    it("My Function Working Perfactly",async ()=>{
        const urlTest = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDsXJuqQWQiYb3BWrtxNVxaXaPmjhi7xAo"+
            "&type=video&part=snippet&maxResults=15&q=js&pageToken=CA8QAA";
        let expected = {
            nextPageToken: 'CB4QAA',
            prePageToken : 'CA8QAQ'
        };
        expected.prePageToken;
        let actual = await testMyFn(urlTest);
        expect(typeof expected).to.equal(typeof actual);
    })
})
