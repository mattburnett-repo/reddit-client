// import { createAsyncThunk } from "@reduxjs/toolkit";
const pkg = require('@reduxjs/toolkit');
const { createAsyncThunk } = pkg;

const redditApi = ''; // apply for access: https://docs.google.com/forms/d/e/1FAIpQLSezNdDNK1-P8mspSbmtC2r86Ee9ZRbC66u929cG2GX0T9UMyw/viewform


const loadData = createAsyncThunk(
    'items/loadData',
    async () => {
        const data = await fetch({redditApi});
        const output = await data.json();

        return output;
    }
)

console.log(loadData());
console.log(loadData);