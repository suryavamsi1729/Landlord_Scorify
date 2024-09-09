const REPCDataobj = [
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'EPC',
        'CurrentRating': 'A',
        'Date': '12/05/2024',
    },
    


]
export const REPCdata = (start,range)=>{
    if(range<=0){
        return REPCDataobj.slice(0,10);
    }
    else if(range>REPCDataobj.length){
        return REPCDataobj.slice(start,REPCDataobj.length);
    }
    else{
        console.log(REPCDataobj.slice(start, range));
        return REPCDataobj.slice(start, range);
    }
    
}
export const REPCsizeOfData = ()=>{
    return REPCDataobj.length;
}
export const REPCsearchingData= (searchState)=>{
    const filteredData = REPCDataobj.filter((row) =>{
        return (row.PropertiesAdderess.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Document.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.CurrentRating?.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Date.toString().toLowerCase().includes(searchState.toString().toLowerCase())
            )
    });
    return filteredData;
}