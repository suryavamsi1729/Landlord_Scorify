const ASITdataobj = [
   {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Fair',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Good',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    }, 
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Excellent',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Repair',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Repair',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Good',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    }, 
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Excellent',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Fair',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Excellent',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Repair',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Repair',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Good',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    }, 
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Excellent',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
    {
        'PropertiesAdderess':'01 Prince Consort Road, Kelton, DG1 9UH.',
        'Document':'Self Inspection',
        'Result': 'Fair',
        'CreateBy':'khadijah ali',
        'Date': '12/05/2024',
    },
]
export const ASITData = (start,range)=>{
    if(range<=0){
        return ASITdataobj.slice(0,10);
    }
    else if(range>ASITdataobj.length){
        return ASITdataobj.slice(start,ASITdataobj.length);
    }
    else{
        console.log(ASITdataobj.slice(start, range));
        return ASITdataobj.slice(start, range);
    }
    
}
export const ASITsizeOfData = ()=>{
    return ASITdataobj.length;
}
export const ASITsearchingData= (searchState)=>{
    const filteredData = ASITdataobj.filter((row) =>{
        return (row.PropertiesAdderess.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Document.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Result?.toLowerCase().includes(searchState.toString().toLowerCase())||
                row.CreateBy.toString().toLowerCase().includes(searchState.toString().toLowerCase())||
                row.Date.toLowerCase().includes(searchState.toString().toLowerCase())
            )
    });
    return filteredData;
}